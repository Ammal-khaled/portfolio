export default function ProjectGallery({ images = [], title }) {
  if (!images.length) {
    return (
      <div className="rounded-[2rem] border border-[#e7e2d8] bg-white p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2f5d62]">
          Gallery
        </p>
        <p className="mt-3 text-[#667085]">Screenshots will be added soon.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2f5d62]">
          Gallery
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#183c40] md:text-4xl">
          Screens and visual previews
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {images.map((image, index) => (
          <figure
            key={`${image}-${index}`}
            className="overflow-hidden rounded-[2rem] border border-[#e7e2d8] bg-white p-3 shadow-[0_18px_60px_rgba(47,93,98,0.08)]"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#dceef2] via-white to-[#e3eeee]">
              <img
                src={image}
                alt={`${title} preview ${index + 1}`}
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>

            <figcaption className="px-3 py-4 text-sm text-[#667085]">
              {title} preview {index + 1}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
