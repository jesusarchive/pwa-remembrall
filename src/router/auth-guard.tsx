import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useUser from "@/providers/user-provider/user-provider.hook";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const {
    state: { user },
  } = useUser();

  useEffect(() => {
    if (!user?.name) {
      navigate("/");
    }
  }, [user, navigate]);

  return user ? children : null;
}
