"use client";

import { useEffect, useState } from "react";

export function RotatingLine({ phrases }: { phrases: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduced || phrases.length < 2) return;
    let fade = 0;
    const timer = window.setInterval(() => {
      setVisible(false);
      fade = window.setTimeout(() => {
        setIndex((current) => (current + 1) % phrases.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => {
      window.clearInterval(timer);
      window.clearTimeout(fade);
    };
  }, [phrases.length, reduced]);

  const phrase = phrases[reduced ? 0 : index] ?? phrases[0];

  return (
    <p className="mt-3 text-base text-muted sm:text-lg">
      I build{" "}
      <span
        className={`inline-block text-accent transition-opacity duration-300 ${
          visible || reduced ? "opacity-100" : "opacity-0"
        }`}
      >
        {phrase}
      </span>
    </p>
  );
}
