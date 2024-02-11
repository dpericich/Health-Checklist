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
import MainSummarySection from '@/components/summary/summarySection'
import GenderAge from '../../components/GenderAge'

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
      <div className="flex justify-center items-center bg-neutral border-8 rounded-md border-primary p-5 w-[100%]">
        <GenderAge ageKey={dataKey} />
      </div>
      <div className={styles.contentRow}>
        <h2 className={styles.sectionsHeadings}>Main Summary</h2>
        <MainSummarySection dataKey={dataKey} />
      </div>
      <div className={styles.statsContainer}>
        <h2 className={styles.sectionsHeadings}>Health Markers</h2>
        <div className={styles.statsRow}>
          <HealthMarkers ageKey={dataKey} />
        </div>
      </div>

      <div className={styles.contentRow}>
        <h2 className={styles.sectionsHeadings}>Appointments</h2>
        <AppointmentsSection ageKey={dataKey} />
      </div>
      <div className={styles.contentRow}>
        <h2>Interactive Links/Buttons</h2>
        <p>Potential space for accordian, tabs, buttons etc.</p>
      </div>
      <LinkButton link={'/'} disabled={false} text={'Update Your Info'} />
    </div>
  )
}
