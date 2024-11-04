import { ChangeEvent } from "react";

import Select from "@/components/ui/select";
import useUser from "@/providers/user-provider/user-provider.hook";

import useGameContext from "../../providers/game-provider/game-provider.hook";
import {
  Level,
  setLevel,
} from "../../providers/game-provider/game-provider.state";

export default function GameHeader() {
  const {
    state: { user },
  } = useUser();
  const { dispatch } = useGameContext();

  const levelOptions = Object.values(Level).map((level) => ({
    label: level,
    value: level,
  }));

  const onLevelChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLevel(dispatch)({ level: event?.target.value as Level });
  };

  return (
    <div className="w-full h-20 bg-blue-700 flex items-center justify-between px-6">
      <div className="w-40 flex items-center gap-2">
        <span>👤</span>
        <span className="text-white">{user?.name}</span>
      </div>
      <div className="w-40 flex items-center gap-6">
        <span className="text-white">Level</span>
        <Select options={levelOptions} onChange={onLevelChange} />
      </div>
    </div>
  );
}
