import { useQuery, useQueryClient } from "@tanstack/react-query";
import { cells, keys, winCombinations } from "../domain/constants";
import { EPlayers } from "../domain/enums";
import { IScores, IWinCombination } from "../domain/interfaces";

export function useScores(id?: number) {
  const client = useQueryClient();
  const emptyArray = Array(cells).fill(null);
  const { data } = useQuery(keys.scores, () => emptyArray, {
    select: (data: IScores) => (id !== undefined ? data[id] : undefined),
  });
  const { data: winCombination } = useQuery(keys.winCombination, () => null);
  let _winCombination: IWinCombination;
  function setScore() {
    return new Promise<boolean>((resolve) => {
      if (id !== undefined) {
        const player = client.getQueryData<EPlayers>(keys.player);
        if (player) {
          client.setQueryData(keys.scores, (scores) => {
            const newScores = [...(scores as IScores)];
            if (!newScores[id]) {
              newScores[id] = player;
            }

            _winCombination = winCombinations.find((comb) =>
              comb.every(
                (e) => newScores[e] && newScores[e] === newScores[comb[0]]
              )
            );
            if (_winCombination) {
              client.setQueryData(keys.winCombination, _winCombination);
            }
            return newScores;
          });
          resolve(!!_winCombination);
        }
      }
    });
  }
  function resetScores() {
    client.setQueryData(keys.scores, emptyArray);
    client.setQueryData(keys.winCombination, null);
  }

  return {
    score: data,
    setScore,
    resetScores,
    winCombination: winCombination as IWinCombination,
  };
}
