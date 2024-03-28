import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Registering required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Data for the doughnut chart
const chartData = {
  labels: ['Product 1', 'Product 2', 'Product 3'],
  datasets: [
    {
      label: '',
      data: [20, 50, 30],
      backgroundColor: ['#60a5fa', '#ff6384', '#eef2ff'], // Individual colors for each segment
      borderWidth: 1
    }
  ]
};

// Options for the doughnut chart
const chartOptions = {
  responsive: true,
  cutout: '65%', // Adjusting the cutout size
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
      text: ''
    },
    label: {},
    datasets: {
      display: false
    },
    doughnutlabel: {
      labels: [
        {
          text: 65,
          font: {
            size: '40'
          },
          color: 'red'
        },
        {
          text: 'Due ≤ 60 Days',
          font: {
            size: '25'
          },
          color: 'red'
        }
      ]
    }
  },
  scales: {
    x: {
      border: {
        display: false
      },
      grid: {
        display: false
      },
      ticks: {
        maxRotation: 0,
        minRotation: 0,
        autoSkip: false
      }
    },
    y: {
      border: {
        display: false
      },
      grid: {
        display: false
      }
    }
  },
  elements: {
    center: {
      text: 'center text',
      border: false,
      borderSkipped: 'bottom'
    }
  }
};

// Donutchart component
const Donutchart = () => {
  // State for chart data
  const [data, setData] = useState(chartData);
  
  return (
    <Doughnut options={chartOptions} data={data} />
  );
};

export default Donutchart;

