import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Link
          href="/"
          className="rounded-sm font-serif text-2xl font-bold tracking-tight text-[#3c2921] transition-colors duration-200 hover:text-[#6f4938] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-4"
        >
          Toko Kue
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="relative rounded-sm text-sm font-medium transition-colors duration-300 ease-out hover:text-[#4c3024] hover:underline hover:decoration-[#9a6b52] hover:underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-4">
            Home
          </Link>

          <Link href="/menu" className="relative rounded-sm text-sm font-medium transition-colors duration-300 ease-out hover:text-[#4c3024] hover:underline hover:decoration-[#9a6b52] hover:underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-4">
            Menu
          </Link>

          <Link href="/#location" className="relative rounded-sm text-sm font-medium transition-colors duration-300 ease-out hover:text-[#4c3024] hover:underline hover:decoration-[#9a6b52] hover:underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-4">
            Location
          </Link>

          <a href="/#about" className="relative rounded-sm text-sm font-medium transition-colors duration-300 ease-out hover:text-[#4c3024] hover:underline hover:decoration-[#9a6b52] hover:underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-4">
            About
          </a>

          <Link
            href="/menu#cake-selection"
            className="flex items-center gap-2 rounded-full bg-[#6f4938] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#4c3024] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-2"
          >
            Order Cake
            <ArrowRight size={15} />
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}