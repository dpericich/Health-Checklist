'use client'

import { useState, useEffect } from 'react'
import LinkButton from '../components/linkButton/linkButton'
import styles from './page.module.css'
import {
  ageGroups,
  genders,
  formatAgeGroup,
  formatGenderName,
} from './index_data'

import { quotes } from './cohort_template'
import { TbHealthRecognition } from 'react-icons/tb'

export default function Home() {
  const [disabled, setDisabled] = useState(true)
  const [ageGroup, setAgeGroup] = useState('')
  const [gender, setGender] = useState('')
  const [quote, setQuote] = useState('')

  useEffect(() => {
    if (ageGroup !== '' && gender !== '') {
      setDisabled(false)
    }
  }, [gender, ageGroup])

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * 7)])
  }, [])

  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-screen bg-gradient-to-r from-sky-700 to-blue-900">
      <div className="flex gap-2 justify-center items-center p-5 w-[100%] font-sans">
        <span className="text-white text-2xl md:text-6xl">
          <TbHealthRecognition className="text-orange-500" />
        </span>
        <p className="font-serif text-2xl md:text-5xl text-white">
          HEALTH CHECKLIST
        </p>
      </div>
      <div className="flex flex-col justify-center items-center border-8 border-white bg-zinc-200 rounded-xl shadow-inner shadow-zinc-500 w-[80%] md:w-[60%] max-w-[600px] p-5 md:p-10">
        <div className="flex flex-col justify-center items-center p-3 shadow-inner shadow-zinc-600 bg-white rounded-md mb-5">
          <p className="font-sans">{quote}</p>
        </div>

        <form className="flex flex-col justify-center items-center w-[100%]">
          <div className="grid grid-cols-1 md:grid-cols-2 p-3 shadow-inner shadow-zinc-200 bg-zinc-100 font-sans w-[100%] my-2">
            <span className="flex items-center font-serif font-bold text-md md:text-xl">
              Select Your Age Range:
            </span>
            <select
              name="age-range"
              id="age-range"
              onChange={e => setAgeGroup(e.target.value)}
              className="p-2 rounded-md text-sm md:text-lg"
            >
              <option value="" disabled selected>
                Your Age Range
              </option>
              {ageGroups.map(age => (
                <option value={formatAgeGroup(age)} key={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 p-3 shadow-inner shadow-zinc-200 bg-zinc-100 font-sans w-[100%] my-2">
            <span className="flex items-center font-serif font-bold text-md md:text-xl">
              Select Your Gender:
            </span>
            <select
              name="gender"
              id="gender"
              onChange={e => setGender(e.target.value)}
              className="p-2 rounded-md text-sm md:text-lg"
            >
              <option value="" disabled selected>
                Select Gender
              </option>
              {genders.map(g => (
                <option value={g} key={g}>
                  {formatGenderName(g)}
                </option>
              ))}
            </select>
          </div>
          <LinkButton
            link={`/results?age=${ageGroup}&gender=${gender}`}
            disabled={disabled}
            text={'GET RESULTS'}
          />
        </form>
      </div>
    </div>
  )
}
