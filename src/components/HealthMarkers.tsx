// maps over 'healthMarkers' array
// 1. checks 'type' to render icon and heading
// 2. renders 'MarkerList' component, which will render individual cards

// had to reformat data a little bit to optimize. 'healthMarkers' is an array of objects. Each object has a 'type' key that allows us to map all 3. The individual 'markers' data within each type is another array that we can esaily map through to render data.

'use client'
import healthData from '@/app/cohort_template'
import styles from '../app/results/page.module.css'
import MarkerList from './MarkerList'
import { FaHeartbeat } from 'react-icons/fa'
import { FaDumbbell } from 'react-icons/fa6'
import { TbStretching } from 'react-icons/tb'

const iconMappings = {
  physical: <FaDumbbell />,
  cardiovascular: <FaHeartbeat />,
  flexibility: <TbStretching />,
}

const HealthMarkers = () => {
  const { healthMarkers } = healthData['female_40_59']

  return (
    <div className={styles.markersContainer}>
      {healthMarkers.map((item, i) => {
        return (
          <div className={styles.listsContainer} key={i}>
            <div className={styles.listHeader}>
              <div style={{ fontSize: '40px' }}>
                {iconMappings[`${item.type}`]}
              </div>

              <h1>{item.type}</h1>
            </div>
            {/* RENDERS MARKERLIST ------------------------ */}
            <MarkerList data={item} />
          </div>
        )
      })}
    </div>
  )
}

export default HealthMarkers
