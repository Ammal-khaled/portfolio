import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { links } from "../../data/links";
import Reveal from "../shared/Reveal";

const contactLinks = [
  {
    label: "Email Me",
    href: links.email,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    href: links.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: links.github,
    icon: Github,
    external: true,
  },
  {
    label: "CV",
    href: links.cv,
    icon: FileText,
    external: true,
  },
];

export default function ContactCTA() {
  return (
    <section id="contact" className="border-t border-[#e7e2d8] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="rounded-[2rem] bg-[#2f5d62] px-6 py-14 text-white shadow-[0_24px_80px_rgba(47,93,98,0.18)] md:px-12 md:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e3eeee]">
                  Contact
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                  Let’s connect around frontend, UI/UX, or web development.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
                  I’m building my career around practical web interfaces,
                  user-centered design, and systems that make real workflows
                  easier to manage.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {contactLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="group flex items-center justify-between rounded-2xl border border-white/25 px-5 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={18} />
                        {item.label}
                      </span>
                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
