import React from "react";

import { cn } from "@/utils/cn";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  testId?: string;
  options?: {
    value: string;
    label: string;
  }[];
};

export default function Select({
  testId,
  className,
  options,
  onChange,
  ...props
}: Readonly<SelectProps>) {
  return (
    <select
      data-testid={testId}
      className={cn("border border-gray-300 rounded-md p-2", className)}
      onChange={props.disabled ? undefined : onChange}
      {...props}
    >
      {options?.map((option) => (
        <option
          data-testId={`${testId}-option-${option.value}`}
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}
