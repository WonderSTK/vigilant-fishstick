import React from 'react';
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export function SalesByRegion({ data }) {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Sales by Region",
        data: Object.values(data),
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        borderColor: "rgb(99, 102, 241)",
        borderWidth: 1.5,
        pointBackgroundColor: "rgb(99, 102, 241)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(99, 102, 241)",
        pointRadius: 4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        grid: {
          color: "rgba(99, 102, 241, 0.1)",
          lineWidth: 1,
        },
        angleLines: {
          color: "rgba(99, 102, 241, 0.1)",
        },
        ticks: {
          display: false,
          maxTicksLimit: 1,
        },
        pointLabels: {
          font: {
            size: 12,
            family: "Inter, sans-serif",
          },
          padding: 20,
          callback: function(label) {
            const value = data[label];
            return value !== undefined ? [`${value.toLocaleString()}`, label] : label;
          }
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgb(0, 0, 0)",
        padding: 12,
        bodyFont: {
          size: 12,
        },
        titleFont: {
          size: 12,
        },
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.formattedValue}`;
          }
        }
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 w-full h-full">
      <div className="p-4 h-full">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Sales by Region</h2>
        <div className="h-[235px] w-full">
          <Radar key={JSON.stringify(data)} data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
}

export default SalesByRegion;

