import { useState } from "react";

export default function useSeen() {
  const [seen, setSeen] = useState<any[]>([]);
  const [turnSeen, setTurnSeen] = useState<boolean>(true);

  const setSeenHandler = (product: any) =>
    setSeen((previousState) => {
      if (previousState.includes(product.id)) {
        return previousState.filter((id) => id !== product.id);
      }
      return [...previousState, product.id];
    });

  const setTurnSeenHandler = () => setTurnSeen((prevState) => !prevState);

  return { seen, setSeenHandler, turnSeen, setTurnSeenHandler };
}
