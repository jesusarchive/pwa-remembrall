import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import useUser from "@/providers/user-provider/user-provider.hook";
import { setUser } from "@/providers/user-provider/user-provider.state";

export default function HomePage() {
  const { dispatch } = useUser();
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const onJoinClick = useCallback(() => {
    setUser(dispatch)({ user: { id: name.toLowerCase(), name } });
    navigate("/game");
  }, [dispatch, name, navigate]);

  return (
    <div
      data-testid="home-page"
      className="h-dvh w-dvw flex justify-center pt-20"
    >
      <div className="flex flex-col gap-4">
        <span className="self-center">🤖</span>
        <Input
          testId="username-input"
          className="w-96"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button testId="join-button" onClick={onJoinClick}>
          Join
        </Button>
      </div>
    </div>
  );
}
