import { useData } from "../services";

export default function usePlayers() {
  const { getPlayers } = useData();

  async function getDecadeData(decadates) {
    const returnData = [];
    const data = await getPlayers();

    for (const decade of decadates) {
      const players = [];

      for (const player of data) {
        const year = Number(player.season.slice(0, 4));

        if (year >= decade && year <= decade + 9) {
          players.push(player);
        }
      }

      returnData.push({ decade: decade, players: players });
    }

    for (const dat of returnData) {
      let sum = 0;
      for (const player of dat.players) {
        sum += player.player_height;
      }

      dat.mean = sum / dat.players.length;
    }

    return returnData;
  }

  return { getDecadeData };
}
