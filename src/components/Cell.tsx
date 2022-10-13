import React from "react";
import { useUpdateCurrentPlayer } from "../hooks/currentPlayer";
import { useScores } from "../hooks/useScores";
import { Mark } from "./Mark";

export function Cell({ idx }: { idx: number }) {
  const { score, setScore, winCombination } = useScores(idx);
  const updateCurrentPlayer = useUpdateCurrentPlayer();
  return (
    <div
      onClick={() => {
        setScore().then((endGame) => !endGame && updateCurrentPlayer());
      }}
      className={`border w-[50px] h-[50px] flex justify-center items-center cursor-pointer hover:bg-amber-50 duration-200 transition ${
        winCombination && winCombination.includes(idx)
          ? "bg-green-200 hover:bg-green-200"
          : ""
      } `}
    >
      {score && <Mark className={score as string} />}
    </div>
  );
}
