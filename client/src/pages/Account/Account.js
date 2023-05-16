import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

function Account() {
    const ChangeImage = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            const output = document.querySelector('#avatar')
            output.src = reader.result
        }
        reader.readAsDataURL(e.target.files[0])
    }

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
                                    <button
                                    type="button"
                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 dark:bg-dark-color-sidebar hover:bg-gray-50 dark:text-white"
                                    >
                                    Change
                                    </button>
                                </div>
                                {/* <input onChange={ChangeImage} type='file'  className='w-12 mr-3 rounded-full object-cover' /> */}
                            </div>
                        </div>

                        {/* Infomation User */}
                        <div className='flex flex-col justify-between items-center mt-7'>
                            <h2 className='mb-3 text-lg font-semibold'>Your Infomation</h2>
                            {infomationUser.map((info, index) => (
                                <div className='w-full px-1 mb-3'>
                                    <label className=''>
                                        {info.title}
                                    </label>
                                    <div>
                                        <input className='w-full rounded-md text-white dark:text-black px-2 py-1' />
                                    </div>
                                </div>
                            ))}
                             
                        </div>
                    </div> 
                </div>

                

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-lg font-semibold leading-6 ">
                    Cancel
                    </button>
                    <button
                    type="submit"
                    className="rounded-md dark:bg-dark-color-primary px-3 py-2 text-lg font-semibold text-white shadow-sm hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Account;