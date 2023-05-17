import { faArrowLeft, faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Spinner } from '../../components/Loading/Spinner'

function Account() {
    // Current User Infomation
    const user = JSON.parse(localStorage.getItem('user')) ||  JSON.parse(sessionStorage.getItem('user')) 
    
    // State 
    const [edit, setEdit] = useState(false)
    const [userName, setUserName] = useState(user.userName);
    const [email, setEmail] = useState(user.email);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [phoneNumber, setPhoneNumber] = useState('');
    
    const [loading, setLoading] = useState(false)

    const infomationUser = [
        {
            id: 'userName',
            title: 'Username',
            value: userName,
        },
        {
            id: 'email',
            title: 'Email',
            value: email,
        },
        {
            id: 'firstName',
            title: 'First Name',
            value: firstName,
        },
        {
            id: 'lastName',
            title: 'Last Name',
            value: lastName,
        },
        {
            id: 'phoneNumber',
            title: 'Phone Number',
            value:'',
        }   
    ]

    const SaveEdit = async () => {
        setLoading(true)
        await axios.put(`http://localhost:5005/user-detail?id=${user._id}`, {
            firstName: firstName,
            lastName: lastName, 
            email: email,
        }).then(() => {
            const userAfterEdit = {
                ...user,
                firstName: firstName,
                lastName: lastName, 
                email: email
            }
            localStorage.setItem('user', JSON.stringify(userAfterEdit))
        })
        .catch(err => {
            if(err) {
                alert('Something Went Wrong. Please Try Again Later...')
                return
            }
            return
        })
        setLoading(false)
    }
    
    const changeInfo = (e) => {
        const id = e.target.id 
        switch (id) {
            case 'firstName':
                setFirstName(e.target.value)
                break;
             
            case 'lastName':
                setLastName(e.target.value)
                break
            case 'email':
                setEmail(e.target.value)
                break
            case 'phoneNumber':
            setPhoneNumber(e.target.value)
            break
        default:
            break;
        }
    }


    const ChangeImage = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            const output = document.querySelector('#avatar')
            output.src = reader.result
        }
        reader.readAsDataURL(e.target.files[0])
    }



    return (
        <div className=' mt-4 dark:text-white px-3'>
            <form method='PUT' >
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10">
                        <div className='flex items-center'>
                            <Link to='/chat'>
                                <span className=' hover:dark:bg-dark-color-seen px-3 py-2 rounded-full'><FontAwesomeIcon icon={faArrowLeft} /></span>
                            </Link>
                            <h2 className=" text-3xl font-semibold leading-7 ml-3 ">ACCOUNT</h2>
                        </div>
                        
                        {/* Avatar User */}
                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                            <div className="col-span-full mt-4">
                                <span htmlFor="photo" className="block text-sm font-medium leading-6 ">
                                    Photo
                                </span>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <UserCircleIcon className="h-12 w-12 " aria-hidden="true" />
                                    <input onChange={ChangeImage} placeholder='Change' type='file' className='rounded-md w-24 p-1 bg-white text-sm font-semibold  shadow-sm' />
                                   
                                </div>
                                
                            </div>
                        </div>

                        {/* Infomation User */}
                        <div className='flex flex-col justify-between items-center mt-7'>
                            <div className='flex items-center justify-between mb-2'>
                                <h2 className=' text-lg font-semibold'>Your Infomation</h2>
                                <span onClick={() => setEdit(true)} className='text-xs ml-2 hover:bg-slate-600 hover:text-white rounded-full px-1.5 py-1'><FontAwesomeIcon icon={faPencil} /></span>
                            </div>
                            {infomationUser.map((info, index) => (
                                <div key={index} className='w-full px-1 mb-3'>
                                    <span className='' htmlFor={info.id}>
                                        {info.title}
                                    </span>

                                    <div id={info.id} className='mt-1'> 
                                        <input
                                            id={info.id}
                                            value={info.value}
                                            onChange={(e) => changeInfo(e)}
                                            disabled={edit && info.id !== 'userName' ? false : true}
                                            className={`w-full ${edit ? 'cursor-text' : 'cursor-no-drop'} disabled:bg-slate-200 rounded-md border border-solid border-gray-800  text-black dark:text-white px-2 py-1`}
                                        />
                                    </div>
                                </div>
                            ))}
                             
                        </div>
                    </div> 
                </div>
                
                {edit && 
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button onClick={() => setEdit(false)} type="button" className="text-lg font-semibold leading-6 ">Cancel</button>
                        <button
                            onClick={SaveEdit}
                            type="submit"
                            className="rounded-md dark:bg-dark-color-primary bg-color-primary px-3 py-2 text-lg font-semibold text-white shadow-sm hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        > Save </button>
                    </div>
                }
            </form>
            {loading &&        
                <div className="fixed w-full h-full top-0 left-0 bg-modal">
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <Spinner />
                    </div>
                </div>
            }
        </div>
    );
}

export default Account;