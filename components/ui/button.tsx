import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className,
  disabled,
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-[#8b5e45]/30",
    "disabled:pointer-events-none disabled:opacity-50",
    variant === "primary" &&
      "bg-[#6f4938] text-white hover:bg-[#58382c]",
    variant === "secondary" &&
      "bg-[#f3e4d5] text-[#4c3024] hover:bg-[#ead6c4]",
    variant === "outline" &&
      "border border-[#d9c8ba] bg-transparent text-[#4c3024] hover:bg-[#f7f1eb]",
    variant === "ghost" &&
      "text-[#4c3024] hover:bg-[#f7f1eb]",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
}