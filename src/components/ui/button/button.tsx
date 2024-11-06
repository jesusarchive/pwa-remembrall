import { cn } from "@/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  testId?: string;
};

export default function Button({
  testId,
  className,
  disabled,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      data-testid={testId}
      className={cn(
        "bg-blue-900 text-white font-bold py-2 px-4 rounded",
        disabled && "bg-gray-400 cursor-not-allowed",
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
}
