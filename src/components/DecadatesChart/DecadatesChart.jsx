import { useState, useEffect, useMemo } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DecadatesChart() {
  const { getDecadeData } = usePlayers();

  const [decadatesData, setDecadatesData] = useState([]);
  const decadates = useMemo(() => [1990, 2000, 2010, 2020], []);

  useEffect(() => {
    getDecadeData(decadates).then((data) => {
      setDecadatesData(data);
    });
  }, []);

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
    <div className="w-full flex">
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
            y: { min: 197, max: 210 },
          },
        }}
        data={data}
      />
    </div>
  );
}
