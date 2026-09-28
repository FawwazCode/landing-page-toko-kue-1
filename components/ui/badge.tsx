import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-[#f3e4d5] px-3 py-1 text-xs font-semibold text-[#6f4938]",
        className
      )}
    >
      {children}
    </span>
  );
}