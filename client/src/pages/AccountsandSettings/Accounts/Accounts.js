
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

function Accounts() {
    return (
        <div className=' mt-4'>
            <form>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10">
                        <h2 className=" text-lg font-semibold leading-7 ">Profile</h2>
                        <p className="mt-1 text-lg leading-6 ">
                            This information will be displayed publicly so be careful what you share.
                        </p>

                        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="username" className="block text-lg font-medium leading-6 ">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 dark:bg-dark-color-sidebar focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            autoComplete="username"
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1  placeholder: focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="janesmith"
                                        />
                                    </div>
                                </div>
                            </div>

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
                    </div>

                    <div className="border-b border-gray-900/10  text-white pb-12">
                        <h2 className="text-lg font-semibold leading-7 ">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 ">Use a permanent address where you can receive mail.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-base font-medium leading-6 ">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                    type="text"
                                    name="first-name"
                                    placeholder='First name'
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 dark:bg-dark-color-sidebar placeholder: sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-base font-medium leading-6 ">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 dark:bg-dark-color-sidebar placeholder: sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-base font-medium leading-6 ">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 dark:bg-dark-color-sidebar placeholder: sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-base font-medium leading-6 ">
                                    Country
                                </label>
                                <div className="mt-2">
                                    <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="  block w-full mr-0 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 dark:bg-dark-color-sidebar sm:text-base sm:leading-6"
                                    >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-3">
                                <label htmlFor="street-address" className="block text-base font-medium leading-6 ">
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                    type="text"
                                    name="street-address"
                                    id="street-address"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 dark:bg-dark-color-sidebar placeholder: sm:text-base sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className=" col-span-3">
                                <label htmlFor="city" className="block text-base font-medium leading-6 ">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 dark:bg-dark-color-sidebar placeholder: sm:text-base sm:leading-6"
                                    />
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

export default Accounts;