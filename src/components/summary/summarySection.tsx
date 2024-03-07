import React from 'react'
import healthData from '../../app/cohort_template'
import { CgNotes } from 'react-icons/cg'

type Props = {
  dataKey: string
}
const MainSummarySection = ({ dataKey }: Props) => {
  const params = dataKey.split('_')
  const unformattedGender = params[0]
  const gender =
    unformattedGender[0]?.toUpperCase() + unformattedGender.slice(1)
  const age = params.slice(1).join(',').replace(',', '-')
  //
  const summaryData = healthData[dataKey]?.summary
  return (
    <div className="text-zinc-500 w-[90%] border-8 border-zinc-100 bg-zinc-200 shadow-inner shadow-zinc-500 px-2 md:px-10">
      {summaryData && (
        <div className="p-5 text-zinc-700">
          <div className="flex justify-center items-center my-2">
            <p className="text-center text-md text-blue-500 font-sans font-bold font italic pl-1">
              <span className="font-sans text-zinc-400">Summary:</span>
              <span className="font-sans">
                {' '}
                {gender} {age}{' '}
              </span>
              years old
            </p>
          </div>

          <p className="flex flex-col justify-center items-center border-white bg-white rounded-xl shadow-inner shadow-zinc-500 text-zinc-500 mb-5 text-md md:text-lg font-sans p-4 mt-4">
            {summaryData.description}
          </p>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-2 my-2">
              <p className="text-center text-xl md:text-2xl text-blue-500 font-serif font-bold">
                Factors to remember
              </p>
              <span className="text-2xl text-blue-500">
                <CgNotes />
              </span>
            </div>

            {summaryData.keyPoints.length > 0 && (
              <>
                {summaryData.keyPoints.map((point, i) => {
                  return (
                    <div
                      className="text-center text-xs md:text-lg font-sans text-zinc-500 mb-1"
                      key={i}
                    >
                      * {point}
                    </div>
                  )
                })}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default MainSummarySection
