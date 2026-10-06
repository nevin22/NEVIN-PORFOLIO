import { MotionRoot, Reveal } from "@/components/Reveal";
import { RotatingLine } from "@/components/RotatingLine";
import { Shell } from "@/components/Shell";
import { SidePanel } from "@/components/SidePanel";
import { SkillMark } from "@/components/SkillMark";
import { WorkCarousel } from "@/components/WorkCarousel";
import { buildPhrases, highlights, jobs, profile, skillGroups } from "@/data/profile";

const card =
  "rounded-3xl bg-card shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]";

export default function Home() {
  return (
    <MotionRoot>
    <Shell>
      <main className="mx-auto max-w-[1180px] px-4 pt-8 pb-20 sm:px-6 lg:px-8 lg:pt-10 lg:pb-28">
        <div className="flex flex-col gap-12 xl:grid xl:grid-cols-[minmax(0,1fr)_300px] xl:items-start xl:gap-x-12 xl:gap-y-12">
        <Reveal className="xl:col-start-1">
        <section id="overview" className="scroll-mt-24">
          <div className={`${card} relative overflow-hidden p-6 sm:p-8`}>
            <div className="hero-orb-a pointer-events-none absolute -top-24 -right-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="hero-orb-b pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(60,214,245,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(60,214,245,0.08) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                maskImage: "radial-gradient(ellipse at top right, black, transparent 72%)",
                WebkitMaskImage: "radial-gradient(ellipse at top right, black, transparent 72%)",
              }}
            />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-medium text-accent">{profile.role}</p>
                <span className="rounded-full bg-white/6 px-2.5 py-1 text-xs text-muted">
                  Philippines
                </span>
              </div>
              <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
                {profile.name}
              </h1>
              <RotatingLine phrases={buildPhrases} />
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
                {profile.summary}
              </p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                {profile.howIWork}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-accent px-4 text-sm font-semibold text-background transition hover:bg-accent/90"
                >
                  Get in touch
                </a>
                <a
                  href={profile.resumeHref}
                  download
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-white/10 px-4 text-sm font-medium transition hover:bg-white/5"
                >
                  Download resume
                </a>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="shrink-0 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-xs text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        </Reveal>

        {/* <div className="xl:col-start-1">
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {stats.map((stat) => (
              <article key={stat.value} className={`${card} p-5`}>
                <p className="text-2xl font-semibold tracking-tight text-accent">{stat.value}</p>
                <p className="mt-2 text-sm font-medium">{stat.label}</p>
                <p className="mt-1 text-xs text-faint">{stat.note}</p>
              </article>
            ))}
          </div>
        </div> */}

        <div className="xl:col-start-2 xl:row-span-5 xl:row-start-1">
          <div className="xl:sticky xl:top-8">
            <SidePanel />
          </div>
        </div>

        <Reveal className="xl:col-start-1">
        <section id="experience" className={`${card} scroll-mt-24 p-6 sm:p-8`}>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg font-semibold tracking-tight">Experience</h2>
            <p className="text-xs text-faint">Three roles</p>
          </div>
          <ol className="mt-8 space-y-10">
            {jobs.map((job) => (
              <li key={job.company} className="grid gap-4 border-t border-white/6 pt-8 first:border-t-0 first:pt-0 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6">
                <div>
                  <p className="text-sm font-medium text-foreground">{job.dates}</p>
                  {job.current ? (
                    <p className="mt-2 inline-flex rounded-full bg-accent/12 px-2 py-0.5 text-xs font-medium text-accent">
                      Current
                    </p>
                  ) : null}
                </div>
                <div>
                  <h3 className="text-base font-semibold">{job.role}</h3>
                  <p className="mt-1 text-sm text-accent">{job.company}</p>
                  <p className="mt-1 text-sm text-faint">{job.location}</p>
                  <ul className="mt-3 space-y-2">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>
        </Reveal>

        <Reveal className="xl:col-start-1">
          <WorkCarousel />
        </Reveal>

        <Reveal className="scroll-mt-24 xl:col-start-1">
        <section id="skills" className="scroll-mt-24">
          <div className={`${card} p-6 sm:p-8`}>
            <h2 className="text-lg font-semibold tracking-tight">Skills</h2>
            <p className="mt-1 max-w-2xl text-sm text-muted">
              Tools I use across web, mobile, real-time systems, cloud delivery, and AI-assisted features.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <article key={group.title} className="rounded-2xl bg-white/4 p-5">
                  <p className="text-xs font-medium tracking-wide text-faint">{group.title}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {[group.lead, ...group.items].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 rounded-xl bg-background/80 px-2.5 py-2">
                        <SkillMark name={item} />
                        <span className="text-xs leading-4 text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {"note" in group && group.note ? (
                    <p className="mt-3 text-sm leading-6 text-muted">{group.note}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
          <footer className="px-1 pt-10 pb-4 text-xs text-faint">
            {profile.name} · {profile.location}
          </footer>
        </section>
        </Reveal>
        </div>
      </main>
    </Shell>
    </MotionRoot>
  );
}
