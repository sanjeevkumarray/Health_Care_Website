import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useState, useEffect } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

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

const dataa = {
  labels: ["Jan", "Feb", "Mar", "April", "May"],
  datasets: [
    {
      label: "Sales 2020 (M)",
      data: [3, 2, 2, 6, 4],
      borderColor: [
        "rgba(255, 206, 86, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      backgroundColor: [
        "rgba(255, 206, 86, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
    },
    {
      label: "Sales 2019 (M)",
      data: [4, 3, 2, 2, 3],
      borderColor: [
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
      ],
      backgroundColor: [
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(54, 162, 235, 0.2)",
      ],
    },
  ],
};

export function LineChart() {
  const [eyeData, setEyeData] = useState([0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    let eyedata = JSON.parse(localStorage.getItem("eyedata"));
    setEyeData(eyedata);
  }, []);

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
    labels: labels,
    datasets: [
      {
        label: "Eye Care Exercises Analysis",
        fill: true,
        data: eyeData,
        borderColor: "rgba(0, 153, 246, 0.5)",
        backgroundColor: "rgba(0, 153, 246, 0.2)",
        responsive: true,
      },
    ],
  };

  return (
    // <Line
    //   data={data}
    //   options={{
    //     responsive: true,
    //     maintainAspectRatio: false,
    //   }}
    // />
    <Bar data={dataa} options={options} />
  );
}
