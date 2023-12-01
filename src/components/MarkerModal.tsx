// Modal can be used to display whatever data we want and engage the user. Easy to click back and forth between items and quickly read snippets of content.
// Currently it does 4 things:
// 1. Checks type to render the main icon again
// 2. heading (item name)
// 3. the main 'value' that we had in the data
// 4. button to close

// *** I added a 'comment' key/value to each data object just to fill out the Modal a bit

import React from 'react'
import styles from '../app/results/page.module.css'
import { FaHeartbeat } from 'react-icons/fa'
import { FaDumbbell } from 'react-icons/fa6'
import { TbStretching } from 'react-icons/tb'

const iconMappings = {
  physical: <FaDumbbell />,
  cardiovascular: <FaHeartbeat />,
  flexibility: <TbStretching />,
}

const MarkerModal = ({ openMarker, onClose, item }: any) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <div style={{ fontSize: '100px' }}>{iconMappings[`${item.type}`]}</div>

        <p className={styles.modalHeading}>{item.name}</p>
        <p className={styles.modalBody}>{item.value}</p>
        <p>{item.comment}</p>
        <button className={styles.button} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default MarkerModal
