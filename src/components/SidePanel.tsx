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
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-full items-center gap-3 rounded-2xl bg-white/4 px-3 py-3 transition hover:bg-white/7"
            >
              <IconWrap>
                <GitHubIcon />
              </IconWrap>
              <span className="min-w-0">
                <span className="block text-xs text-faint">GitHub</span>
                <span className="block truncate text-sm">{profile.githubLabel}</span>
              </span>
            </a>
          </li>
        </ul>

        <p className="mt-5 text-sm leading-6 text-muted">{profile.location}</p>

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

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.4 9.4 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.9-5.1 6.9-9.6C22 6.6 17.5 2 12 2Z" />
    </svg>
  );
}
