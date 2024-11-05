import { cn } from "@/utils/cn";

type MemoryCardProps = {
  testId?: string;
  value: string;
  onClick: () => void;
  showValue: boolean;
  isValidGuess?: boolean;
  disabled?: boolean;
};

export default function MemoryCard({
  testId,
  showValue,
  value,
  onClick,
  isValidGuess,
  disabled,
}: Readonly<MemoryCardProps>) {
  return (
    <div
      data-testid={testId}
      className={cn(
        "h-24 w-24 flex justify-center items-center bg-gray-300",
        isValidGuess === true && "bg-green-500",
        isValidGuess === false && "bg-red-500"
      )}
      onClick={disabled ? undefined : onClick}
    >
      <span className="text-6xl font-bold">{showValue ? value : "?"}</span>
    </div>
  );
}
