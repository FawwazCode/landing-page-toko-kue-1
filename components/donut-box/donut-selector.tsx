"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { products } from "@/data/products";
import { SelectedDonut } from "@/types/donut-box";
import { formatPrice } from "@/lib/format-price";

interface DonutSelectorProps {
  selectedDonuts: SelectedDonut[];
  selectedCount: number;
  boxSize: number;
  onAdd: (productId: string) => void;
  onRemove: (productId: string) => void;
}

export function DonutSelector({
  selectedDonuts,
  selectedCount,
  boxSize,
  onAdd,
  onRemove,
}: DonutSelectorProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {products.map((product) => {
        const selected = selectedDonuts.find(
          (item) => item.productId === product.id
        );

        const quantity = selected?.quantity ?? 0;

        return (
          <div
            key={product.id}
            className="flex gap-4 rounded-2xl border border-[#e6dbd3] bg-white p-3"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#f3ebe4]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-[#30231e]">
                {product.name}
              </h3>

              <p className="mt-1 text-xs text-[#81736a]">
                {formatPrice(product.price)}
              </p>

              <div className="mt-3 flex items-center gap-2">
                <button
                  onClick={() => onRemove(product.id)}
                  disabled={quantity === 0}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d9c8ba] text-sm disabled:opacity-30"
                >
                  −
                </button>

                <span className="w-5 text-center text-sm font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={() => onAdd(product.id)}
                  disabled={selectedCount >= boxSize}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6f4938] text-white disabled:opacity-30"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}