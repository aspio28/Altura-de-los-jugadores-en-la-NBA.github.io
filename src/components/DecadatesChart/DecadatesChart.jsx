import { useState, useEffect, useMemo, useContext } from "react";
import { usePlayers } from "../../hooks";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PlayerContext, TeamContext } from "../../contexts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ALL_OPTION = "Todos";

export default function DecadatesChart() {
  const { getDecadeData } = usePlayers();

  const [config, setConfig] = useState({
    team: ALL_OPTION,
    country: ALL_OPTION,
  });
  const [decadatesData, setDecadatesData] = useState([]);
  const decadates = useMemo(() => [1990, 2000, 2010, 2020], []);
  const { teams } = useContext(TeamContext);
  const { countries } = useContext(PlayerContext);

  useEffect(() => {
    const data = getDecadeData(decadates, config);
    setDecadatesData(data);
  }, [getDecadeData, decadates, config]);

  function handleChangeCountry(e) {
    setConfig((prev) => ({
      ...prev,
      country: e.target.value !== ALL_OPTION ? e.target.value : ALL_OPTION,
    }));
  }

  function handleChangeTeam(e) {
    const found = teams.find((t) => t.team === e.target.value);

    setConfig((prev) => ({ ...prev, team: found ? found.resume : ALL_OPTION }));
  }

  const data = {
    labels: decadates,
    datasets: [
      {
        label: "Altura promedio",
        data: decadatesData.map((d) => d.mean),
        backgroundColor: "red",
        barThickness: 50,
      },
    ],
  };

  return (
    <div className="w-full flex flex-col">
      <div className="grid grid-cols-2 w-full gap-5">
        <div>
          <FormControl fullWidth>
            <InputLabel>Equipo</InputLabel>
            <Select
              value={
                teams.find((t) => t.resume === config.team)?.team ?? ALL_OPTION
              }
              label="Team"
              placeholder="Selecciona un equipo"
              onChange={handleChangeTeam}
            >
              {[
                ALL_OPTION,
                ...teams.filter((t) => t.team !== "NBA").map((t) => t.team),
              ].map((t, index) => (
                <MenuItem key={index} value={t}>
                  {t}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl fullWidth>
            <InputLabel>País</InputLabel>
            <Select
              value={config.country}
              label="País"
              placeholder="Selecciona un país"
              onChange={handleChangeCountry}
            >
              {[ALL_OPTION, ...countries.map((c) => c.country)].map(
                (c, index) => (
                  <MenuItem key={index} value={c}>
                    {c}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </div>
      </div>

      <div>
        <Bar
          options={{
            animation: true,
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: false,
                text: "Altura promedio",
              },
            },
            scales: {
              y: { min: 197, max: 220 },
            },
          }}
          data={data}
        />
      </div>
    </div>
  );
}
