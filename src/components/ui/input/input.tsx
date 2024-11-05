import { cn } from "@/utils/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  testId?: string;
};

export default function Input({
  testId,
  className,
  onChange,
  ...props
}: Readonly<InputProps>) {
  return (
    <input
      data-testid={testId}
      className={cn("border-gray-300 border-2 rounded p-2 mb-4", className)}
      onChange={props.disabled ? undefined : onChange}
      {...props}
    />
  );
}
