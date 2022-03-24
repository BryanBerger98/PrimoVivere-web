import React from 'react';
import { useAuthContext } from '../../auth/context/AuthContext';

export default function Dashboard() {

    const { currentUser } = useAuthContext();
  return (
    <div>
        <div className="flex">
            <div className='p-8'>
                <p className='text-slate-50 text-3xl'><span>Welcome</span> <span className='font-bold'>{currentUser.displayName ? currentUser.displayName : ''}</span></p>
            </div>
        </div>
        <hr className="border-0 h-px bg-slate-700 mx-8" />
    </div>
  );
}
