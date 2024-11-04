import useGameContext from "../../providers/game-provider/game-provider.hook";

export default function Scoreboard() {
  const {
    state: { score },
  } = useGameContext();

  return (
    <div className="w-full flex justify-end p-6">
      <span className="text-xl">Points: {score ?? 0}</span>
    </div>
  );
}
