import useGameContext from "../../providers/game-provider/game-provider.hook";

export default function Scoreboard() {
  const {
    state: { score },
  } = useGameContext();

  return (
    <div className="w-full flex justify-end py-4 md:py-6 px-6">
      <span data-testid="game-page-scoreboard" className="md:text-xl text-base">
        Points: {score ?? 0}
      </span>
    </div>
  );
}
