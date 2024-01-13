import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useEffect, useState } from "react";
import { useData } from "../../services";
import { useTeam } from "../../hooks";

export default function TeamMedia() {
  const [team, setTeam] = useState("NBA");
  const [image, setImage] = useState(null);
  const [teams, setTeams] = useState([]);
  const [mean, setMean] = useState(0);

  const { getTeams } = useData();
  const { getTeamHeightMean } = useTeam();

  useEffect(() => {
    getTeams().then((data) => setTeams(data));
  }, []);

  useEffect(() => {
    const found = teams.find((t) => t.team === team);

    if (found) {
      setImage(found.img);

      getTeamHeightMean(found.team).then((m) => setMean(m));
    }
  }, [team, teams]);

  function handleChange(e) {
    setTeam(e.target.value);
  }

  return (
    <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-5">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="mb-5">
          {image && <img src={image} alt={team} className="w-[300px]" />}
        </div>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Team</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={team}
            label="Team"
            onChange={handleChange}
          >
            {teams.map((t, index) => (
              <MenuItem key={index} value={t.team}>
                {t.team}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="flex items-center flex-col">
        <h1 className="mb-5">{Number.parseInt(mean)} cm</h1>

        <img src="/player_model.png" alt="player model" className="w-[300px]" />
      </div>
    </div>
  );
}
