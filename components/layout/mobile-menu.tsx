"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Sheet } from "@/components/ui/sheet";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full p-2 text-[#4c3024] transition-all duration-200 ease-out hover:scale-105 hover:bg-[#ead6c4] hover:text-[#4c3024] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-2 md:hidden"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      <Sheet open={open} onClose={() => setOpen(false)}>
        <div className="flex items-center justify-between">
          <span className="font-serif text-2xl font-bold">
            Toko Kue
          </span>

          <button
            onClick={() => setOpen(false)}
            className="rounded-full p-2 transition-all duration-200 ease-out hover:scale-105 hover:bg-[#ead6c4] hover:text-[#4c3024] hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-2"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="rounded-sm text-lg font-medium transition-colors duration-300 ease-out hover:text-[#4c3024] hover:underline hover:decoration-[#9a6b52] hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-4"
          >
            Home
          </Link>

          <Link
            href="/menu"
            onClick={() => setOpen(false)}
            className="rounded-sm text-lg font-medium transition-colors duration-300 ease-out hover:text-[#4c3024] hover:underline hover:decoration-[#9a6b52] hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-4"
          >
            Menu
          </Link>

          <a
            href="/#about"
            onClick={() => setOpen(false)}
            className="rounded-sm text-lg font-medium transition-colors duration-300 ease-out hover:text-[#4c3024] hover:underline hover:decoration-[#9a6b52] hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-4"
          >
            About
          </a>
        </nav>
      </Sheet>
    </>
  );
}