import { Code2, PenTool, Workflow } from "lucide-react";
import Reveal from "../shared/Reveal";

const buildAreas = [
  {
    title: "Frontend Development",
    icon: Code2,
    description:
      "I build responsive web interfaces, structured layouts, and interactive pages using HTML, CSS, JavaScript, React, and modern frontend tools.",
    points: ["Responsive layouts", "React components", "Clean UI structure"],
  },
  {
    title: "UI/UX Design",
    icon: PenTool,
    description:
      "I design user flows, prototypes, and interface layouts with attention to clarity, accessibility, and real user needs.",
    points: ["Figma prototypes", "User flows", "Bilingual layout awareness"],
  },
  {
    title: "Workflow-Based Systems",
    icon: Workflow,
    description:
      "I enjoy building systems that organize real processes, especially dashboards, portals, admin tools, and support-related workflows.",
    points: ["Admin tools", "Service portals", "Role-based workflows"],
  },
];

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2f5d62]">
              What I Build
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#183c40] md:text-5xl">
              Interfaces and systems that are clear, practical, and easy to use.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#667085]">
              My work connects frontend development, UI/UX thinking, QA
              awareness, and real service workflows.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {buildAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <Reveal key={area.title} delay={index * 0.1}>
                <article className="group border-t border-[#d8d1c5] pt-7">
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-sm font-semibold text-[#2f5d62]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8d1c5] bg-[#f8f7f3] text-[#2f5d62] transition group-hover:border-[#2f5d62] group-hover:bg-[#e3eeee]">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#183c40]">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#667085]">
                    {area.description}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {area.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm font-medium text-[#183c40]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2f5d62]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
