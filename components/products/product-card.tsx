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
      className="group block rounded-[2rem] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/60 focus-visible:ring-offset-4"
    >
      <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#f3ebe4]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 90vw, 33vw"
        />

        {product.popular && (
          <div className="absolute left-4 top-4">
            <Badge>Best Seller</Badge>
          </div>
        )}

        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#6f4938] text-white opacity-0 shadow-sm transition-all duration-200 ease-out group-hover:scale-105 group-hover:bg-[#4c3024] group-hover:opacity-100 group-focus-visible:opacity-100">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl font-bold text-[#30231e] transition-colors duration-200 ease-out group-hover:text-[#4c3024] group-focus-visible:text-[#4c3024]">
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