import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
};

export default function GradientText({ children, as = "span", className = "" }: Props) {
  const cls = `bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent ${className}`;
  switch (as) {
    case "h1": return <h1 className={cls}>{children}</h1>;
    case "h2": return <h2 className={cls}>{children}</h2>;
    case "h3": return <h3 className={cls}>{children}</h3>;
    default:   return <span className={cls}>{children}</span>;
  }
}
