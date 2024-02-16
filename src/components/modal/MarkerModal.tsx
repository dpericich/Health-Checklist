// BarChart overview
// 1. create separate file for the BarChart object & import
// 2. initialize the 'chartData' array - specifies the data we'll feed to the chart
// 3. 'data' state formats the chart (sets labels, bars etc.)

import styles from './modal.module.css'
import { FaHeartbeat } from 'react-icons/fa'
import { FaDumbbell } from 'react-icons/fa6'
import { TbStretching } from 'react-icons/tb'
import Accordion from './Accordion'
import { useState } from 'react'
import BarChart from './BarChart'
import Image from 'next/image'

const iconMappings = {
  physical: <FaDumbbell />,
  cardiovascular: <FaHeartbeat />,
  flexibility: <TbStretching />,
}

const MarkerModal = ({ openMarker, onClose, item }: any) => {
  // initialize 'chartData' array --------------------------------------
  const chartData = [
    {
      tag: 'average',
      result: parseInt(item.average),
    },
    { tag: 'above average', result: parseInt(item.aboveAverage) },
    { tag: 'superior', result: parseInt(item.superior) },
  ]

  // 'data' state formats the chart ----------------------------------
  const [data, setData] = useState({
    labels: chartData.map(data => data.tag),
    datasets: [
      {
        label: item.units,
        data: chartData.map(data => data.result),
        backgroundColor: [
          'rgb(123, 189, 141)',
          'rgb(65, 179, 95)',
          'rgb(28, 138, 57)',
        ],
      },
    ],
  })

  return (
    // <div className={styles.modalContainer}>
    <div
      className={`fixed inset-0 m-10 mt-20 max-h-[70%] flex flex-col justify-center items-center rounded-md shadow-md p-2 transition-colors ${
        openMarker ? 'visible bg-gray-200 z-50' : 'invisible'
      }`}
    >
      <div className="flex gap-2 items-center text-3xl md:text-7xl my-10">
        {iconMappings[`${item.type}`]}

        <span className="text-2xl md:text-5xl">{item.name}</span>
      </div>
      <div className="flex flex-col items-center h-10/12 overflow-y-scroll bg-gray-100 shadow-inner shadow-gray-500 rounded-md py-10">
        {item.aboveAverage ? (
          <div className="border-4 w-3/4">
            <BarChart chartData={data} />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center my-4 bg-white shadow-inner shadow-gray-300 rounded-md p-2 w-[80%] md:w-[50%]">
            <h1 className="text-xl font-sans">Average</h1>

            {/* ------- CHART / AVERAGE ---------------------- */}
            <div className="font-sans text-lg md:text-2xl">
              {item.average} {item.units}
            </div>
          </div>
        )}

        {/* ------- ACCORDIAN ---------------------- */}
        <Accordion item={item} />
        {item.videoThumb && (
          <div className="flex flex-col gap-4 justify-center items-center p-3 my-2 w-full">
            <p className="text-lg font-sans">Click Image for Assessment</p>
            <a href={item.videoURL} target="_blank">
              <Image
                src={`/${item.videoThumb}`}
                alt="video-thumb"
                width={200}
                height={200}
                className="rounded shadow-md shadow-gray-400 border-2 border-transparent hover:border-green-500 hover:scale-105 transition-all"
              />
            </a>
          </div>
        )}
      </div>
      <button
        className="absolute top-5 right-5 btn btn-sm btn-neutral w-[40px] text-white transition ease-in-out delay-25 hover:scale-105 font-sans"
        onClick={onClose}
      >
        X
      </button>
    </div>
    // </div>
  )
}

export default MarkerModal
