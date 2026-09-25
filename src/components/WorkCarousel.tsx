"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { work, workNote } from "@/data/profile";

const card =
  "rounded-3xl bg-card shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]";

function wrap(index: number) {
  return (index + work.length) % work.length;
}

export function WorkCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const slide = work[index];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const timer = window.setInterval(() => {
      setIndex((current) => wrap(current + 1));
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, reduced, index]);

  function go(next: number) {
    setIndex(wrap(next));
  }

  return (
    <section
      id="work"
      aria-roledescription="carousel"
      aria-label="Work showcase"
      className={`${card} scroll-mt-24 p-6 sm:p-8`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="flex items-start justify-between gap-4 px-1">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Work showcase</h2>
          {workNote ? <p className="mt-1 max-w-xl text-sm text-faint">{workNote}</p> : null}
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl bg-white/6 text-foreground transition hover:bg-white/10"
            aria-label="Previous slide"
            onClick={() => go(index - 1)}
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl bg-white/6 text-foreground transition hover:bg-white/10"
            aria-label="Next slide"
            onClick={() => go(index + 1)}
          >
            <Chevron direction="right" />
          </button>
        </div>
      </div>

      <div
        className="mt-6 overflow-hidden rounded-2xl bg-[#14161b]"
        onPointerDown={(event) => {
          event.currentTarget.dataset.x = String(event.clientX);
        }}
        onPointerUp={(event) => {
          const start = Number(event.currentTarget.dataset.x ?? event.clientX);
          const delta = event.clientX - start;
          if (delta > 48) go(index - 1);
          if (delta < -48) go(index + 1);
        }}
      >
        <div
          className={reduced ? "flex" : "flex transition-transform duration-500 ease-out"}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {work.map((item, itemIndex) => (
            <div key={item.image} className="relative aspect-[16/10] w-full shrink-0" aria-hidden={itemIndex !== index}>
              <Image
                src={item.image}
                alt=""
                fill
                unoptimized
                className="object-contain"
                sizes="(min-width: 1280px) 860px, 100vw"
                priority={itemIndex === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl" aria-live="polite">
          <h3 className="text-base font-semibold">{slide.title}</h3>
          <p className="mt-1 text-sm leading-6 text-muted">{slide.summary}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {slide.tags.map((tag) => (
              <li key={tag} className="rounded-full bg-white/6 px-2.5 py-1 text-xs text-muted">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Slides">
          {work.map((item, itemIndex) => (
            <button
              key={item.image}
              type="button"
              role="tab"
              aria-selected={itemIndex === index}
              aria-label={`Show ${item.title}`}
              className={`h-1.5 rounded-full transition ${
                itemIndex === index ? "w-6 bg-accent" : "w-1.5 bg-white/25 hover:bg-white/40"
              }`}
              onClick={() => go(itemIndex)}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 hidden gap-3 sm:grid sm:grid-cols-4 lg:grid-cols-7">
        {work.map((item, itemIndex) => (
          <button
            key={item.title}
            type="button"
            onClick={() => go(itemIndex)}
            aria-label={`Show ${item.title}`}
            className={`relative aspect-[16/10] overflow-hidden rounded-xl bg-[#14161b] ring-2 transition ${
              itemIndex === index ? "ring-accent" : "ring-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image src={item.image} alt="" fill unoptimized className="object-contain" sizes="160px" />
          </button>
        ))}
      </div>
    </section>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        d={direction === "left" ? "M14.5 6.5 9 12l5.5 5.5" : "M9.5 6.5 15 12l-5.5 5.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
