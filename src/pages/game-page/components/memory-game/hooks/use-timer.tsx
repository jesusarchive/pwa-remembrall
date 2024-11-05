import { useCallback, useEffect, useState } from "react";

export function useTimer(initialTime: number) {
  const [time, setTime] = useState(initialTime);
  const [running, setRunning] = useState(false);

  const start = useCallback(() => {
    setRunning(true);
  }, []);

  const stop = useCallback(() => {
    setRunning(false);
  }, []);

  const reset = useCallback(() => {
    setTime(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (running) {
      const timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1000) {
            clearInterval(timer);
            setRunning(false);
            return 0;
          }
          return prevTime - 1000;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [running]);

  return { start, stop, reset, time, isRunning: running };
}
