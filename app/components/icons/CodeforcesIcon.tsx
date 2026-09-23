import * as React from "react";

export function CodeforcesIcon({
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
      aria-label="Codeforces logo"
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 9.5C13.325 9.5 14.5 10.675 14.5 12C14.5 13.325 13.325 14.5 12 14.5C10.675 14.5 9.5 13.325 9.5 12C9.5 10.675 10.675 9.5 12 9.5Z"
        fill="white"
      />
      <path
        d="M12 16C11.4479 16 11 15.5521 11 15V9C11 8.44786 11.4479 8 12 8C12.5521 8 13 8.44786 13 9V15C13 15.5521 12.5521 16 12 16Z"
        fill="#2EC866"
      />
    </svg>
  );
}