import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function GradientLink({ href, children, className = "" }: Props) {
  return (
    <a
      href={href}
      className={
        "inline-block rounded-lg bg-gradient-to-r from-teal-600 to-cyan-400 px-6 py-3 font-semibold transition-opacity hover:opacity-90 " +
        className
      }
    >
      {children}
    </a>
  );
}
