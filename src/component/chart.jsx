import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { BiBorderRadius } from 'react-icons/bi';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
 
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
 
const ActivityChart = () => {
    const data = {
        labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25'],
        datasets: [
            {
                label: 'Activity',
                data: [5000, 10000, 7500, 15000, 12500, 10000, 5000, 12500, 10000, 15000],
                backgroundColor: '#7294FF',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                width:"20px",
                borderRadius:"20px"
            },
        ],
    };
 
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };
 
    return (
<div className="bg-light_black p-6 rounded-lg shadow-md">
<h2 className="text-white text-lg mb-4">Activity</h2>
<Bar data={data} options={options} />
</div>
    );
};
 
export default ActivityChart;