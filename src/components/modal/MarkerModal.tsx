import styles from './modal.module.css'
import { FaHeartbeat } from 'react-icons/fa'
import { FaDumbbell } from 'react-icons/fa6'
import { TbStretching } from 'react-icons/tb'
import Accordion from './Accordion'

const iconMappings = {
  physical: <FaDumbbell />,
  cardiovascular: <FaHeartbeat />,
  flexibility: <TbStretching />,
}

const MarkerModal = ({ openModal, onClose, item, ageKey }: any) => {
  const params = ageKey.split('_')
  const first = params[0]
  const gender = first[0].toUpperCase() + first.slice(1)
  const age = params.slice(1).join(',').replace(',', '-')

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
      <Accordion item={item} />
      <div className="fixed top-10 left-10 text-sm">
        <p style={{ fontFamily: 'Verdana', fontWeight: 'bolder' }}>{gender}</p>{' '}
        <p style={{ fontFamily: 'Verdana' }}>{age} years old</p>
      </div>
      <button className={styles.button} onClick={onClose}>
        Close
      </button>
    </div>
  )
}

export default MarkerModal
