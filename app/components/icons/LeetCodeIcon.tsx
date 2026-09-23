import * as React from "react";

export function LeetCodeIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="LeetCode logo"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" fill="currentColor" />
      <path
        d="M8 14.5h2.5v-5H8v5zm5.5 0h2.5v-5h-2.5v5zm-2.75-8.5h2.5v2.5h-2.5V6z"
        fill="white"
      />
    </svg>
  );
}