import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn, FiHome } from 'react-icons/fi';
import Dropdown from './Dropdown';
import { FiChevronDown, FiUser, FiLogOut } from 'react-icons/fi';
import { useAuthContext } from '../../auth/context/AuthContext';

function Header() {

    const authContext = useAuthContext();
    const currentUser = authContext.currentUser;

    const navigate = useNavigate();

    const onSignout = () => {
        authContext.signoutUser()
        .then(() => {
            navigate('/signin');
        }).catch(console.error);
    }

    return(
        <nav className="flex p-5 bg-slate-900 drop-shadow-lg text-slate-200 fixed inset-x-0 z-50">
            <Link to='/' className='font-bold text-sm md:text-md'>React - Tailwind | Firebase</Link>
            <ul className="list-none flex ml-auto gap-4 text-sm items-center">
                <li>
                    <Link className='hover:text-slate-50 flex' to='/'>
                        <FiHome className='my-auto mr-0 md:mr-1' />
                        <span className='hidden md:inline'>Home</span>
                    </Link>
                </li>
                {
                    currentUser ?
                    <li>
                        <Dropdown id='headerAccountDropdown'>
                            <button className='hover:text-slate-50 flex items-center'>
                                <span className='hidden md:inline mr-1'>Account</span>
                                <span className='border rounded-full flex md:hidden mr-1'>
                                    <FiUser className='m-auto'/>
                                </span>
                                <FiChevronDown />    
                            </button>
                            <ul className='list-none flex-col rounded-xl bg-slate-700 absolute right-0 mt-1 py-3 w-40 border border-slate-800'>
                                <li className='hover:cursor-pointer hover:bg-slate-600'>
                                    <Link to='/account' className='flex items-center w-full px-5 py-1'>
                                        <FiUser /><span className="ml-1">Profile</span>
                                    </Link>
                                </li>
                                <li className='hover:cursor-pointer hover:bg-slate-600'>
                                    <button className='px-5 py-1 flex items-center' type='button' onClick={onSignout}>
                                        <FiLogOut /><span className="ml-1">Logout</span>
                                    </button>
                                </li>
                            </ul>
                        </Dropdown>
                    </li>
                    :
                    <>
                        <li>
                            <Link className='hover:text-slate-50 flex' to='/signin'><FiLogIn className='my-auto mr-1' /> Sign in</Link>
                        </li>
                        <li>
                            <Link className='px-5 py-3 bg-sky-500 text-slate-50 hover:bg-sky-400 rounded-lg font-semibold' to='/signup'>Signup</Link>
                        </li>
                    </>
                }
            </ul>
        </nav>
    );

}
export default Header;