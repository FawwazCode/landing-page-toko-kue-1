import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="bg-[#6f4938] py-16 md:py-20 lg:py-20 text-white">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e9cdb8]">
          A little something to share
        </p>

        <h2 className="mt-5 font-serif text-5xl font-bold leading-tight md:text-6xl">
          Make the moment a little sweeter.
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-[#eadcd2]">
          Choose your favorite cake slices, put together a selection,
          and send your order to us through WhatsApp.
        </p>

        <div className="mt-8">
          <Button
            href="/menu#cake-selection"
            variant="secondary"
          >
            Explore Cake Selection
            <ArrowRight size={17} />
          </Button>
        </div>
      </div>
    </section>
  );
}