'use client'
import { useEffect, useState } from 'react'
import LinkButton from '../../components/linkButton/linkButton'
import styles from './page.module.css'
import { IoPersonCircleSharp } from 'react-icons/io5'
import healthData from '../cohort_template'
import {
  usePathname,
  useSearchParams,
} from '../../../node_modules/next/navigation'
import HealthMarkers from '@/components/markers/HealthMarkers'
import AppointmentsSection from '@/components/appointments/appointmentsSection'

const formatAgeGenderKey = (ageGroup: string, gender: string): string => {
  const formattedAgeGroup = ageGroup.replace('-', '_')
  const ageGenderKey = gender + '_' + formattedAgeGroup
  return ageGenderKey
}

export default function Results() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [dataKey, setDataKey] = useState('')

  useEffect(() => {
    const age = searchParams.get('age')
    const gender = searchParams.get('gender')
    const computedDataKey = formatAgeGenderKey(age, gender)
    setDataKey(computedDataKey)
  }, [])

  return (
    // I want to add basic accordian items here
    <div className={styles.checklistResultsContainer}>
      <h1>Health Checklist Results</h1>
      <div className={styles.topRow}>
        <div className={styles.topRowColumn}>
          <IoPersonCircleSharp style={{ fontSize: '100pt' }} />
        </div>
        <div className={styles.topRowColumn}>GENDER AGE</div>
      </div>
      <div className={styles.statsContainer}>
        <h2 className={styles.sectionsHeadings}>Health Markers</h2>
        <div className={styles.statsRow}>
          <HealthMarkers />
        </div>
      </div>

      <div className={styles.contentRow}>
        <h2>Heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          voluptatem quibusdam, hic ipsam ad assumenda dolorum, eum molestias
          temporibus, voluptatibus dolorem? Laborum doloremque reiciendis id
          fugiat recusandae velit earum quas?
        </p>
      </div>
      <div className={styles.contentRow}>
      <h2 className={styles.sectionsHeadings}>Appointments</h2>
        <AppointmentsSection />
      </div>
      <div className={styles.contentRow}>
        <h2>Interactive Links/Buttons</h2>
        <p>Potential space for accordian, tabs, buttons etc.</p>
      </div>
      <LinkButton link={'/'} disabled={false} text={'Update Your Info'} />
    </div>
  )
}
