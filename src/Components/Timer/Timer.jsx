import React, { useState } from "react";
import { useEffect } from "react";
import { Card } from "../UI/Card";
export const Timer = () => {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer =
      counter < 60 && setInterval(() => setCounter(counter + 1), 1000);

    return () => clearInterval(timer);
  }, [counter]);
  return (
    <Card>
      <div>Timer: {counter}</div>
    </Card>
  );
};
