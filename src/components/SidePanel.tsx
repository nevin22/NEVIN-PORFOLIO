import { education, jobs, profile } from "@/data/profile";

const card =
  "rounded-3xl bg-card p-5 pb-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] sm:p-6 sm:pb-8";

export function SidePanel() {
  const current = jobs.find((job) => job.current) ?? jobs[0];

  return (
    <div id="contact" className="scroll-mt-24 space-y-12">
      <section className={card}>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold tracking-tight">Contact</h2>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-positive/12 px-2.5 py-1 text-xs font-medium text-positive">
            <span className="h-1.5 w-1.5 rounded-full bg-positive" />
            {profile.availability}
          </span>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="flex h-full items-center gap-3 rounded-2xl bg-white/4 px-3 py-3 transition hover:bg-white/7"
            >
              <IconWrap>
                <MailIcon />
              </IconWrap>
              <span className="min-w-0">
                <span className="block text-xs text-faint">Email</span>
                <span className="block truncate text-sm">{profile.email}</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-full items-center gap-3 rounded-2xl bg-white/4 px-3 py-3 transition hover:bg-white/7"
            >
              <IconWrap>
                <LinkIcon />
              </IconWrap>
              <span className="min-w-0">
                <span className="block text-xs text-faint">LinkedIn</span>
                <span className="block truncate text-sm">{profile.linkedinLabel}</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={profile.phoneHref}
              className="flex h-full items-center gap-3 rounded-2xl bg-white/4 px-3 py-3 transition hover:bg-white/7"
            >
              <IconWrap>
                <PhoneIcon />
              </IconWrap>
              <span>
                <span className="block text-xs text-faint">Phone</span>
                <span className="block text-sm">{profile.phoneDisplay}</span>
              </span>
            </a>
          </li>
        </ul>

        <p className="mt-5 text-sm leading-6 text-muted">{profile.location}</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          <a
            href={`mailto:${profile.email}`}
            className="flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/8 text-sm font-semibold text-foreground transition hover:bg-white/12"
          >
            Email Nevin
          </a>
          <a
            href={profile.resumeHref}
            className="flex h-11 items-center justify-center rounded-xl border border-white/10 text-sm font-medium transition hover:bg-white/5"
            download
          >
            Download resume
          </a>
        </div>
      </section>

      <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-1 xl:gap-12">
        <section className={card}>
          <p className="text-xs font-medium tracking-wide text-faint">Now</p>
          <p className="mt-2 text-base font-semibold">{current.role}</p>
          <p className="mt-1 text-sm text-accent">{current.company}</p>
          <p className="mt-2 text-sm text-muted">{current.dates}</p>
          <p className="mt-1 text-sm text-faint">{current.location}</p>
        </section>

        <section className={card}>
          <p className="text-xs font-medium tracking-wide text-faint">Education</p>
          <p className="mt-2 text-base font-semibold">{education.credential}</p>
          <p className="mt-1 text-sm text-muted">{education.school}</p>
          <p className="mt-1 text-sm text-faint">
            {education.place} · {education.year}
          </p>
        </section>
      </div>
    </div>
  );
}

function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
      {children}
    </span>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 8 8 6 8-6" strokeLinejoin="round" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M10 14a5 5 0 0 0 7.1.1l1.4-1.5a5 5 0 0 0-7.1-7.1L10.2 6.7" strokeLinecap="round" />
      <path d="M14 10a5 5 0 0 0-7.1-.1L5.5 11.4a5 5 0 0 0 7.1 7.1l1.2-1.2" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path
        d="M8 4.5h2.2l1.2 3-1.6 1a12 12 0 0 0 5.5 5.5l1-1.6 3 1.2V16a2 2 0 0 1-2.2 2A14.5 14.5 0 0 1 6 6.7 2 2 0 0 1 8 4.5Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}
