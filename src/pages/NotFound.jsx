import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f7f3] px-6 text-[#183c40]">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2f5d62]">
          404
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Page not found
        </h1>

        <p className="mt-5 text-base leading-7 text-[#667085]">
          This page does not exist yet. Either the link is wrong, or the project
          is still waiting for its dramatic entrance.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-[#2f5d62] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#254b50]"
        >
          Back to Portfolio
        </Link>
      </div>
    </main>
  );
}
