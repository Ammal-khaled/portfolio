export default function ProjectSlide({ project, index }) {
  const hasLiveUrl = Boolean(project.liveUrl);

  return (
    <article className="grid min-w-[86%] snap-center gap-8 rounded-[2rem] border border-[#e7e2d8] bg-white/75 p-6 shadow-[0_18px_60px_rgba(31,41,51,0.08)] backdrop-blur md:min-w-[72%] md:grid-cols-[0.9fr_1.1fr] md:p-8 lg:min-w-[62%]">
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.25em] text-[#7c6a9c]">
            {String(index + 1).padStart(2, "0")} · {project.type}
          </p>

          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#183c40] md:text-4xl">
            {project.title}
          </h3>

          <p className="mt-4 text-base leading-7 text-[#667085]">
            {project.description}
          </p>

          <p className="mt-5 text-sm font-semibold text-[#2f5d62]">
            {project.role}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full bg-[#e3eeee] px-3 py-1 text-xs font-semibold text-[#2f5d62]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`/project/${project.slug}`}
            className="rounded-full bg-[#2f5d62] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#254b50]"
          >
            Case Study
          </a>

          {hasLiveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#2f5d62] px-5 py-2.5 text-sm font-semibold text-[#2f5d62] transition hover:-translate-y-0.5 hover:bg-[#e3eeee]"
            >
              Live / Preview
            </a>
          ) : (
            <span className="rounded-full border border-[#d8d1c5] px-5 py-2.5 text-sm font-semibold text-[#667085]">
              Preview Coming Soon
            </span>
          )}
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.5rem] border border-[#e7e2d8] bg-white shadow-[0_18px_60px_rgba(47,93,98,0.08)]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-[320px] w-full object-cover object-top transition duration-500 hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-[320px] items-center justify-center bg-gradient-to-br from-[#dceef2] via-white to-[#eee9f7] p-8 text-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#667085]">
                Project Preview
              </p>

              <p className="mt-3 text-2xl font-semibold text-[#183c40]">
                {project.title}
              </p>

              <p className="mt-2 text-sm text-[#667085]">
                {project.status} · {project.year}
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
