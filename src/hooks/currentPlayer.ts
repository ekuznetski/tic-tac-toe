import { useQuery, useQueryClient } from "@tanstack/react-query";
import { keys } from "../domain/constants";
import { EPlayers } from "../domain/enums";

export function useGetCurrentPlayer() {
  const { data } = useQuery(["player"], () => EPlayers.p1);
  return data;
}

export function useUpdateCurrentPlayer() {
  const client = useQueryClient();
  return (player?: EPlayers) => {
    if (!player) {
      player = client.getQueryData(keys.player);
      client.setQueryData(
        keys.player,
        player === EPlayers.p1 ? EPlayers.p2 : EPlayers.p1
      );
    } else {
      client.setQueryData(keys.player, player);
    }
  };
}
