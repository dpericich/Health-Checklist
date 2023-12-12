// Each list item renders it's own card. For now the card does 2 things:
// 1. displays the item 'name'
// 2. name can be clicked to open modal and display data.

import { useState } from 'react'
import styles from './markers.module.css'
import MarkerModal from '../modal/MarkerModal'

const MarkerCard = ({ item }: any) => {
  const [openMarker, setOpenMarker] = useState(false)
  return (
    <div className={styles.cardContainer}>
      <button
        className="btn btn-sm btn-primary w-full text-white"
        onClick={() => setOpenMarker(!openMarker)}
        style={{ fontFamily: 'Verdana' }}
      >
        {item.name}
      </button>

      {openMarker === true ? (
        <MarkerModal onClose={() => setOpenMarker(!openMarker)} item={item} />
      ) : (
        <span></span>
      )}
    </div>
  )
}

export default MarkerCard
