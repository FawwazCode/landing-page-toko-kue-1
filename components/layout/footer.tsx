import Link from "next/link";
import { MapPin } from "lucide-react";

export function Footer() {
  const whatsappNumber = "6285939859097";
  const whatsappMessage = encodeURIComponent(
    "Halo Sunqiest! Saya ingin memesan cake."
  );

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
            <Link
              href="/"
              className="w-fit rounded-sm transition-colors duration-300 ease-out hover:text-[#4c3024] hover:underline hover:decoration-[#9a6b52] hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-2"
            >
              Home
            </Link>

            <Link
              href="/menu"
              className="w-fit rounded-sm transition-colors duration-300 ease-out hover:text-[#4c3024] hover:underline hover:decoration-[#9a6b52] hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-2"
            >
              Menu
            </Link>

            <Link
              href="/#location"
              className="w-fit rounded-sm transition-colors duration-300 ease-out hover:text-[#4c3024] hover:underline hover:decoration-[#9a6b52] hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-2"
            >
              Location
            </Link>

            <Link
              href="/menu#cake-selection"
              className="w-fit rounded-sm transition-colors duration-300 ease-out hover:text-[#4c3024] hover:underline hover:decoration-[#9a6b52] hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-2"
            >
              Explore Cake Selection
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[#30231e]">
            Find Us
          </h3>

          <div className="mt-4 space-y-3 text-sm text-[#75675f]">
            {/* Google Maps */}
            <a
              href="LINK_GOOGLE_MAPS_SUNQIEST"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 rounded-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#4c3024] hover:underline hover:decoration-[#9a6b52] hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/40 focus-visible:ring-offset-2"
            >
              <MapPin size={18} />
              <span>Jakarta, Indonesia</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/tokokue.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 rounded-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#4c3024] hover:underline hover:decoration-[#9a6b52] hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/40 focus-visible:ring-offset-2"
            >
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

              <span>@tokokue.id</span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order via WhatsApp"
              className="flex w-fit items-center gap-2 rounded-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#128C7E] hover:underline hover:decoration-[#25D366] hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/40 focus-visible:ring-offset-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.05 24l6.29-1.65a11.87 11.87 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.23-6.16-3.45-8.43ZM12.07 21.77h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.73.98.99-3.64-.23-.37a9.84 9.84 0 0 1-1.51-5.26c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 7c-.01 5.42-4.43 9.84-9.89 9.84Zm5.4-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z" />
              </svg>

              <span>Order via WhatsApp</span>
            </a>
            
            {/* Gojek */}
            <a
              href="LINK_GOJEK_SUNQIEST"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 rounded-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-[#087f23] hover:underline hover:decoration-[#087f23] hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087f23]/40 focus-visible:ring-offset-2"
            >
              <span
                className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#00AA13] text-[10px] font-bold text-white"
                aria-hidden="true"
              >
                G
              </span>

              <span>Order via Gojek</span>
            </a>

          </div>
        </div>
      </div>

      <div className="border-t border-[#eadfd6] py-5 text-center text-xs text-[#897b72]">
        © 2026 Toko Kue. All rights reserved.
      </div>
    </footer>
  );
}