import { projects } from "../../data/projects";
import Reveal from "../shared/Reveal";

export default function FeaturedCaseStudies() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-[#e7e2d8] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-16 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2f5d62]">
              Project Portfolio
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#183c40] md:text-5xl">
              A complete view of my projects across applications, support
              workflows, and design.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#667085]">
              Each case study explains the idea, my contribution, key workflows,
              tools, and project visuals. Some screens are illustrative where a
              safe, shareable app capture is not available yet.
            </p>
          </div>
        </Reveal>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.12}>
              <article
                className={`grid items-center gap-10 ${
                  index % 2 === 1
                    ? "lg:grid-cols-[0.9fr_1.1fr]"
                    : "lg:grid-cols-[1.1fr_0.9fr]"
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7c6a9c]">
                    {String(index + 1).padStart(2, "0")} · {project.type}
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#183c40] md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-[#667085]">
                    {project.description}
                  </p>

                  <div className="mt-6 border-l-2 border-[#2f5d62] pl-5">
                    <p className="text-sm font-semibold text-[#183c40]">
                      My Role
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#667085]">
                      {project.role}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#e3eeee] px-3 py-1 text-xs font-semibold text-[#2f5d62]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={`/project/${project.slug}`}
                      className="rounded-full bg-[#2f5d62] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#254b50]"
                    >
                      View Case Study
                    </a>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-[#2f5d62] px-6 py-3 text-sm font-semibold text-[#2f5d62] transition hover:-translate-y-0.5 hover:bg-[#e3eeee]"
                      >
                        Live / Preview
                      </a>
                    ) : (
                      <span className="rounded-full border border-[#d8d1c5] px-6 py-3 text-sm font-semibold text-[#667085]">
                        {project.figmaUrl ? "Open Figma prototype" : project.gallery?.length ? "Demo link coming soon" : "Screenshots unavailable"}
                      </span>
                    )}
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative overflow-hidden rounded-[2rem] border border-[#e7e2d8] bg-white p-5 shadow-[0_24px_80px_rgba(31,41,51,0.08)]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#dceef2] via-white to-[#eee9f7]">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className={`h-full w-full ${project.type.startsWith("Android") || project.slug === "government-services-redesign" ? "object-contain bg-[#f1f3ff]" : "object-cover object-top"} transition duration-500 hover:scale-[1.03]`}
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center p-8 text-center">
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#667085]">
                              Screenshots not included
                            </p>
                            <p className="mt-4 text-2xl font-semibold text-[#183c40]">
                              {project.title}
                            </p>
                            <p className="mt-2 max-w-md text-sm leading-6 text-[#667085]">
                              {project.previewNote || `${project.status} · ${project.year}`}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
