import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

export default function HomePage() {
  return (
    <div className="h-dvh w-dvw flex justify-center">
      <div className="flex flex-col gap-4 pt-20">
        <span className="self-center">🖱️</span>
        <Input className="w-96" placeholder="Name" />
        <Button>Start</Button>
      </div>
    </div>
  );
}
