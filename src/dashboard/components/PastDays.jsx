import { differenceInDays } from 'date-fns'
import React from 'react'

export default function PastDays({ userData }) {
  return (
    <div className='h-28 w-28 p-4 rounded-lg bg-gradient-to-br from-sky-400 to-sky-800 flex flex-col text-slate-50 justify-center'>
        <p className='text-2xl font-bold text-center'>{differenceInDays(new Date(), userData.birthDate.fullDate)}</p>
        <p className='text-center text-xl'>Days</p>
    </div>
  )
}
