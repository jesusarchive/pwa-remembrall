type MemoryCardProps = {
  value: string;
  onClick: (id: string) => void;
  showValue: boolean;
};

export default function MemoryCard({
  showValue,
  value,
  onClick,
}: Readonly<MemoryCardProps>) {
  return (
    <div className="h-24 w-24 flex justify-center items-center bg-gray-300">
      <span className="text-xl font-bold">{showValue ? value : "?"}</span>
    </div>
  );
}
