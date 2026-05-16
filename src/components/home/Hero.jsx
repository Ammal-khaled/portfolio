import Reveal from "../shared/Reveal";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pb-24 pt-32 lg:grid-cols-[1.1fr_0.9fr]">
      <Reveal>
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-[#2f5d62]">
            Frontend Development · UI/UX Design · Web Applications
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#183c40] md:text-7xl">
            Ammal Khaled Naser
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#667085]">
            Computer Information Systems fresh graduate focused on building
            clean, user-centered web interfaces, dashboards, and workflow-based
            systems.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-16 bg-[#2f5d62]" />
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((dot) => (
                <span
                  key={dot}
                  className="h-2 w-2 rounded-full bg-[#2f5d62]/70"
                />
              ))}
            </div>
            <span className="h-px w-16 bg-[#d8d1c5]" />
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#2f5d62] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#254b50]"
            >
              View Projects
            </a>

            <a
              href="/cv/Ammal_Khaled_Naser_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#2f5d62] px-7 py-3 text-sm font-semibold text-[#2f5d62] transition hover:-translate-y-0.5 hover:bg-[#e3eeee]"
            >
              Download CV
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="relative hidden lg:block">
          <div className="absolute -left-8 -top-8 h-56 w-56 rounded-full bg-[#dceef2] blur-3xl" />
          <div className="absolute -bottom-8 right-0 h-48 w-48 rounded-full bg-[#eee9f7] blur-3xl" />

          <div className="relative rounded-[2rem] border border-[#e7e2d8] bg-white/75 p-8 shadow-[0_24px_80px_rgba(31,41,51,0.08)] backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7c6a9c]">
              What I bring
            </p>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: "Frontend thinking",
                  text: "Clean interfaces, responsive layouts, and practical web experiences.",
                },
                {
                  title: "Workflow awareness",
                  text: "Experience with support systems, service flows, admin tools, and real user needs.",
                },
                {
                  title: "Design mindset",
                  text: "UI/UX prototypes, user flows, bilingual layout awareness, and clear visual structure.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-b border-[#e7e2d8] pb-5 last:border-b-0 last:pb-0"
                >
                  <h3 className="text-lg font-semibold text-[#183c40]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#667085]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
