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
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a6b52]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffdf9]",
    "disabled:pointer-events-none disabled:opacity-50",
    variant === "primary" &&
      "bg-[#6f4938] text-white hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#4c3024] hover:shadow-lg",
    variant === "secondary" &&
      "border border-transparent bg-[#f3e4d5] text-[#4c3024] hover:-translate-y-0.5 hover:border-[#b99a84] hover:bg-[#ead6c4] hover:text-[#30231e] hover:shadow-md",
    variant === "outline" &&
      "border border-[#d9c8ba] bg-transparent text-[#4c3024] hover:-translate-y-0.5 hover:border-[#b99a84] hover:bg-[#f1e7df] hover:text-[#6f4937] hover:shadow-sm",
    variant === "ghost" &&
      "text-[#4c3024] hover:bg-[#eaded4] hover:text-[#4c3024]",
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