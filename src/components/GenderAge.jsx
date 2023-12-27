import React from 'react'

const GenderAge = ({ ageKey }) => {
  const params = ageKey.split('_')
  let first = params[0]
  const gender = first[0]?.toUpperCase() + first.slice(1)
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
