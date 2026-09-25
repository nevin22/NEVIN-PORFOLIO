"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/profile";

function IconOverview() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" strokeLinejoin="round" />
    </svg>
  );
}

function IconExperience() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M8 7V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" strokeLinecap="round" />
      <rect x="3.5" y="7" width="17" height="13" rx="2" />
      <path d="M3.5 12h17" />
    </svg>
  );
}

function IconWork() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="m8 14 2.2-2.2a1 1 0 0 1 1.4 0L15 15l1.2-1.2a1 1 0 0 1 1.4 0L19 15" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="9" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconSkills() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4 7h16M4 12h10M4 17h13" strokeLinecap="round" />
    </svg>
  );
}

function IconContact() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="3.5" y="5" width="17" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinejoin="round" />
    </svg>
  );
}

const icons = [IconOverview, IconExperience, IconWork, IconSkills, IconContact];

export function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(nav[0].id);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const nodes = nav
      .filter((item) => !(desktop.matches && item.id === "contact"))
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {open ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      ) : null}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col overflow-y-auto border-r border-white/6 bg-sidebar transition-transform duration-200 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 px-5 pt-6 pb-6">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-violet text-sm font-semibold text-white">
            N
          </span>
          <div>
            <p className="leading-none font-semibold">{profile.shortName}</p>
            <p className="mt-1 text-xs text-faint">Portfolio</p>
          </div>
        </div>

        <p className="px-5 pb-2 text-xs font-medium tracking-wide text-faint">Menu</p>
        <nav className="flex-1 space-y-1 px-3" aria-label="Sections">
          {nav.map((item, index) => {
            const Icon = icons[index];
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => {
                  setActive(item.id);
                  setOpen(false);
                }}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                  isActive
                    ? "bg-white/8 text-foreground"
                    : "text-muted hover:bg-white/4 hover:text-foreground"
                }`}
              >
                <Icon />
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="m-3 rounded-2xl bg-card p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
          <div className="flex items-center gap-3">
            <span className="relative grid h-10 w-10 place-items-center rounded-full bg-white/6 text-xs font-semibold">
              NG
              <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-positive ring-2 ring-card" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{profile.shortName} Gabriel</p>
              <p className="text-xs text-positive">{profile.availability}</p>
            </div>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 flex h-10 items-center justify-center rounded-xl bg-white/6 text-sm font-medium transition hover:bg-white/10"
          >
            Email me
          </a>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/6 bg-background/85 px-4 py-3 backdrop-blur-md lg:hidden">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl bg-card"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
          <p className="text-sm font-semibold">{profile.shortName}</p>
          <a
            href={`mailto:${profile.email}`}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/8 text-foreground"
            aria-label="Email Nevin"
          >
            <IconContact />
          </a>
        </header>
        {children}
      </div>
    </div>
  );
}
