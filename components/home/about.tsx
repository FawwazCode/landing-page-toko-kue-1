import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-[#f7f1eb] py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/gallery/gallery-01.webp"
            alt="cake shop"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 50vw"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a6b52]">
            Our story
          </p>

          <h2 className="mt-4 max-w-xl font-serif text-5xl font-bold leading-tight text-[#35241e]">
            Thoughtful recipes. Good ingredients. Cakes made with care.
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-[#75675f]">
            <p>
              Toko Kue began with a simple idea: make cakes that feel
              special, whether they mark a celebration or brighten an
              ordinary day.
            </p>

            <p>
              We bake in small batches and choose ingredients with care,
              bringing homemade warmth to every slice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}