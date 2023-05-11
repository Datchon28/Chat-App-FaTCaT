import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

function Account() {
    return (
        <div className=' mt-4 dark:text-white px-3'>
            <form>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10">
                        <h2 className=" text-lg font-semibold leading-7 ">Account</h2>
                        
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
                            </div>
                        </div>

                        {/* Infomation User */}
                        <div>
                            <div className=''>
                                <label>
                                    Username
                                </label>
                                <div>
                                    <input />
                                </div>
                            </div>

                            <div>
                                <label>
                                    Email
                                </label>
                                <div>
                                    <input />
                                </div>
                            </div>

                            <div>
                                <label>
                                    First Name
                                </label>
                                <div>
                                    <input />
                                </div>
                            </div>

                            <div>
                                <label>
                                    Last Name
                                </label>
                                <div>
                                    <input />
                                </div>
                            </div>
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