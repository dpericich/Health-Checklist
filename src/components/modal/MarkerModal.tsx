import styles from './modal.module.css'
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
      <div className={styles.modalHeader}>
        {iconMappings[`${item.type}`]}
        <span style={{ fontSize: '24pt' }}>{item.name}</span>
      </div>
      {item.aboveAverage ? (
        <div className={styles.modalBody}>
          <div
            className={styles.modalRange}
            style={{ backgroundColor: '#81b29a' }}
          >
            <span style={{ color: 'rgb(181, 135, 20)', fontWeight: 'bolder' }}>
              Average
            </span>{' '}
            <div className={styles.rangeValues}>{item.average}</div>
          </div>
          <div
            className={styles.modalRange}
            style={{ backgroundColor: '#44775f' }}
          >
            <span style={{ color: 'silver', fontWeight: 'bolder' }}>
              Above Average
            </span>{' '}
            <div className={styles.rangeValues}>{item.aboveAverage}</div>
          </div>
          <div
            className={styles.modalRange}
            style={{ backgroundColor: '#244435' }}
          >
            <span style={{ color: 'gold', fontWeight: 'bolder' }}>
              Superior
            </span>{' '}
            <div className={styles.rangeValues}>{item.superior}</div>
          </div>
        </div>
      ) : (
        <div className={styles.modalSingleAverage}>
          Average
          <span
            style={{ fontFamily: 'Verdana', fontSize: '13pt', marginTop: '' }}
          >
            {item.average}
          </span>
        </div>
      )}

      <p className={styles.modalComment}>{item.comment}</p>
      <button className={styles.button} onClick={onClose}>
        Close
      </button>
    </div>
  )
}

export default MarkerModal
