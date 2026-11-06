/**
 * Joins class names, skipping falsy values.
 *
 * @example cn("p-4", isActive && "bg-volt", undefined) // → "p-4 bg-volt"
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * True when a link points somewhere real. Placeholder links ("#" or empty)
 * in data/site.ts are hidden by the components until you fill them in.
 */
export function isRealLink(href: string | undefined | null): href is string {
  return Boolean(href && href !== "#");
}
