import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { profile } from "@/data/profile";

interface BuildMetadataArgs {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

/**
 * Build consistent Next.js Metadata (title, description, OpenGraph, Twitter card)
 * for a given page. Keeps SEO copy centralized instead of duplicated per-page.
 */
export function buildMetadata({
  title,
  description,
  path = "",
  image = "/images/og-default.png",
  noIndex = false,
}: BuildMetadataArgs): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === "" ? title : `${title} | ${profile.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: profile.name,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
