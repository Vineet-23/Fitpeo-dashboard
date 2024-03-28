import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Registering required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Data for the bar chart
const chartData = {
  labels: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  datasets: [
    {
      label: '',
      data: [45, 20, 60, 50, 46, 100, 78, 135, 90, 50, 50, 50],
      backgroundColor: '#b9cce2', // Individual colors for each bar can be set here
      borderWidth: 1,
      borderRadius: 10
    }
  ]
};

// Options for the bar chart
const chartOptions = {
  responsive: true,
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
    bar: {
      border: false,
      borderSkipped: 'bottom'
    }
  }
};

// Barchart component
const Barchart = () => {
  // State for chart data
  const [data, setData] = useState(chartData);
  
  return (
    <Bar options={chartOptions} data={data} />
  );
};

export default Barchart;
