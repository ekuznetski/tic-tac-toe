import React from "react";
import { useGetCurrentPlayer } from "../hooks/currentPlayer";
import { useScores } from "../hooks/useScores";
import { Mark } from "./Mark";

export function GameStatus() {
  const currentPlayer = useGetCurrentPlayer();
  const { winCombination } = useScores();

  return currentPlayer !== undefined && winCombination !== undefined ? (
    <div className="flex justify-center items-center gap-4">
      Player <Mark className={currentPlayer + " inline-block"} />
      {!!winCombination ? "Won" : "Moving"}
    </div>
  ) : null;
}
