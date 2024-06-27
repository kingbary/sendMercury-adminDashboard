import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    (<div
      className={cn("animate-pulse rounded-md bg-neutral-200/70 border border-neutral-300/60", className)}
      {...props} />)
  );
}

export { Skeleton }
