import { differenceInYears } from 'date-fns'
import React from 'react'

export default function PastYears({ userData }) {
  return (
    <div className='h-28 w-28 p-4 rounded-lg bg-gradient-to-br from-green-400 to-green-800 flex flex-col text-slate-50 justify-center'>
        <p className='text-2xl font-bold text-center'>{differenceInYears(new Date(), userData.birthDate.fullDate)}</p>
        <p className='text-center text-xl'>Years</p>
    </div>
  )
}
