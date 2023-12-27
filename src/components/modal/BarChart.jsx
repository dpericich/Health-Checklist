import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const BarChart = ({ chartData }) => {
  return (
    <div className="flex justify-center w-[100%]">
      <Bar data={chartData} />
    </div>
  )
}

export default BarChart
