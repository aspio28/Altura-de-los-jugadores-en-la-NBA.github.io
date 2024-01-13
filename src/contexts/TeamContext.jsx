import { createContext, useEffect, useState } from "react";
import { useData } from "../services";

const TeamContext = createContext({});

function TeamProvider({ children }) {
  const [teams, setTeams] = useState([]);
  const { getTeams } = useData();

  useEffect(() => {
    getTeams().then((data) => setTeams(data));
  }, []);

  return (
    <TeamContext.Provider value={{ teams: teams }}>
      {children}
    </TeamContext.Provider>
  );
}

export { TeamContext, TeamProvider };
