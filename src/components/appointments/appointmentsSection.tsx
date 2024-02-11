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
        // <div className="flex flex-row w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="m-2 h-full">
                <div className="grid card p-6 border-2 border-primary-font-color border-solid rounded-box shadow-lg">
                    <div className='flex flex-row w-full items-center justify-center mt-2 mb-2'>
                        <MdHealthAndSafety style={{ fontSize: '40px', margin: '10px 10px 10px 0' }} />
                        <span className='text-3xl'>Doctor Appointments</span>
                    </div>
                    <ul>
                        { healthData[ageKey]?.appointments.doctorCheckups?.map(item => 
                            <a key={item.name} href={item.link} target="_blank">
                                <li className="btn btn-primary block text-white transition ease-in-out delay-25 hover:scale-105 shadow-md shadow-gray-400 flex flex-row align-center m-4"
                                    style={{ fontFamily: 'Verdana' }}>
                                    {item.name}
                                </li>
                            </a>    
                        )}
                    </ul>
                </div>
            </div>
            <div className="md:hidden">
                <div className="divider mt-10 m-6"></div>
            </div>
            <div className="m-2 h-full">
                <div className="grid card p-6 border-2 border-primary-font-color border-solid rounded-box shadow-lg">
                    <div className='flex flex-row w-full items-center mt-2 mb-2 justify-center'>
                        <TbDental style={{ fontSize: '40px', margin: '10px 10px 10px 0' }} />
                        <span className='text-3xl'>Dental Appointments</span>
                    </div>
                    <ul>
                        { healthData[ageKey]?.appointments.dentalCheckups?.map(item => 
                            <a key={item.name} href={item.link} target="_blank">
                                <li className="btn btn-primary block text-white transition ease-in-out delay-25 hover:scale-105 shadow-md shadow-gray-400 flex flex-row align-center m-4" 
                                    style={{ fontFamily: 'Verdana' }}>
                                    {item.name}
                                </li>
                            </a>    
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default AppointmentsSection;