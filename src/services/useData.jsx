export default function useData() {
  async function getPlayers() {
    return fetch("./nba_players.json").then((r) => r.json());
  }

  async function getTeams() {
    return fetch("./team.json")
      .then((r) => r.json())
      .then((data) => {
        const returnData = [];

        Object.entries(data).forEach(([key, value]) => {
          returnData.push({ team: value.name, resume: key, img: value.img });
        });

        return returnData;
      });
  }

  async function getCountries() {
    return fetch("./country.json").then((r) => r.json());
  }

  return { getPlayers, getTeams, getCountries };
}
