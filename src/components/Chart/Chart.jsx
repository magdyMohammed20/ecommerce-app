import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#0f0",
      backgroundColor: "#07c81b40",
    },
  ],
};

export default function Chart() {
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold">أرباحى خلال الشهر</h1>
      <Line options={options} data={data} />
      <div className="w-full bg-gray-50 rounded-lg mt-3 p-4">
        الربح : {"  "}
        <span className="font-bold">500$</span>
      </div>
    </div>
  );
}
