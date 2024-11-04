import { cn } from "@/utils/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: Readonly<InputProps>) {
  return (
    <input
      className={cn("border-gray-300 border-2 rounded p-2 mb-4", className)}
      {...props}
    />
  );
}