"use client";

interface SheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Sheet({
  open,
  onClose,
  children,
}: SheetProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-black/30"
      />

      <aside className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#fffdf9] p-6 shadow-2xl">
        {children}
      </aside>
    </div>
  );
}