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
      borderWidth: [3, 0, 3], // Adjusted border width to create overlap
      borderColor: ['#ec4899', '#7e22ce', '#eef2ff'],
      borderAlign: 'inner', // Set border alignment to inner
      borderRadius: [10, 20, 30, 40], // Custom border radius for each corner
    }
  ]
};

const options = {
  responsive: true,
  cutout: '85%',
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
            ctx.font = fontSize + 'px Arial';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const text = '65% Total new customers';
            const textX = Math.round(width / 2);
            const textY = Math.round(height / 2);
            ctx.fillText(text, textX, textY);
          }
        }
      ]}
    />
  );
};

export default DonutChart;
