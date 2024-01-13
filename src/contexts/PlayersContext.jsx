import { createContext, useEffect, useState } from "react";
import { useData } from "../services";

const PlayerContext = createContext({});

function PlayerProvider({ children }) {
  const [players, setPlayers] = useState([]);
  const [countries, setCountries] = useState([]);
  const { getPlayers, getCountries } = useData();

  useEffect(() => {
    getPlayers().then((data) => {
      setPlayers(data);
    });

    getCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  return (
    <PlayerContext.Provider value={{ players: players, countries: countries }}>
      {children}
    </PlayerContext.Provider>
  );
}

export { PlayerContext, PlayerProvider };
