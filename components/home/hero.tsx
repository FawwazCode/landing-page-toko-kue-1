import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7efe7]">
      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-8 px-5 pb-16 pt-28 lg:min-h-[760px] lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="relative z-10">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#9a6b52]">
            Freshly baked with care
          </p>

          <h1 className="max-w-xl font-serif text-6xl font-bold leading-[0.95] tracking-tight text-[#35241e] sm:text-7xl lg:text-8xl">
            Made for sweet moments.
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-[#75675f]">
            Freshly baked cakes for celebrations, gatherings, and little
            moments worth making sweeter. Discover the Toko Kue collection.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/menu">
              Explore Our Cakes
              <ArrowRight size={17} />
            </Button>

            <Button
              href="/menu#cake-selection"
              variant="outline"
            >
              Create a Selection
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-3 text-sm text-[#75675f]">
            <ArrowDown size={17} />
            <span>Scroll to discover</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto aspect-square w-full max-w-[450px]">
          <div className="absolute inset-7 rounded-full bg-[#e7cbb8]" />

          <div className="relative h-full w-full overflow-hidden rounded-[45%]">
            <Image
              src="/images/hero/hero-cake.jpeg"
              alt="Freshly baked cakes from Toko Kue"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 450px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}