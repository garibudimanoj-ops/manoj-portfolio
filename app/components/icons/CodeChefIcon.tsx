import * as React from "react";

export function CodeChefIcon({
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
      aria-label="CodeChef logo"
      {...props}
    >
      <path
        d="M12 2L2 9.5V14.5L12 22L22 14.5V9.5L12 2ZM12 4.5l6.5 5.5V13.5L12 19.5l-6.5-6.5V9.5L12 4.5z"
        fill="currentColor"
      />
      <path d="M12 8L8 12L12 16L16 12L12 8Z" fill="white" />
    </svg>
  );
}