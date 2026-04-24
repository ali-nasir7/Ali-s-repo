import { cn } from "../lib/utils";

/**
 * Layout container with luxury editorial spacing.
 * props: as, size ("default"|"narrow"|"wide"), padded (bool)
 */
export default function Layout({
  as = "section",
  size = "default",
  padded = true,
  className = "",
  children,
  ...rest
}) {
  const Tag = as;
  const sizes = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
  };
  return (
    <Tag
      className={cn(
        "mx-auto px-6 md:px-10 lg:px-16",
        sizes[size],
        padded && "py-24 md:py-32 lg:py-40",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
