import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Figma } from "lucide-react";
import ProjectGallery from "./ProjectGallery";
import Reveal from "../shared/Reveal";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function ProjectActions({ project }) {
  const actions = [
    {
      label: "Live Demo",
      href: project.liveUrl,
      icon: ExternalLink,
      external: true,
    },
    {
      label: "GitHub",
      href: project.githubUrl,
      icon: Github,
      external: true,
    },
    {
      label: "Figma Prototype",
      href: project.figmaUrl,
      icon: Figma,
      external: true,
    },
  ].filter((item) => item.href);

  if (!actions.length) {
    return (
      <p className="rounded-full bg-[#e3eeee] px-5 py-3 text-sm font-semibold text-[#2f5d62]">
        Links coming soon
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            className="inline-flex items-center gap-2 rounded-full bg-[#2f5d62] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#254b50]"
          >
            <Icon size={16} />
            {item.label}
          </a>
        );
      })}
    </div>
  );
}

export default function ProjectDetailLayout({ project }) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f7f3] text-[#183c40]">
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-28">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2f5d62] transition hover:gap-3"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>

          <Reveal>
            <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2f5d62]">
                  {project.type} · {project.year}
                </p>

                <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
                  {project.title}
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-[#667085]">
                  {project.fullDescription || project.description}
                </p>

                <div className="mt-8">
                  <ProjectActions project={project} />
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#e7e2d8] bg-white p-6 shadow-[0_24px_80px_rgba(47,93,98,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2f5d62]">
                  Project Snapshot
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-[#183c40]">
                      Status
                    </p>
                    <p className="mt-1 text-sm text-[#667085]">
                      {project.status}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#183c40]">
                      My Role
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#667085]">
                      {project.role}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#183c40]">
                      Tools & Tech
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-[#e3eeee] px-3 py-1 text-xs font-semibold text-[#2f5d62]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="border-y border-[#e7e2d8] py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2f5d62]">
                  Problem
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                  What this project tries to solve
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base leading-8 text-[#667085]">
                {project.problem}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
            <Reveal>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2f5d62]">
                  Key Features
                </p>

                <ul className="mt-8 space-y-4">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="border-l-2 border-[#2f5d62] pl-5 text-sm leading-7 text-[#667085]"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2f5d62]">
                  What I Learned
                </p>

                <ul className="mt-8 space-y-4">
                  {project.learnings.map((learning) => (
                    <li
                      key={learning}
                      className="border-l-2 border-[#e7e2d8] pl-5 text-sm leading-7 text-[#667085]"
                    >
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-[#e7e2d8] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <ProjectGallery images={project.gallery} title={project.title} />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
