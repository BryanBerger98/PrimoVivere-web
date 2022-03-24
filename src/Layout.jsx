import { Outlet } from 'react-router-dom';
import { useAuthContext } from './auth/context/AuthContext';
import Header from './common/components/Header';
import Sidebar from './common/components/Sidebar';

function Layout() {

    const authContext = useAuthContext();

    return(
        <div className='bg-slate-800 text-slate-400 min-h-screen'>
            {!authContext.currentUser && <Header />}
            <div className="flex flex-row h-screen">
                {authContext.currentUser && <Sidebar />}
                <div className='grow'>
                    <Outlet />
                </div>
            </div>
        </div>
    );

}
export default Layout;