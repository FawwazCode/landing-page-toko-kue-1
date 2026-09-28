import Link from "next/link";
import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#eadfd6] bg-[#f7f1eb]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <h2 className="font-serif text-3xl font-bold text-[#3c2921]">
            Toko Kue
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-7 text-[#75675f]">
            Freshly baked cakes made with good ingredients,
            thoughtful recipes, and a little bit of sweetness.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#30231e]">
            Explore
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-[#75675f]">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/menu#cake-selection">Explore Cake Selection</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[#30231e]">
            Find Us
          </h3>

          <div className="mt-4 space-y-3 text-sm text-[#75675f]">
            <p className="flex items-center gap-2">
              <MapPin size={18} />
              Jakarta, Indonesia
            </p>

            <p className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>

              @tokokue.id
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#eadfd6] py-5 text-center text-xs text-[#897b72]">
        © 2026 Toko Kue. All rights reserved.
      </div>
    </footer>
  );
}