import { links } from "../../data/links";

export default function Footer() {
  return (
    <footer className="border-t border-[#e7e2d8] py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-[#667085] md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Ammal Khaled Naser. Built with React.
        </p>

        <div className="flex flex-wrap gap-4">
          <a className="transition hover:text-[#2f5d62]" href={links.email}>
            Email
          </a>

          <a
            className="transition hover:text-[#2f5d62]"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            className="transition hover:text-[#2f5d62]"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
