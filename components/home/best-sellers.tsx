"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/products/product-grid";
import { ProductFilter } from "@/components/products/product-filter";

export function BestSellers() {
  const [category, setCategory] = useState("all");

  const filteredProducts =
    category === "all"
      ? products
      : products.filter(
          (product) => product.category === category
        );

  return (
    <section id="menu" className="bg-[#fffdf9] py-16 md:py-20 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9a6b52]">
              From the Toko Kue kitchen
            </p>

            <h2 className="mt-3 font-serif text-5xl font-bold tracking-tight text-[#35241e]">
              Cakes for every kind of gathering.
            </h2>
          </div>

          <ProductFilter
            activeCategory={category}
            onCategoryChange={setCategory}
          />
        </div>

        <div className="mt-8 md:mt-10">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </section>
  );
}