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
import Footer from '../../components/Footer'

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

    // <div className="flex flex-col justify-center items-center">
    <div className="flex flex-col justify-center items-center w-[100%] bg-black/80">
      <div className="bg-gradient-to-r from-sky-700 to-blue-800 flex justify-center items-center p-5 w-[100%] h-[100]">
        <GenderAge ageKey={dataKey} />
      </div>
      <MainSummarySection dataKey={dataKey} />

      <HealthMarkers ageKey={dataKey} />

      <AppointmentsSection ageKey={dataKey} />

      {/* <LinkButton link={'/'} disabled={false} text={'Update Your Info'} /> */}
      <Footer />
    </div>
  )
}
