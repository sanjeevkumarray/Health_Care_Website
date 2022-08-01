import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const optionss = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Ear Care Analysis",
    },
  },
};

const labels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const data = {
  labels: ["Jan", "Feb", "Mar", "April", "May"],
  datasets: [
    {
      label: "Sales 2020 (M)",
      data: [3, 2, 2, 1, 5],
      borderColor: ["rgba(255, 206, 86, 0.2)"],
      backgroundColor: ["rgba(255, 206, 86, 0.2)"],
      pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
      pointBorderColor: "rgba(255, 206, 86, 0.2)",
    },
    {
      label: "Sales 2019 (M)",
      data: [1, 3, 2, 2, 3],
      borderColor: ["rgba(54, 162, 235, 0.2)"],
      backgroundColor: ["rgba(54, 162, 235, 0.2)"],
      pointBackgroundColor: "rgba(54, 162, 235, 0.2)",
      pointBorderColor: "rgba(54, 162, 235, 0.2)",
    },
  ],
};

const options = {
  title: {
    display: true,
    text: "Line Chart",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 6,
          stepSize: 1,
        },
      },
    ],
  },
};

export function BarChart() {
  const [earData, setEarData] = useState([0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    let earData = JSON.parse(localStorage.getItem("eardata"));
    setEarData(earData);
  }, []);

  const dataa = {
    labels,
    datasets: [
      {
        label: "Earphone Usage Time",
        data: earData,
        backgroundColor: "rgba(0, 153, 246, 0.5)",
      },
    ],
  };

  return <Line data={data} options={options} />;
}
