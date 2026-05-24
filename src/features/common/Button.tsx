import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-kashi-red text-white hover:bg-kashi-red/90 active:scale-[0.99] shadow-md",
  outline:
    "border-2 border-kashi-red text-kashi-red bg-white hover:bg-kashi-cream",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold tracking-wide transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
