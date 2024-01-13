import { useCallback, useContext } from "react";
import { PlayerContext, TeamContext } from "../contexts";

export default function useTeam() {
  const { players } = useContext(PlayerContext);
const {teams}  = useContext(TeamContext)

  const getTeamHeightMean = useCallback(
    async (team) => {


      if (team !== "NBA") {
        const found = teams.find((t) => t.team === team);

        if (found) {
          let sum = 0;
          let count = 0;

          for (const player of players) {
            if (player.team_abbreviation === found.resume) {
              sum += player.player_height;
              count++;
            }
          }

          return sum / count;
        } else {
          return 0;
        }
      } else {
        let sum = 0;
        let count = 0;

        for (const player of players) {
          sum += player.player_height;
          count++;
        }

        return sum / count;
      }
    },
    [players, teams]
  );

  return { getTeamHeightMean };
}
