import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

import GameProvider from "@/pages/game-page/providers/game-provider/game-provider";
import UserProvider from "@/providers/user-provider/user-provider";

type Props = {
  children?: ReactNode;
};

export function AppWrapper({ children }: Readonly<Props>) {
  return (
    <MemoryRouter>
      <UserProvider>
        <GameProvider>{children}</GameProvider>
      </UserProvider>
    </MemoryRouter>
  );
}
