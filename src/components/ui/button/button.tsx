import { cn } from "@/utils/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  testId?: string;
};

export default function Button({
  testId,
  className,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      data-testid={testId}
      className={cn(
        "bg-blue-900 text-white font-bold py-2 px-4 rounded",
        className
      )}
      {...props}
    />
  );
}
