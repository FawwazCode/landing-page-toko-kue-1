"use client";

export function WhatsAppButton() {
  const phoneNumber = "6285939859097";

  const message = encodeURIComponent(
    "Halo Toko Kue! Saya ingin memesan cake."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.06] hover:bg-[#20BD5A] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffdf9]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="29"
        height="29"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L.05 24l6.29-1.65a11.87 11.87 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.23-6.16-3.45-8.43ZM12.07 21.77h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.73.98.99-3.64-.23-.37a9.84 9.84 0 0 1-1.51-5.26c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 7c-.01 5.42-4.43 9.84-9.89 9.84Zm5.4-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}