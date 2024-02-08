import { HeadingComponentProps } from "@/types/types";
import React from "react";

export default function Heading({ as, children, className }: HeadingComponentProps) {

  const HeadingComponent = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
  React.createElement(as, { className: className, ...props}, children)
  
  return (
    <HeadingComponent>{children}</HeadingComponent>
  )
}