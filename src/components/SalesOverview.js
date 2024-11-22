import React from 'react';
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

function SalesOverview({ data }) {
  const totalRevenue = data.totalRevenue.reduce((sum, value) => sum + value, 0);
  const totalTarget = data.totalTarget.reduce((sum, value) => sum + value, 0);

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: "Total Revenue",
        data: data.totalRevenue,
        borderColor: "rgb(59, 130, 246)", // Bright blue
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: "Total Target",
        data: data.totalTarget,
        borderColor: "rgb(249, 115, 22)", // Orange
        backgroundColor: "rgba(249, 115, 22, 0.1)",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgb(0, 0, 0)",
        padding: 12,
        bodySpacing: 4,
        bodyFont: {
          size: 12,
        },
        titleFont: {
          size: 12,
        },
        cornerRadius: 4,
        displayColors: false,
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || ""
            if (label) {
              label += ": "
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(context.parsed.y)
            }
            return label
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: "rgb(156, 163, 175)", // Gray-500
        },
        border: {
          display: false,
        },
      },
      y: {
        position: "right",
        min: 0,
        max: 20000,
        ticks: {
          count: 3,
          callback: function (value) {
            return `$${value / 1000}k`
          },
          font: {
            size: 12,
          },
          color: "rgb(156, 163, 175)", // Gray-500
          padding: 12,
        },
        grid: {
          color: "rgba(243, 244, 246, 1)", // Gray-100
          drawTicks: false,
        },
        border: {
          display: false,
        },
      },
    },
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 10,
        left: 10,
      },
    },
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 w-full lg:w-[915.5px] h-auto lg:h-[299px]">
      <div className="p-4 lg:p-6 h-full">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 lg:mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-2 lg:mb-0">Sales Overview</h2>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm text-gray-600">Total Revenue</span>
              <span className="text-sm font-semibold text-gray-900">${totalRevenue.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-sm text-gray-600">Total Target</span>
              <span className="text-sm font-semibold text-gray-900">${totalTarget.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div className="h-[200px] lg:h-[215px] w-full relative">
          <div
            className="absolute inset-0 w-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, rgba(59, 130, 246, 0.03) 0px, rgba(59, 130, 246, 0.03) 50%, transparent 50%, transparent 100%)",
              backgroundSize: "120px 100%",
            }}
          />
          <Line data={chartData} options={options} className="relative z-10" />
        </div>
      </div>
    </div>
  )
}

export default SalesOverview;