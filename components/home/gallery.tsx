import Image from "next/image";

const images = [
  "gallery-01.jpeg",
  "gallery-02.jpeg",
  "gallery-03.jpeg",
  "gallery-04.jpeg",
];

export function Gallery() {
  return (
    <section className="bg-[#fffdf9] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a6b52]">
            From our kitchen
          </p>

          <h2 className="mt-3 font-serif text-5xl font-bold text-[#35241e]">
            Made to be shared.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={image}
              className={`relative aspect-square overflow-hidden rounded-[1.5rem] ${
                index === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <Image
                src={`/images/gallery/${image}`}
                alt={`Toko Kue cake gallery ${index + 1}`}
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}