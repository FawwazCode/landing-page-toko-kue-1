import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/format-price";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#f3ebe4]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 90vw, 33vw"
        />

        {product.popular && (
          <div className="absolute left-4 top-4">
            <Badge>Best Seller</Badge>
          </div>
        )}

        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4c3024] opacity-0 shadow-sm transition duration-300 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl font-bold text-[#30231e]">
            {product.name}
          </h3>

          <p className="mt-1 text-sm text-[#81736a]">
            {product.shortDescription}
          </p>
        </div>

        <span className="whitespace-nowrap text-sm font-semibold text-[#6f4938]">
          {formatPrice(product.price)}
        </span>
      </div>
    </Link>
  );
}