import { faArrowLeft, faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Account() {
    const infomationUser = [
        {
            id: '1',
            title: 'Username',
            value:'',
        },
        {
            id: '2',
            title: 'Email',
            value:'',
        },
        {
            id: '3',
            title: 'First Name',
            value:'',
        },
        {
            id: '4',
            title: 'Last Name',
            value:'',
        },
        {
            id: '5',
            title: 'Phone Number',
            value:'',
        }   
    ]
    const user = JSON.parse(localStorage.getItem('user')) ||  JSON.parse(sessionStorage.getItem('user')) 
    // State 
    const [edit, setEdit] = useState(false)

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
            <form>
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
                                <label htmlFor="photo" className="block text-sm font-medium leading-6 ">
                                    Photo
                                </label>
                                <div className="mt-2 flex items-center gap-x-3">
                                    <UserCircleIcon className="h-12 w-12 " aria-hidden="true" />
{/*                                     
                                    <input className="rounded-md  bg-white px-2.5 py-1.5 text-sm font-semibold  shadow-sm "
                                     onClick={ChangeImage}  type='file' 
                                     /> */}
                                   
                                </div>
                                {/* <input onChange={ChangeImage} type='file'  className='w-12 mr-3 rounded-full object-cover' /> */}
                            </div>
                        </div>

                        {/* Infomation User */}
                        <div className='flex flex-col justify-between items-center mt-7'>
                            <div className='flex items-center justify-between mb-2'>
                                <h2 className=' text-lg font-semibold'>Your Infomation</h2>
                                <span onClick={() => setEdit(true)} className='text-xs ml-2 hover:bg-slate-600 hover:text-white rounded-full px-1.5 py-1'><FontAwesomeIcon icon={faPencil} /></span>
                            </div>
                            {infomationUser.map((info, index) => (
                                <div className='w-full px-1 mb-3'>
                                    <label className='' htmlFor={info.id}>
                                        {info.title}
                                    </label>

                                    <div id={info.id} className='mt-1'> 
                                        <input
                                         disabled={edit ? false : true}
                                         className='w-full disabled:bg-slate-200 rounded-md border border-solid border-gray-800  text-black dark:text-white px-2 py-1' 
                                        />
                                    </div>
                                </div>
                            ))}
                             
                        </div>
                    </div> 
                </div>
                
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button onClick={() => setEdit(false)} type="button" className="text-lg font-semibold leading-6 ">
                    Cancel
                    </button>
                    <button
                    type="submit"
                    className="rounded-md dark:bg-dark-color-primary bg-color-primary px-3 py-2 text-lg font-semibold text-white shadow-sm hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Account;