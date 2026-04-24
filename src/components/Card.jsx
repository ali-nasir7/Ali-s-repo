import { cn } from "../lib/utils";

export default function Card({
  as = "div",
  variant = "glass",
  className = "",
  children,
  ...rest
}) {
  const Tag = as;
  const base = variant === "glass" ? "glass" : "glass-strong";
  return (
    <Tag
      className={cn(
        base,
        "relative p-8 md:p-10 transition-all duration-500 ease-luxe",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
