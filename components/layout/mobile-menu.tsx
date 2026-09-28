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
        className="rounded-full p-2 text-[#4c3024] md:hidden"
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
            className="rounded-full p-2"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-lg font-medium"
          >
            Home
          </Link>

          <Link
            href="/menu"
            onClick={() => setOpen(false)}
            className="text-lg font-medium"
          >
            Menu
          </Link>

          <a
            href="/#about"
            onClick={() => setOpen(false)}
            className="text-lg font-medium"
          >
            About
          </a>
        </nav>
      </Sheet>
    </>
  );
}