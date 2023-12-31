import React from 'react';
import healthData from '../../app/cohort_template';

type Props = {
    dataKey: string;
}
const MainSummarySection = ({ dataKey } : Props) => {
    const summaryData = healthData[dataKey]?.summary;
return(
   <div className="grid card p-6 border-2 border-primary-font-color border-solid rounded-box shadow-lg">
            {summaryData && (
                <>
                    <p className='text-xl'>{summaryData.description}</p>
                    <br />
                    <p className='text-center text-3xl mb-6'>Points to remember:</p>
                    {summaryData.keyPoints.length > 0 && (
                        <ul className='text-xl m-auto'>
                            {summaryData.keyPoints.map((point, index) => (
                                <li key={index}>- {point}</li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
)
}

export default MainSummarySection;