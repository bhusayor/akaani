import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "accent" | "dark" | "ghost" | "ghostDark";
type Size = "md" | "lg" | "sm";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold border-[1.5px] " +
  "transition-[transform,background-color,color,border-color] duration-300 ease-brand hover:-translate-y-[3px]";

const VARIANTS: Record<Variant, string> = {
  accent: "border-transparent bg-accent text-white hover:bg-ink",
  dark: "border-transparent bg-ink text-bg hover:bg-accent",
  ghost: "border-white/55 text-white hover:bg-white/15",
  ghostDark: "border-line text-ink hover:border-ink",
};

const SIZES: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[0.88rem]",
  md: "px-[26px] py-[15px] text-[0.98rem]",
  lg: "px-[34px] py-[17px] text-[1.05rem]",
};

type Props = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
};

/** Brand button. Renders a Next Link internally, an anchor for external URLs. */
export default function Button({
  children,
  href,
  variant = "accent",
  size = "md",
  external = false,
  className = "",
}: Props) {
  const cls = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`.trim();

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
