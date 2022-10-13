import React from "react";
import { cells, rows } from "../domain/constants";
import { Cell } from "./Cell";
import { GameStatus } from "./GameStatus";
import { ResetButton } from "./ResetButton";

export function TicTacToe() {
  return (
    <div className="mt-10">
      <GameStatus />
      <div
        className="border m-auto my-10 grid grid-cols-3"
        style={{ width: 50 * rows + "px" }}
      >
        {Array(cells)
          .fill(null)
          .map((e, i) => (
            <Cell key={i} idx={i} />
          ))}
      </div>
      <ResetButton />
    </div>
  );
}
