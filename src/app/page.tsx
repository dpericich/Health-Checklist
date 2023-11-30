import Link from '../../node_modules/next/link'
import styles from './page.module.css'

import { quotes } from './cohort_template'

export default function Home() {
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
            <select className={styles.select} name="age-range" id="age-range">
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
            <select className={styles.select} name="gender" id="gender">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          {/* Need to have better CTA text for this button */}
          <Link href="/results">
            <div className={styles.userInputButton}>Show Results</div>
          </Link>
        </form>
      </div>
    </div>
  )
}
