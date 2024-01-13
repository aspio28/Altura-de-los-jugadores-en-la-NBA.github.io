import { useCallback, useContext } from "react";
import { PlayerContext } from "../contexts";

export default function usePlayers() {
  const { players } = useContext(PlayerContext);

  function _mean({ data, key }) {
    if (data.players.length === 0) {
      return 0;
    }

    let sum = 0;
    for (const player of data.players) {
      sum += player[key];
    }

    return sum / data.players.length;
  }

  const getDataByHeight = useCallback(() => {
    const medias = [160, 170, 180, 190, 200, 210, 220];
    const returnData = [];

    for (const media of medias) {
      const saveData = {
        media: { init: media, finish: media + 10 },
        players: [],
      };

      for (const player of players) {
        if (
          player.player_height >= saveData.media.init &&
          player.player_height <= saveData.media.finish
        ) {
          saveData.players.push(player);
        }
      }

      returnData.push(saveData);
    }

    for (const data of returnData) {
      data.meanPoints = _mean({ data: data, key: "pts" });
      data.meanReb = _mean({ data: data, key: "reb" });
      data.meanAst = _mean({ data: data, key: "ast" });
    }

    return returnData;
  }, [players]);

  const getDecadeData = useCallback(
    (decadates, config) => {
      const returnData = [];

      for (const decade of decadates) {
        const decade_players = [];

        for (const player of players) {
          const year = Number(player.season.slice(0, 4));

          const teamCheck =
            config.team !== "Todos"
              ? config.team === player.team_abbreviation
              : true;

          const countryCheck =
            config.country !== "Todos"
              ? config.country === player.country
              : true;

          if (
            year >= decade &&
            year <= decade + 9 &&
            teamCheck &&
            countryCheck
          ) {
            decade_players.push(player);
          }
        }

        returnData.push({ decade: decade, players: decade_players });
      }

      for (const dat of returnData) {
        dat.mean = _mean({ data: dat, key: "player_height" });
      }

      return returnData;
    },
    [players]
  );

  return { getDecadeData, getDataByHeight };
}
