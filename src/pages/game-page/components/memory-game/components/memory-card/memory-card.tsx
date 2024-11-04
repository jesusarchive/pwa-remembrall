import { cn } from "@/utils/cn";

type MemoryCardProps = {
  value: string;
  onClick: () => void;
  showValue: boolean;
  isValidGuess?: boolean | undefined;
};

export default function MemoryCard({
  showValue,
  value,
  onClick,
  isValidGuess,
}: Readonly<MemoryCardProps>) {
  return (
    <div
      className={cn(
        "h-24 w-24 flex justify-center items-center bg-gray-300",
        isValidGuess === true && "bg-green-500",
        isValidGuess === false && "bg-red-500"
      )}
      onClick={onClick}
    >
      <span className="text-xl font-bold">{showValue ? value : "?"}</span>
    </div>
  );
}
