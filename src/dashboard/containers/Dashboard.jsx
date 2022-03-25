import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../account/context/UserContext';
import { useAuthContext } from '../../auth/context/AuthContext';
import LifeProgressBar from '../components/LifeProgressBar';
import PastDays from '../components/PastDays';
import PastWeeks from '../components/PastWeeks';
import PastYears from '../components/PastYears';

export default function Dashboard() {

    const { currentUser } = useAuthContext();
    const userContext = useUserContext();
    const [currentUserData, setCurrentUserData] = useState(null);

    useEffect(() => {
      userContext.getUserData(currentUser.uid);
    }, []);

    useEffect(() => {
      setCurrentUserData(userContext.currentUserData);
    }, [userContext]);

  return (
    <div>
        <div className="flex">
            <div className='p-8'>
                <p className='text-slate-50 text-3xl'><span>Welcome</span> <span className='font-bold'>{currentUser.displayName ? currentUser.displayName : ''}</span></p>
            </div>
        </div>
        <hr className="border-0 h-px bg-slate-700 mx-8" />
        <div className="container mx-auto p-8 flex gap-4">
          {currentUserData && currentUserData.birthDate && <LifeProgressBar userData={currentUserData} />}
          {currentUserData && currentUserData.birthDate && <PastDays userData={currentUserData} />}
          {currentUserData && currentUserData.birthDate && <PastWeeks userData={currentUserData} />}
          {currentUserData && currentUserData.birthDate && <PastYears userData={currentUserData} />}
        </div>
    </div>
  );
}
