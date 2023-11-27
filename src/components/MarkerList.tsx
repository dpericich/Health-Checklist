// A MarkerList is rendered for each healthMarker 'type'. This will then render a MarkerCard component for each item in the list.

'use client'
import styles from '../app/results/page.module.css'
import MarkerCard from './MarkerCard'

const MarkerList = ({ data }: any) => {
  return (
    <>
      <div className={styles.listContent}>
        {data.markers.map((item, i) => {
          return (
            <div key={i}>
              <MarkerCard item={item} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MarkerList
