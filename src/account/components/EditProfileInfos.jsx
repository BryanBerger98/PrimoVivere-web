import { useEffect, useState } from 'react';
import { FiList, FiSave, FiAlertCircle, FiCheck } from 'react-icons/fi';
import { useAuthContext } from '../../auth/context/AuthContext';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useUserContext } from '../context/UserContext';

function EditProfileInfos() {

    const authContext = useAuthContext();
    const userContext = useUserContext();
    const currentUser = authContext.currentUser;
    const currentUserData = userContext.currentUserData;
    const [userData, setUserData] = useState(null);
    const [savedMessage, setSavedMessage] = useState(null);

    const [profileInfosFormValues, setProfileInfosFormValues] = useState({
        username: currentUser && currentUser.displayName ? currentUser.displayName : '',
        birthDate: ''
    });

    const profileInfosFormSchema = Yup.object().shape({
        username: Yup.string().required('Required'),
        birthDate: Yup.string().required('Required')
    });

    const handleSubmit = async (values) => {
        try {
            await authContext.updateCurrentUserName(values.username);
            const birthDateArr = values.birthDate.split('/');
            const birthDate = new Date(`${birthDateArr[2]}-${birthDateArr[0]}-${birthDateArr[1]}`);
            await userContext.updateUserBirthDate(currentUser.uid, birthDate);
            setSavedMessage('Saved');
            setTimeout(() => {
                setSavedMessage(null);
            }, 5000);
        } catch(error) {
            console.error(error.code, error.message);
        }
    };

    useEffect(() => {
        userContext.getUserData(currentUser.uid);
    }, []);

    useEffect(() => {
        setUserData({...currentUserData});
        setProfileInfosFormValues({
            username: currentUser && currentUser.displayName ? currentUser.displayName : '',
            birthDate: currentUserData && currentUserData.birthDate && currentUserData.birthDate.fullDate ? `${currentUserData.birthDate.month}/${currentUserData.birthDate.date}/${currentUserData.birthDate.year}` : ''
        });
    }, [currentUser, currentUserData]);

    return(
        <div className="bg-slate-900 drop-shadow-xl rounded-xl p-5 col-span-12 md:col-span-6 h-full flex flex-col">
            <h3 className="text-base font-medium flex items-center mb-5">
                <FiList /><span className="ml-1">Informations</span>
                {
                    savedMessage ? <p className='ml-auto text-green-500 flex items-center'><FiCheck /> <span className='ml-1'>{savedMessage}</span></p> : null
                }
            </h3>
            <Formik
                initialValues={profileInfosFormValues}
                validationSchema={profileInfosFormSchema}
                onSubmit={handleSubmit}
                enableReinitialize={true}
            >
                {({errors, touched}) => (
                    <Form className='flex flex-col h-full'>
                        <div className='flex flex-col relative mb-5 text-sm'>
                            <label htmlFor="editProfileUsernameInput" className="mb-1 ml-1 font-medium text-md">Username <span className="text-rose-500">*</span></label>
                            <Field type="text" id="editProfileUsernameInput" name="username" className="border border-slate-900 rounded-md p-2 text-slate-50 bg-slate-800" placeholder="Ex: John DOE" />
                            {touched.username && errors.username && <span className='ml-2 flex items-center text-rose-500 absolute bottom-2 right-2'><span className='mr-1'>{errors.username}</span><FiAlertCircle /></span>}
                        </div>
                        <div className='flex flex-col relative mb-5 text-sm'>
                            <label htmlFor="editProfileBirthDateInput" className="mb-1 ml-1 font-medium text-md">Birth date <span className="text-rose-500">*</span></label>
                            <Field type="text" id="editProfileBirthDateInput" name="birthDate" className="border border-slate-900 rounded-md p-2 text-slate-50 bg-slate-800" placeholder="MM/JJ/AAAA" />
                            {touched.birthDate && errors.birthDate && <span className='ml-2 flex items-center text-rose-500 absolute bottom-2 right-2'><span className='mr-1'>{errors.birthDate}</span><FiAlertCircle /></span>}
                        </div>
                        <div className="flex mt-auto">
                            <button type='submit' className='px-5 py-3 bg-sky-500 text-slate-50 hover:bg-sky-400 rounded-md font-semibold ml-auto flex items-center text-sm'>
                                <FiSave />
                                <span className='ml-1'>Save</span>
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );

}
export default EditProfileInfos;