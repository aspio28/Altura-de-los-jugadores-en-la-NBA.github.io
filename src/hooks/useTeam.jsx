import { useData } from "../services";

export default function useTeam() {
  const { getTeams, getPlayers } = useData();

  async function getTeamHeightMean(team) {
    const allPlayers = await getPlayers();
    const allTeams = await getTeams();

    if (team !== "NBA") {
      const found = allTeams.find((t) => t.team === team);

      if (found) {
        let sum = 0;
        let count = 0;
        for (const player of allPlayers) {
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
      for (const player of allPlayers) {
        sum += player.player_height;
        count++;
      }

      return sum / count;
    }
  }

  return { getTeamHeightMean };
}
