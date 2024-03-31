import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels: ['Product 1', 'Product 2', 'Product 3'],
  datasets: [
    {
      label: '',
      data: [20, 50, 30],
      backgroundColor: ['#ec4899', '#3b82f6', '#eef2ff'],
      borderColor: ['#ec4899', '#3b82f6', '#eef2ff'],     
    }
  ]
};

const options = {
  responsive: true,
  cutout: '70%',
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    },
    label: {},
    datasets: {
      display: false
    }
  }
};

const DonutChart = () => {
  return (
    <Doughnut
      options={options}
      data={chartData}
      plugins={[
        {
          id: 'textInside',
          afterDraw: function (chart, _) {
            const ctx = chart.ctx;
            const width = chart.width;
            const height = chart.height;
            const fontSize = 12;
            ctx.font = 'bold ' + fontSize + 'px Arial'; // Bold font
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const text1 = '^%%'; // First line text
            const text2 = 'Total new customers'; // Second line text
            const text1X = Math.round(width / 2);
            const text2X = Math.round(width / 2);
            const textY = Math.round(height / 2) - 10; // Adjusting position for two lines
            ctx.fillText(text1, text1X, textY);
            ctx.fillText(text2, text2X, textY + fontSize + 2); // Adding some space between lines
          }
        }
      ]}
    />
  );
};

export default DonutChart;
