import "./LineChart.css";
import { useContext } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Session from "../models/Session";
import AuthContext from "../context/AuthContext";

export interface Props {
  userSessions: Session[];
}

const LineChart = ({ userSessions }: Props) => {
  const { user } = useContext(AuthContext);
  const { faker } = require("@faker-js/faker");

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  );

  const labels = userSessions.filter((userSession, i) => {
    console.log(i);
    if (user?.displayName === userSession.displayName) {
      return i;
    }
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: userSessions.map((userSession) => {
          if (user?.displayName === userSession.displayName) {
            return userSession.correct / userSession.total;
          }
        }),

        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="LineChart">
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
