import { useState } from "react";
import { projects } from "../../data/projects";

export default function ProjectCarousel() {
  const [activeId, setActiveId] = useState(projects[0]?.id);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2f5d62]">
              Selected Work
            </p>

            <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-[#183c40] md:text-5xl">
              Projects presented as expandable case-study previews.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#667085]">
            Click a project to expand it and preview the idea, role, tools, and
            direction without using the usual little rectangle parade.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto pb-8">
        <div className="mx-auto flex max-w-6xl gap-5 px-6">
          {projects.map((project, index) => {
            const isActive = activeId === project.id;

            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveId(project.id)}
                className={`group relative h-[430px] shrink-0 overflow-hidden rounded-[1.75rem] border border-[#e7e2d8] text-left shadow-[0_18px_60px_rgba(31,41,51,0.08)] transition-all duration-500 ease-in-out ${
                  isActive ? "w-[560px] bg-white" : "w-[170px] bg-[#e3eeee]"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#dceef2] via-white to-[#eee9f7]" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#183c40]/75 via-[#183c40]/10 to-transparent" />

                <div className="relative flex h-full flex-col justify-end p-6 text-white">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                    {String(index + 1).padStart(2, "0")} · {project.type}
                  </p>

                  <h3 className="text-2xl font-semibold leading-tight">
                    {project.title}
                  </h3>

                  <div
                    className={`grid transition-all duration-500 ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-4 max-w-md text-sm leading-6 text-white/85">
                        {project.description}
                      </p>

                      <p className="mt-4 text-sm font-semibold text-white">
                        {project.role}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href={`/project/${project.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#183c40]"
                        >
                          Case Study
                        </a>

                        <a
                          href={project.liveUrl}
                          onClick={(e) => e.stopPropagation()}
                          className="rounded-full border border-white/70 px-5 py-2 text-sm font-semibold text-white"
                        >
                          Preview
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
