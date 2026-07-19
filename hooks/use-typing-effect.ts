"use client";

import { useEffect, useState } from "react";

interface UseTypingEffectOptions {
  words: string[];
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
}

/**
 * Cycles through a list of words with a typewriter effect. Falls back to
 * simply displaying the first word if the user prefers reduced motion.
 */
export function useTypingEffect({
  words,
  typingSpeedMs = 65,
  deletingSpeedMs = 35,
  pauseMs = 1600,
}: UseTypingEffectOptions) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || words.length === 0) return;
    const currentWord = words[wordIndex % words.length] ?? "";

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeedMs);
    } else if (!isDeleting && text.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingSpeedMs);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeedMs, deletingSpeedMs, pauseMs, prefersReducedMotion]);

  return prefersReducedMotion ? words[0] ?? "" : text;
}
