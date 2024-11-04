import Select from "@/components/ui/select";
import useUser from "@/providers/user-provider/user-provider.hook";

import { Level } from "../../providers/game-provider/game-provider.state";

export default function GameHeader() {
  const { state } = useUser();

  const levelOptions = Object.values(Level).map((level) => ({
    label: level,
    value: level,
  }));

  return (
    <div className="w-full h-20 bg-blue-700 flex items-center justify-between px-6">
      <div className="w-40 flex items-center gap-2">
        <span>👤</span>
        <span className="text-white">{state?.user?.name}</span>
      </div>
      <div className="w-40 flex items-center gap-6">
        <span className="text-white">Level</span>
        <Select options={levelOptions} />
      </div>
    </div>
  );
}
