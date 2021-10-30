import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);


export function makeChart(DOM) {
  const labels = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    'now',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      fill: true,
      backgroundColor: 'rgba(252, 37, 37, .2)',
      borderColor: '#FC2525',
      data: [12, 13, 15, 16, 20, 21, 22],
      tension: .4
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  };

  let myChart = new Chart(DOM, config);
}