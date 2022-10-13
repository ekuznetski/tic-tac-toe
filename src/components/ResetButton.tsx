import React from "react";
import { EPlayers } from "../domain/enums";
import { useUpdateCurrentPlayer } from "../hooks/currentPlayer";
import { useScores } from "../hooks/useScores";

export function ResetButton() {
  const { resetScores } = useScores();
  const updateCurrentPlayer = useUpdateCurrentPlayer();
  const resetHandler = () => {
    resetScores();
    updateCurrentPlayer(EPlayers.p1);
  };

  return (
    <button
      className="border mx-auto mt-10 px-4 py-2 block bg-sky-100"
      onClick={resetHandler}
    >
      Reset
    </button>
  );
}
