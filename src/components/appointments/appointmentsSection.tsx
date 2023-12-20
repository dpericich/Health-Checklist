import React from 'react';
import { MdHealthAndSafety } from "react-icons/md";
import { TbDental } from "react-icons/tb";
import healthData from '../../app/cohort_template';

type AppointmentsSectionProps = {
    ageKey: string
}

// Each item is a button w/ a link to a screening site
const AppointmentsSection = ({ ageKey }: AppointmentsSectionProps) => {
    return(
        <div className="flex flex-col w-full">
            <div className='flex flex-row w-full items-center'>
                <MdHealthAndSafety style={{ fontSize: '40px', margin: '10px 10px 10px 0' }} />
                Doctor Appointments
            </div>
            <div className="grid card p-6 border-2 border-primary-font-color border-solid rounded-box shadow-lg">
                <ul>
                    { healthData[ageKey]?.appointments.doctorCheckups?.map(item => 
                        <a key={item.name} href={item.link} target="_blank">
                            <li className="btn btn-primary block text-white transition ease-in-out delay-25 hover:scale-105 shadow-md shadow-gray-400 flex flex-row align-center m-4">
                                {item.name}
                            </li>
                        </a>    
                    )}
                </ul>
            </div>
            <div className="divider mt-10 mb-6"></div> 
            <div className='flex flex-row w-full items-center'>
                <TbDental style={{ fontSize: '40px', margin: '10px 10px 10px 0' }} />
                <span>Dental Appointments</span>
            </div>
            <div className="grid card p-6 border-2 border-primary-font-color border-solid rounded-box shadow-lg">
                <ul>
                    { healthData[ageKey]?.appointments.dentalCheckups?.map(item => 
                        <a key={item.name} href={item.link} target="_blank">
                            <li className="btn btn-primary block text-white transition ease-in-out delay-25 hover:scale-105 shadow-md shadow-gray-400 flex flex-row align-center m-4">
                                {item.name}
                            </li>
                        </a>    
                    )}
                </ul>
            </div>
        </div>
    )
};

export default AppointmentsSection;