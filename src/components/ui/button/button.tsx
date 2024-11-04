import { cn } from "@/utils/cn";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export default function Button({ className, ...props }: Readonly<ButtonProps>) {
  return (
    <button
      className={cn(
        "bg-blue-900 text-white font-bold py-2 px-4 rounded",
        className
      )}
      {...props}
    />
  );
}
