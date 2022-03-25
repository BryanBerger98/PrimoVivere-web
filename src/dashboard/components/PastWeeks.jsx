import { differenceInWeeks } from 'date-fns'
import React from 'react'

export default function PastWeeks({ userData }) {
  return (
    <div className='h-28 w-28 p-4 rounded-lg bg-gradient-to-br from-fuchsia-400 to-fuchsia-800 flex flex-col text-slate-50 justify-center'>
        <p className='text-2xl font-bold text-center'>{differenceInWeeks(new Date(), userData.birthDate.fullDate)}</p>
        <p className='text-center text-xl'>Weeks</p>
    </div>
  )
}
