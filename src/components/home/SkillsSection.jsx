import { skillGroups } from "../../data/skills";
import Reveal from "../shared/Reveal";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2f5d62]">
              Skills
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#183c40] md:text-5xl">
              A practical mix of development, design, testing, and
              documentation.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#667085]">
              My skills are shaped by computer information systems, QA training,
              customer support experience, and building real portfolio projects.
              A suspiciously useful combination, frankly.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08}>
              <article className="border-t border-[#d8d1c5] pt-6">
                <h3 className="text-xl font-semibold text-[#183c40]">
                  {group.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#183c40] shadow-[0_8px_24px_rgba(31,41,51,0.05)] ring-1 ring-[#e7e2d8]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
