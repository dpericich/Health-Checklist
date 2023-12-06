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

export default function Home() {
  const [disabled, setDisabled] = useState(true)
  const [ageGroup, setAgeGroup] = useState('')
  const [gender, setGender] = useState('')

  useEffect(() => {
    if (ageGroup !== '' && gender !== '') {
      setDisabled(false)
    }
  }, [gender, ageGroup])

  return (
    <div className={styles.userInputContainer}>
      <div className={styles.pageHeading}>
        <p className={styles.heading}>Health Checklist</p>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.randomQuote}>
          <p>{quotes[Math.floor(Math.random() * 7)]}</p>
        </div>

        <form>
          {/* I want some brief description of what this is */}
          <div className={styles.formInput}>
            <span>Select Your Age Range:</span>
            {/* Maybe I extract these values out to a data file */}
            <select
              name="age-range"
              id="age-range"
              onChange={e => setAgeGroup(e.target.value)}
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
          <div className={styles.formInput}>
            <span>Select Your Gender:</span>
            <select
              name="gender"
              id="gender"
              onChange={e => setGender(e.target.value)}
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
            text={'Get Results'}
          />
        </form>
      </div>
    </div>
  )
}
