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
  level: string;
  displayNameSessions: Session[];
  easySessions: Session[];
  mediumSessions: Session[];
  hardSessions: Session[];
  insanusSessions: Session[];
}

const LineChart = ({
  userSessions,
  level,
  displayNameSessions,
  easySessions,
  mediumSessions,
  hardSessions,
  insanusSessions,
}: Props) => {
  const { user } = useContext(AuthContext);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  );

  const labels = [
    "Session 1",
    "Session 2",
    "Session 3",
    "Session 4",
    "Session 5",
    "Session 6",
  ];

  const options = {
    scales: { x: { ticks: { display: false } } },
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
  const optionsEasy = {
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
        label: "Last 6 Sessions",
        data: displayNameSessions
          .map((userSession) => {
            if (user?.displayName === userSession.displayName) {
              return userSession.correct / userSession.total;
            }
          })
          .slice(0, 6)
          .reverse(),
        borderColor: "#59d6de",
        backgroundColor: "#59d6de",
      },
    ],
  };

  const easyData = {
    labels,
    datasets: [
      {
        label: "Last 6 Sessions",
        data: easySessions
          .map((userSession) => {
            if (
              user?.displayName === userSession.displayName &&
              userSession.difficulty === "Easy"
            ) {
              return userSession.correct / userSession.total;
            }
          })
          .slice(0, 6)
          .reverse(),
        borderColor: "#59d6de",
        backgroundColor: "#59d6de",
      },
    ],
  };

  const mediumData = {
    labels,
    datasets: [
      {
        label: "Last 6 Sessions",
        data: mediumSessions
          .map((userSession) => {
            if (
              user?.displayName === userSession.displayName &&
              userSession.difficulty === "Medium"
            ) {
              return userSession.correct / userSession.total;
            }
          })
          .slice(0, 6)
          .reverse(),
        borderColor: "#59d6de",
        backgroundColor: "#59d6de",
      },
    ],
  };

  const hardData = {
    labels,
    datasets: [
      {
        label: "Last 6 Sessions",
        data: hardSessions
          .map((userSession) => {
            if (
              user?.displayName === userSession.displayName &&
              userSession.difficulty === "Hard"
            ) {
              return userSession.correct / userSession.total;
            }
          })
          .slice(0, 6)
          .reverse(),
        borderColor: "#59d6de",
        backgroundColor: "#59d6de",
      },
    ],
  };

  const insanusData = {
    labels,
    datasets: [
      {
        label: "Last 6 Sessions",
        data: insanusSessions
          .map((userSession) => {
            if (
              user?.displayName === userSession.displayName &&
              userSession.difficulty === "Insanus"
            ) {
              return userSession.correct / userSession.total;
            }
          })
          .slice(0, 6)
          .reverse(),
        borderColor: "#59d6de",
        backgroundColor: "#59d6de",
      },
    ],
  };

  return (
    <div className="LineChart">
      {level === "" ? (
        <Line options={options} data={data} />
      ) : level === "Easy" ? (
        <Line options={options} data={easyData} />
      ) : level === "Medium" ? (
        <Line options={options} data={mediumData} />
      ) : level === "Hard" ? (
        <Line options={options} data={hardData} />
      ) : level === "Insanus" ? (
        <Line options={options} data={insanusData} />
      ) : (
        <Line options={options} data={data} />
      )}
    </div>
  );
};

export default LineChart;
