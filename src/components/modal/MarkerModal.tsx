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
    <div className={styles.modalContainer}>
      <div className="">
        <button
          className="absolute top-5 right-5 btn btn-sm btn-neutral w-[40px] text-white transition ease-in-out delay-25 hover:scale-105 font-sans"
          onClick={onClose}
        >
          X
        </button>
      </div>
      <div className="flex gap-2 justify-center items-center text-7xl w-[100%]">
        {/* ------- HEADER --------------------------- */}

        <div className="border-2 flex gap-2 items-center">
          <div className="text-3xl md:text-7xl">
            {iconMappings[`${item.type}`]}
          </div>
          <span className="text-2xl md:text-5xl">{item.name}</span>
        </div>
      </div>
      {/* </div> */}
      {/* ------- CHART / AVERAGE ---------------------- */}
      {item.aboveAverage ? (
        <div className="w-[85%] md:w-[70%] my-4 bg-white shadow-inner shadow-gray-300 rounded-md p-2">
          <BarChart chartData={data} />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center my-4 bg-white shadow-inner shadow-gray-300 rounded-md p-2 w-[80%] md:w-[50%]">
          <h1 className="text-xl font-sans">Average</h1>

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

      {/* <button
        className="btn btn-sm btn-neutral absolute top-6 right-2 md:top-5 md:right-5 w-[40px] text-white  transition ease-in-out delay-25 hover:scale-105 shadow-md shadow-gray-400 font-sans"
        onClick={onClose}
      >
        X
      </button> */}
    </div>
  )
}

export default MarkerModal
