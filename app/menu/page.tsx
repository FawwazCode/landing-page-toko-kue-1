import { BestSellers } from "@/components/home/best-sellers";
import { DonutBoxBuilder } from "@/components/donut-box/donut-box-builder";

export default function MenuPage() {
  return (
    <main className="pt-20">
      <BestSellers />
      <DonutBoxBuilder />
    </main>
  );
}