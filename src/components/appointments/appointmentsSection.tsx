import React from 'react';
import { MdHealthAndSafety } from "react-icons/md";
import { TbDental } from "react-icons/tb";

const AppointmentsSection = () => {
    return(
        <div className="flex flex-col w-full">
            <div className='flex flex-row w-full items-center'>
                <MdHealthAndSafety style={{ fontSize: '50px', marginRight: '20px' }} />
                Doctor Appointments
            </div>
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> 
            <div className="divider"></div> 
            <div className='flex flex-row w-full items-center'>
                <TbDental style={{ fontSize: '50px', marginRight: '20px' }} />
                <span>Dental Appointments</span>
            </div>
            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
        </div>
    )
};

export default AppointmentsSection;