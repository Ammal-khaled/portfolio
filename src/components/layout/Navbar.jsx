import { useState } from "react";
import { Menu, X } from "lucide-react";
import { links } from "../../data/links";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "What I Build", href: "/#what-i-build" },
  { label: "UI/UX", href: "/#uiux" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-[#e7e2d8]/80 bg-[#f8f7f3]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="/"
            onClick={closeMenu}
            className="text-sm font-bold tracking-[0.25em] text-[#183c40]"
          >
            AMMAL
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#667085] transition hover:text-[#2f5d62]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <a
              href={links.cv}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#2f5d62] px-4 py-2 text-sm font-semibold text-[#2f5d62] transition hover:bg-[#e3eeee]"
            >
              CV
            </a>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e7e2d8] text-[#183c40] md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={20} />
          </button>
        </nav>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            onClick={closeMenu}
            className="absolute inset-0 bg-[#183c40]/25"
            aria-label="Close navigation overlay"
          />

          <aside className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-[#f8f7f3] p-6 shadow-[-20px_0_80px_rgba(34,52,56,0.18)]">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold tracking-[0.25em] text-[#183c40]">
                AMMAL
              </span>

              <button
                type="button"
                onClick={closeMenu}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e7e2d8] text-[#183c40]"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mt-12 flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-[#e7e2d8] pb-4 text-2xl font-semibold text-[#183c40] transition hover:text-[#2f5d62]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-auto space-y-3">
              <a
                href={links.cv}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="block rounded-full bg-[#2f5d62] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Download CV
              </a>

              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="block rounded-full border border-[#2f5d62] px-5 py-3 text-center text-sm font-semibold text-[#2f5d62]"
              >
                GitHub
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
