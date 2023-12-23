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
        <div className="flex flex-col justify-center items-center p-3 text-white w-[100%] my-5">
          {/* ------------------------------------------------ */}

          <div className="flex flex-col justify-center items-center p-2 bg-secondary rounded-t-lg w-2/3">
            <div className="relative">
              <h1 className="text-3xl relative">SUPERIOR</h1>
            </div>
            <div className={styles.rangeValues}>
              {item.superior} {item.units}
            </div>
          </div>
          {/* ------------------------------------------------ */}
          <div className="flex flex-col justify-center items-center p-2 bg-blue-800 w-2/3">
            <div className="relative">
              <h1 className="text-3xl relative">ABOVE AVERAGE</h1>
            </div>

            <div className={styles.rangeValues}>
              {item.aboveAverage} {item.units}
            </div>
          </div>
          {/* ------------------------------------------------ */}
          <div className="flex flex-col justify-center items-center p-2 bg-neutral rounded-b-lg w-2/3">
            <div className="relative">
              <h1 className="text-3xl relative">AVERAGE</h1>
            </div>
            <div className={styles.rangeValues}>
              {item.average} {item.units}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center p-2 bg-accent rounded-lg w-2/3 text-white my-5">
          <div className="relative">
            <h1 className="text-3xl relative">AVERAGE</h1>
          </div>

          <div className={styles.rangeValues}>
            {item.average} {item.units}
          </div>
        </div>
      )}
      <Accordion item={item} />
      <div className="flex gap-4 justify-center items-center border-2 p-3 my-2 w-full">
        <p style={{ fontFamily: 'Arial' }}>VideoThumb</p>
        <a href="https://www.youtube.com/watch?v=nVsWUtN7NXI" target="_blank">
          <img src={`src/images/${item.videoThumb}`}></img>
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
