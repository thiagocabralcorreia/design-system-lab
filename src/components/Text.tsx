import { Slot } from "@radix-ui/react-Slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface TextProps {
  size?: "small" | "medium" | "large";
  children: ReactNode;
  asChild?: boolean;
}

export function Text({ size = "medium", children, asChild }: TextProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <Comp
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "small",
        "text-sm": size === "medium",
        "text-md": size === "large",
      })}
    >
      {children}
    </Comp>
  );
}
