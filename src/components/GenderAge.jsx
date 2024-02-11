import React from 'react'

const GenderAge = ({ ageKey }) => {
  const params = ageKey.split('_')
  const unformattedGender = params[0]
  const gender =
    unformattedGender[0]?.toUpperCase() + unformattedGender.slice(1)
  const age = params.slice(1).join(',').replace(',', '-')

  return (
    <div className="flex flex-col justify-center items-center text-xl text-white w-[100%] md:text-3xl">
      <p className="text-4xl">Results</p>
      <p style={{ fontFamily: 'Verdana', fontSize: '16pt' }}>
        {gender}, {age} years old
      </p>
    </div>
  )
}

export default GenderAge
