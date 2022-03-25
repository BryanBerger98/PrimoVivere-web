import { addYears, differenceInDays } from 'date-fns';
import React, { useEffect, useState } from 'react'

export default function LifeProgressBar({ userData }) {

    const [progression, setProgression] = useState(0);

    useEffect(() => {
        if (userData && userData.birthDate && userData.birthDate.fullDate) {
            const now = new Date();
            const ninety = addYears(userData.birthDate.fullDate, 90);
            const daysFromBirth = differenceInDays(now, userData.birthDate.fullDate);
            const daysFromBirthToNinety = differenceInDays(ninety, userData.birthDate.fullDate);
            const result = Math.round((daysFromBirth/daysFromBirthToNinety)*100);
            setProgression(result);
        }
    }, [userData]);

  return (
    <div className='p-4 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-800 w-96 h-28 flex flex-col'>
        <p className='text-lg text-slate-50 font-bold'>Life time progression</p>
        <div className="flex justify-between text-slate-50 mt-auto">
            <p className='font-bold text-xl'>{progression}%</p>
            <p className='mt-auto'>To 90</p>
        </div>
        <div className='my-1 h-1.5 bg-slate-900 rounded-xl'>
            <div className={`rounded-xl bg-slate-50 h-full`} style={{ width: `${progression}%` }}></div>
        </div>
    </div>
  )
}
