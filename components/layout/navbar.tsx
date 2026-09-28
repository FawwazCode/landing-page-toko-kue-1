import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Link
          href="/"
          className="font-serif text-2xl font-bold tracking-tight text-[#3c2921]"
        >
          Toko Kue
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>

          <Link href="/menu" className="text-sm font-medium">
            Menu
          </Link>

          <a href="/#about" className="text-sm font-medium">
            About
          </a>

          <Link
            href="/menu#cake-selection"
            className="flex items-center gap-2 rounded-full bg-[#6f4938] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#58382c]"
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