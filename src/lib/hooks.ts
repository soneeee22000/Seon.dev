"use client";

import { useEffect, useState } from "react";

/**
 * Observes elements with `.reveal`, `.rl`, `.rr` classes and adds `.in`
 * when they enter the viewport, triggering CSS scroll-reveal animations.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -40px 0px" },
    );

    const timer = setTimeout(() => {
      document
        .querySelectorAll(".reveal,.rl,.rr")
        .forEach((el) => observer.observe(el));
    }, 150);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);
}

/**
 * Tracks which section is currently visible in the viewport.
 * Returns the ID of the active section for nav highlighting.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

/**
 * Smooth-scrolls to the element with the given ID.
 */
export function scrollToSection(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
