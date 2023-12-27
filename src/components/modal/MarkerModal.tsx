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

const MarkerModal = ({ onClose, item }: any) => {
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
      <div className={styles.modalHeader}>
        {iconMappings[`${item.type}`]}
        <span style={{ fontSize: '24pt' }}>{item.name}</span>
      </div>
      {item.aboveAverage ? (
        <BarChart chartData={data} />
      ) : (
        <div className="flex flex-col justify-center items-center p-2 text-neutral rounded-xl w-1/2 border-2 border-neutral my-5">
          <div className="relative">
            <h1 className="text-3xl">AVERAGE</h1>
          </div>

          <div
            style={{
              fontFamily: 'Verdana',
              color: 'rgb(117, 195, 117)',
              fontSize: '16pt',
              fontWeight: 'bold',
            }}
            className="text-white"
          >
            {item.average} {item.units}
          </div>
        </div>
      )}

      <Accordion item={item} />
      <div className="flex gap-4 justify-center items-center border-2 p-3 my-2 w-full">
        <p style={{ fontFamily: 'Arial' }}>VideoThumb</p>
        <a href={item.videoURL} target="_blank">
          {/* <img
            className="border-2 border-red-300 h-[80px] w-[100px]"
            src="shoulderTest.png"
            alt="video-link"
          ></img> */}
          <Image
            src={`/src/components/modal/images/${item.videoThumb}`}
            alt="video-thumb"
            width={100}
            height={100}
          />
        </a>
      </div>
      <button
        className="btn btn-sm btn-neutral absolute top-10 right-10 w-[40px] text-white  transition ease-in-out delay-25 hover:scale-105 shadow-md shadow-gray-400"
        onClick={onClose}
      >
        X
      </button>
    </div>
  )
}

export default MarkerModal
