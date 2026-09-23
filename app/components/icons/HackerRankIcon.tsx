import * as React from "react";

export function HackerRankIcon({
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
      aria-label="HackerRank logo"
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M9 8c0-1.104.896-2 2-2s2 .896 2 2v1h1c1.104 0 2 .896 2 2s-.896 2-2 2h-1v1c0 1.104-.896 2-2 2s-2-.896-2-2v-1h-1c-1.104 0-2-.896-2-2s.896-2 2-2h1v-1zm3 0c0-1.104.896-2 2-2s2 .896 2 2v1h1c1.104 0 2 .896 2 2s-.896 2-2 2h-1v1c0 1.104-.896 2-2 2s-2-.896-2-2v-1h-1c-1.104 0-2-.896-2-2s.896-2 2-2h1v-1z"
        fill="white"
      />
    </svg>
  );
}