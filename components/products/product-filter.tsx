"use client";

import { categories } from "@/data/categories";

interface ProductFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProductFilter({
  activeCategory,
  onCategoryChange,
}: ProductFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const active = activeCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-2 ${
              active
                ? "bg-[#6f4938] text-white hover:bg-[#4c3024]"
                : "bg-[#f3ebe4] text-[#6f4938] hover:bg-[#ead6c4] hover:text-[#4c3024]"
            }`}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}