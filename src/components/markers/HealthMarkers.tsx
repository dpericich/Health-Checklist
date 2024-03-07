'use client'
import healthData from '@/app/cohort_template'
import styles from './markers.module.css'
import MarkerList from './MarkerList'
import { FaHeartbeat } from 'react-icons/fa'
import { FaDumbbell } from 'react-icons/fa6'
import { TbStretching } from 'react-icons/tb'
import { useState } from 'react'

const iconMappings = {
  physical: <FaDumbbell />,
  cardiovascular: <FaHeartbeat />,
  flexibility: <TbStretching />,
}

type HealthMarkerProps = {
  ageKey: string
}

const HealthMarkers = ({ ageKey }: HealthMarkerProps) => {
  //
  const [expandCardio, setExpandCardio] = useState(false)
  const [expandPhysical, setExpandPhysical] = useState(false)
  const [expandFlexibility, setExpandFlexibility] = useState(false)
  //
  const results = healthData[ageKey]?.healthMarkers

  return (
    <div className="w-[90%] bg-zinc-400 border-8 border-zinc-300">
      <div className="flex flex-col justify-left items-center">
        {' '}
        <div className="flex justify-center items-center bg-gradient-to-r from-sky-700 to-blue-800 w-[100%] py-1 h-[70px] shadow-md shadow-zinc-600">
          {' '}
          <p className="text-white text-2xl md:text-4xl font-serif font-semibold pl-1">
            HEALTH MARKERS
          </p>
        </div>
        <div className="py-5 md:py-10 px-2 md:px-10">
          <p className="text-center text-white text-md md:text-xl font-sans">
            Our physical health primarily falls into three categories.
            Understanding various markers within each helps us plan effective
            fitness routines, push ourselves when necessary, and stay away from
            injury.
          </p>
        </div>
        <p className="text-center text-sm font-sans italic text-white">
          Click any button to learn more
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-2 w-[90%] mt-3 mb-10">
          {results?.map((item, i) => {
            return (
              <div
                onClick={() => {
                  item.type === 'cardiovascular' ? (
                    (setExpandCardio(true),
                    setExpandPhysical(false),
                    setExpandFlexibility(false))
                  ) : item.type === 'physical' ? (
                    (setExpandPhysical(true),
                    setExpandCardio(false),
                    setExpandFlexibility(false))
                  ) : item.type === 'flexibility' ? (
                    (setExpandFlexibility(true),
                    setExpandCardio(false),
                    setExpandPhysical(false))
                  ) : (
                    <span></span>
                  )
                }}
                className="bg-orange-500 flex flex-col justify-center items-center border-4 border-white rounded-lg shadow-lg hover:border-orange-300 hover:cursor-pointer hover:scale-105 transition-all w-[100%]"
                key={i}
              >
                <div className="flex justify-center items-center gap-2 w-[90%] my-2">
                  <span className="text-white text-3xl">
                    {iconMappings[`${item.type}`]}
                  </span>

                  <h1 className="text-white text-3xl font-serif">
                    {item.type}
                  </h1>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="p-3">
        {expandCardio && <MarkerList data={results[0]} ageKey={ageKey} />}
        {expandPhysical && <MarkerList data={results[1]} ageKey={ageKey} />}
        {expandFlexibility && <MarkerList data={results[2]} ageKey={ageKey} />}
      </div>
    </div>
  )
}

export default HealthMarkers
