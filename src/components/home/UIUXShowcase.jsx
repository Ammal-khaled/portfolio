import Reveal from "../shared/Reveal";
import { projects } from "../../data/projects";

const uiuxProjects = projects.filter((project) =>
  [
    "cancare",
    "sair",
    "aquadesk-support-workflow",
    "government-services-redesign",
  ].includes(project.slug),
);

export default function UIUXShowcase() {
  return (
    <section id="uiux" className="scroll-mt-20 border-y border-[#e7e2d8] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2f5d62]">
                UI/UX Work
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#183c40] md:text-5xl">
                Design work that explains the user journey before the code
                begins.
              </h2>
            </div>

            <p className="text-base leading-7 text-[#667085]">
              These projects focus on user flows, interface structure,
              prototypes, and product thinking. Open each case study for its
              project context and visuals.
            </p>
          </div>
        </Reveal>

        <div className="space-y-5">
          {uiuxProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <a
                href={`/project/${project.slug}`}
                className="group grid gap-6 border-t border-[#d8d1c5] py-8 transition hover:border-[#2f5d62] lg:grid-cols-[0.15fr_0.85fr_1fr]"
              >
                <span className="text-sm font-semibold text-[#7c6a9c]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f5d62]">
                    {project.type}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#183c40] md:text-3xl">
                    {project.title.replace(" — Care Coordination Dashboard", "")}
                  </h3>
                </div>

                <div>
                  <p className="text-sm leading-7 text-[#667085]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#d8d1c5] px-3 py-1 text-xs font-semibold text-[#183c40] transition group-hover:border-[#2f5d62]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
