import { cn } from "@/utils";
import * as React from "react";
interface Props extends React.ComponentPropsWithoutRef<"svg"> {}

export const Checkmark = (props: Props) => (
  <svg className={cn(props?.className)} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
  </svg>
);

export function Satellite(props: Props) {
  return (
    <svg className={cn(props?.className)} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        className="c4u31"
        d="M19 18.414l-4 4L9.586 17l.707-.707L12 14.586V8.414l-5-5L4.414 6l6.293 6.293-1.414 1.414L1.586 6 7 .586l7 7v5l8.463-8.463a3.828 3.828 0 115.414 5.414L21 16.414v6.172l5 5L28.586 25l-6.293-6.293 1.414-1.414L31.414 25 26 30.414l-7-7v-5zm-4 1.172L26.463 8.123a1.828 1.828 0 10-2.586-2.586L12.414 17 15 19.586zM11 30v2C4.925 32 0 27.075 0 21h2a9 9 0 009 9zm0-5v2a6 6 0 01-6-6h2a4 4 0 004 4z"
      />
    </svg>
  );
}

export function Blocks(props: Props) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6 0H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1zM5 5H2V2h3v3zm10 4h-5a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5h-3v-3h3v3zM6 9H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5H2v-3h3v3zm7.5-7a1 1 0 01-.707-.293l-2.5-2.5a1 1 0 010-1.414l2.5-2.5a1 1 0 011.414 0l2.5 2.5a1 1 0 010 1.414l-2.5 2.5A1 1 0 0112.5 7z"
        // fill="#A2A2A8"
        className={cn(props.className)}
      />
    </svg>
  );
}

export function Mirror(props: Props) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props} className={cn(props?.className)}>
      <path d="M11 16v-5h5V0H5v5H0v11h11zM2 7h7v7H2V7z" />
    </svg>
  );
}
