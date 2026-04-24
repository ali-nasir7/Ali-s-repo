import { cn } from "../lib/utils";

/**
 * Luxury Button.
 * variants: "primary" | "ghost" | "dark" | "glass"
 * sizes: "md" | "lg"
 */
export default function Button({
  as = "button",
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}) {
  const Tag = as;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight " +
    "transition-all duration-500 ease-luxe focus:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-eucalyptus/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ice " +
    "select-none whitespace-nowrap";

  const sizes = {
    md: "px-6 py-2.5 text-[13px]",
    lg: "px-8 py-3.5 text-sm",
  };

  const variants = {
    primary:
      "bg-charcoal text-ice hover:bg-charcoalSoft hover:-translate-y-[1px]",
    ghost:
      "border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal/5",
    dark: "bg-eucalyptus text-white hover:bg-eucalyptusDark",
    glass:
      "glass text-charcoal hover:bg-white/40 hover:-translate-y-[1px]",
  };

  return (
    <Tag
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
