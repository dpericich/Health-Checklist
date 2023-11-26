'use client'

import { useState, useEffect } from 'react';
import LinkButton from '../components/linkButton';
import styles from './page.module.css'
import { ageGroups, genders, formatAgeGroup, formatGenderName } from './index_data';

export default function Home() {
  const [disabled, setDisabled] = useState(true);
  const [ageGroup, setAgeGroup] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (ageGroup !== "" && gender !== "") {
      setDisabled(false);
    }
  }, [gender, ageGroup])

  return (
    <div className={styles.userInputContainer}>
      <div className={styles.pageHeading}>
        <h1>Health Checklist</h1>
        <p>This can be a sub-heading...</p>
      </div>
      <form className={styles.formContainer}>
        {/* I want some brief description of what this is */}
        <div className={styles.formInput}>
          <span>Select Your Age Range:</span>
          {/* Maybe I extract these values out to a data file */}
          <select name="age-range" id="age-range" onChange={(e) => setAgeGroup(e.target.value)}>
            <option value="" disabled selected>Your Age Range</option>
            { ageGroups.map(age => <option value={formatAgeGroup(age)} key={age}>{age}</option>) }
          </select>
        </div>
        <div className={styles.formInput}>
          <span>Select Your Gender:</span>
          <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)}>
            <option value="" disabled selected>Select Gender</option>
            { genders.map(g => <option value={g} key={g}>{formatGenderName(g)}</option>) }
          </select>
        </div>
        <LinkButton link={"/results"} disabled={disabled} text={"Get Results"} />
      </form>
    </div>
  )
}
