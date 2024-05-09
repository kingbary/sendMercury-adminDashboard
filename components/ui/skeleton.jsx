import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    (<div
      className={cn("animate-pulse rounded-md bg-neutral-400/50 border border-neutral-400/60", className)}
      {...props} />)
  );
}

export { Skeleton }
