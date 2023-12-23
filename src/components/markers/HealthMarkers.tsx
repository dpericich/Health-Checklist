// maps over 'healthMarkers' array
// 1. checks 'type' to render icon and heading
// 2. renders 'MarkerList' component, which will render individual cards

// had to reformat data a little bit to optimize. 'healthMarkers' is an array of objects. Each object has a 'type' key that allows us to map all 3. The individual 'markers' data within each type is another array that we can esaily map through to render data.

'use client'
import healthData from '@/app/cohort_template'
import styles from './markers.module.css'
import MarkerList from './MarkerList'
import { FaHeartbeat } from 'react-icons/fa'
import { FaDumbbell } from 'react-icons/fa6'
import { TbStretching } from 'react-icons/tb'

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
  const results = healthData[ageKey]?.healthMarkers

  return (
    // <div className={styles.markersContainer}>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center w-[100%]">
      {results?.map((item, i) => {
        return (
          <div
            className="flex flex-col justify-center items-center border-2 border-neutral rounded-xl p-5"
            key={i}
          >
            <div className={styles.listHeader}>
              <div style={{ fontSize: '40px' }}>
                {iconMappings[`${item.type}`]}
              </div>

              <h1 className="text-3xl">{item.type}</h1>
            </div>

            <MarkerList data={item} ageKey={ageKey} />
          </div>
        )
      })}
    </div>
  )
}

export default HealthMarkers
