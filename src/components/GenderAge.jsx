import React from 'react'

const GenderAge = ({ ageKey }) => {
  const params = ageKey.split('_')
  const unformattedGender = params[0]
  const gender =
    unformattedGender[0]?.toUpperCase() + unformattedGender.slice(1)
  const age = params.slice(1).join(',').replace(',', '-')

  return (
    <div className="flex flex-col justify-center items-center text-white w-[100%] font-sans">
      <p className="text-4xl font-serif font-extrabold">YOUR RESULTS</p>
      {/* <p className="font-sans text-xl">
        {gender}, {age} years old
      </p> */}
    </div>
  )
}

export default GenderAge
