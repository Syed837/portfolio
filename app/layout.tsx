import type { Metadata, Viewport } from "next";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { buildMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";
import { profile } from "@/data/profile";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ScrollProgressBar } from "@/components/layout/scroll-progress-bar";
import { GridBackground } from "@/components/shared/grid-background";
import { PageTransition } from "@/components/layout/page-transition";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({
    title: `${profile.name} — Software Engineer`,
    description: profile.valueProposition,
  }),
  title: {
    default: `${profile.name} — Software Engineer`,
    template: `%s | ${profile.name}`,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05070f" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.roles[0],
  description: profile.valueProposition,
  url: SITE_URL,
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
  sameAs: [profile.linkedinUrl, profile.githubUrl].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="portfolio-theme">
          <GridBackground />
          <ScrollProgressBar />
          <Nav />
          <main id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
