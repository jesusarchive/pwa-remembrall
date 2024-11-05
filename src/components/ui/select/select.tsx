import React from "react";

import { cn } from "@/utils/cn";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: {
    value: string;
    label: string;
  }[];
};

export default function Select({
  className,
  options,
  ...props
}: Readonly<SelectProps>) {
  return (
    <select
      className={cn("border border-gray-300 rounded-md p-2", className)}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
