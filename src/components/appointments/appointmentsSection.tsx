import { useState } from 'react'
import { MdHealthAndSafety } from 'react-icons/md'
import { TbDental } from 'react-icons/tb'
import healthData from '../../app/cohort_template'

type AppointmentsSectionProps = {
  ageKey: string
}

// Each item is a button w/ a link to a screening site
const AppointmentsSection = ({ ageKey }: AppointmentsSectionProps) => {
  //
  const [expandDoctor, setExpandDoctor] = useState(false)
  const [expandDental, setExpandDental] = useState(false)
  return (
    <div className="bg-zinc-600 w-[90%] border-8 border-zinc-500">
      <div className="flex flex-col justify-left items-center">
        {' '}
        <div className=" flex justify-center items-center bg-gradient-to-r from-sky-700 to-blue-800 w-[100%] py-1 h-[70px] shadow-md shadow-zinc-700">
          {' '}
          <p className="text-white text-2xl md:text-4xl font-serif font-semibold pl-1">
            APPOINTMENTS
          </p>
        </div>
        <div className="mt-2 py-5 md:py-10 px-2 md:px-10">
          <p className="text-center text-white text-md md:text-xl font-sans">
            Scheduling routine medical appointments each year will help keep
            your health on track as you age because doctors can address budding
            health concerns before they become big issues.
          </p>
        </div>
      </div>
      {/* ----------- BUTTON ROW ----------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center w-[100%] p-2 mb-10">
        <div className="flex flex-col justify-center items-center md:pl-40">
          <span className="text-white text-2xl font-serif font-bold">
            Primary Care
          </span>
          <button
            onClick={() => {
              setExpandDoctor(true), setExpandDental(false)
            }}
            className="bg-sky-500 flex flex-col justify-center items-center border-8 border-white shadow-lg hover:border-sky-200 hover:bg-sky-300 hover:cursor-pointer hover:scale-105 transition-all p-2 w-[200px] h-[200px] rounded-full mt-2"
          >
            <MdHealthAndSafety className="text-7xl text-white" />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center md:pr-40">
          <span className="text-white text-2xl font-serif font-bold">
            Dental
          </span>
          <button
            onClick={() => {
              setExpandDoctor(false), setExpandDental(true)
            }}
            className="bg-sky-500 flex flex-col justify-center items-center border-8 border-white shadow-lg hover:border-sky-200 hover:bg-sky-300 hover:cursor-pointer hover:scale-105 transition-all p-2 w-[200px] h-[200px] rounded-full mt-2"
          >
            <TbDental className="text-7xl text-white" />
          </button>
        </div>
      </div>
      {/* ----------- EXPANDED ROW ----------------------- */}
      <div className="p-3">
        {/* <div className="bg-white shadow-inner shadow-zinc-400 rounded-md flex flex-col gap-2 p-2 w-[100%] my-2 h-[350px]"> */}
        {expandDoctor && (
          <div className="bg-white shadow-inner shadow-zinc-400 rounded-md flex flex-col gap-2 pt-6 w-[100%] my-2 h-[350px] overflow-y-scroll">
            {healthData[ageKey]?.appointments.doctorCheckups?.map(item => (
              <a
                className="flex justify-center w-[100%]"
                key={item.name}
                href={item.link}
                target="_blank"
              >
                <button className="flex justify-center items-center bg-orange-500 border-white rounded-md h-[35px] w-[90%] md:w-[60%] text-white transition ease-in-out delay-25 hover:scale-105 shadow-md shadow-gray-400 my-2 font-serif">
                  {item.name}
                </button>
              </a>
            ))}
          </div>
          // </div>
        )}
        {expandDental && (
          <div className="bg-white shadow-inner shadow-zinc-400 rounded-md flex flex-col gap-2 pt-6 w-[100%] my-2 h-[350px]">
            {healthData[ageKey]?.appointments.dentalCheckups?.map(item => (
              <a
                className="flex justify-center w-[100%]"
                key={item.name}
                href={item.link}
                target="_blank"
              >
                <button className="flex justify-center items-center bg-orange-500 border-white rounded-md h-[35px] w-[90%] md:w-[60%] text-white transition ease-in-out delay-25 hover:scale-105 shadow-md shadow-gray-400 my-2 font-serif">
                  {item.name}
                </button>
              </a>
            ))}
          </div>
        )}
      </div>
      {/* </div> */}
    </div>
  )
}

export default AppointmentsSection
