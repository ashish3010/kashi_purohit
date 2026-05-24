import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-lg px-4 md:max-w-6xl md:px-6 lg:max-w-7xl lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
