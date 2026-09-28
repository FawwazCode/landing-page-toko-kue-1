import { Hero } from "@/components/home/hero";
import { BestSellers } from "@/components/home/best-sellers";
import { About } from "@/components/home/about";
import { Gallery } from "@/components/home/gallery";
import { Testimonials } from "@/components/home/testimonials";
import { FAQ } from "@/components/home/faq";
import { CTA } from "@/components/home/cta";
import { DonutBoxBuilder } from "@/components/donut-box/donut-box-builder";
import { LocationSection } from "@/components/home/location-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />
      <About />
      <Gallery />
      <Testimonials />
      <LocationSection />
      <DonutBoxBuilder />
      <FAQ />
      <CTA />
    </main>
  );
}