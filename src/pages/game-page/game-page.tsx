import useUser from "@/providers/user-provider/user-provider.hook";

function GamePageInternal() {
  const { state } = useUser();

  return <div>{state?.user?.name}</div>;
}

export default function GamePage() {
  return <GamePageInternal />;
}
