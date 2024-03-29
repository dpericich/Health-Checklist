// Each list item renders it's own card. For now the card does 2 things:
// 1. displays the item 'name'
// 2. name can be clicked to open modal and display data.

import { useState } from 'react'
import styles from './markers.module.css'
import MarkerModal from '../modal/MarkerModal'

const MarkerCard = ({ item, ageKey }: any) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div>
      <button
        className="btn btn-sm btn-primary w-full text-white  transition ease-in-out delay-25 hover:scale-105 shadow-md shadow-gray-400"
        onClick={() => setOpenModal(!openModal)}
        style={{ fontFamily: 'Verdana' }}
      >
        {item.name}
      </button>

      {openModal === true ? (
        <MarkerModal
          openMarker={openModal}
          setOpenModal={setOpenModal}
          onClose={() => setOpenModal(!openModal)}
          item={item}
          ageKey={ageKey}
        />
      ) : (
        <span></span>
      )}
    </div>
  )
}

export default MarkerCard
