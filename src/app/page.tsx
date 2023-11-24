'use client'

import { useState, useEffect } from 'react';
import LinkButton from '../components/linkButton';
import styles from './page.module.css'

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
          {/* How do I not allow user to select default option in a dropdown? */}
          <select name="age-range" id="age-range" onChange={(e) => setAgeGroup(e.target.value)}>
            <option value="">Your Age Range</option>
            <option value="18-25">18 - 25</option>
            <option value="26-35">26 - 35</option>
            <option value="36-45">36 - 45</option>
            <option value="46-55">46 - 55</option>
            <option value="56-65">56 - 65</option>
            <option value="66-75">66 - 75</option>
            <option value="76-85">76 - 85</option>
            <option value="86-95">86 - 95</option>
          </select>
        </div>
        <div className={styles.formInput}>
          <span>Select Your Gender:</span>
          <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <LinkButton link={"/results"} disabled={disabled} text={"Get Results"} />
      </form>
    </div>
  )
}
