import { useEffect, useMemo, useState } from "react";
import { usePlayers } from "../../hooks";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OPTIONS = { POINTS: "Points", ASSISTS: "Assists", REBOUND: "Rebounds" };

export default function DataByHeight() {
  const [data, setData] = useState([]);
  const [select, setSelect] = useState(OPTIONS.POINTS);

  const { getDataByHeight } = usePlayers();

  useEffect(() => {
    setData(getDataByHeight());
  }, [getDataByHeight]);

  const selectedKey = useMemo(() => {
    if (select === OPTIONS.ASSISTS) {
      return "meanAst";
    } else if (select === OPTIONS.POINTS) {
      return "meanPoints";
    } else {
      return "meanReb";
    }
  }, [select]);

  function handleChange(e) {
    setSelect(e.target.value);
  }

  const chartData = {
    labels: data.map((d) => `${d.media.init} - ${d.media.finish}`),
    datasets: [
      {
        label: "Información por alturas",
        data: data.map((d) => d[selectedKey]),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="flex flex-col w-full gap-5">
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Option</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select}
            label="Option"
            onChange={handleChange}
          >
            {Object.values(OPTIONS).map((o, index) => (
              <MenuItem key={index} value={o}>
                {o}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="flex">
        <Line
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
                display: false,
              },
              title: {
                display: false,
                text: "Chart.js Line Chart",
              },
            },
          }}
          data={chartData}
        />
      </div>
    </div>
  );
}
