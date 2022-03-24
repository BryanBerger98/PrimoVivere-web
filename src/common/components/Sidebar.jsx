import React from 'react'
import { FiHome, FiRotateCw, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='w-52 bg-slate-900 flex flex-col'>
        <div className="p-8">
            <h1 className='text-slate-50 text-2xl'><span className='font-bold'>Primo</span> <span>Vivere</span></h1>
        </div>
        <hr className='border-0 h-px bg-slate-700 mx-6 grow' />

        <ul className='mx-6 my-16 flex flex-col h-full'>
            <li>
                <Link className='flex hover:cursor-pointer hover:bg-slate-800 px-4 py-2 rounded-xl' to='/dashboard'>
                    <FiHome className='my-auto mr-3' />
                    <span>Dashboard</span>
                </Link>
            </li>
            <li className='flex hover:cursor-pointer hover:bg-slate-800 px-4 py-2 rounded-xl'>
                <FiRotateCw className='my-auto mr-3' />
                <span>Habits</span>
            </li>
            <li className='mt-auto'>
                <Link className='flex hover:cursor-pointer hover:bg-slate-800 px-4 py-2 rounded-xl' to='/account'>
                    <FiUser className='my-auto mr-3' />
                    <span>Account</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}
