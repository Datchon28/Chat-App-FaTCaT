import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useChangeTheme from "../../hooks/useChangeTheme";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Setting() {
    const [isDark, changeThemeToggle] = useChangeTheme()

    const toggleChangeTheme = () => {
        changeThemeToggle(!isDark)
    }

    return (
        <div className="dark:text-white px-3 mt-4 transition-transform">
            <div className="flex items-center mb-6">
                <Link to='/chat'>
                    <span className="hover:dark:bg-dark-color-seen px-3 py-2 rounded-full"><FontAwesomeIcon icon={faArrowLeft} /></span>
                </Link>
                <h1 className="text-3xl font-semibold leading-7 ml-3 ">SETTING</h1>
            </div>
            
            <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-lg font-semibold leading-7 ">Notifications</h2>
                    <p className="mt-1 text-base leading-6 ">
                        We'll always let you know about important changes, but you pick what else you want to hear about.
                    </p>

                    <div className="mt-8 space-y-10">
                        <fieldset>
                            <legend className="text-lg font-semibold leading-6 ">By Email</legend>
                            <div className="mt-4 space-y-6">
                                <div className="relative flex gap-x-3 items-center">
                                    <div className="flex h-6 items-center">
                                        <input
                                        id="comments"
                                        name="comments"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-base leading-6">
                                        <label htmlFor="comments" className="font-medium ">
                                            Comments
                                        </label>
                                        <p className="text-sm dark:text-slate-300 text-black">Get notified when someones posts a comment on a posting.</p>
                                    </div>
                                </div>

                                <div className="relative flex gap-x-3 items-center">
                                    <div className="flex h-6 items-center">
                                        <input
                                        id="candidates"
                                        name="candidates"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-base leading-6">
                                        <label htmlFor="candidates" className="font-medium ">
                                            Candidates
                                        </label>
                                        <p className="text-sm dark:text-slate-300 text-black">Get notified when a candidate applies for a job.</p>
                                    </div>
                                </div>

                                <div className="relative flex gap-x-3 items-center">
                                    <div className="flex h-6 items-center">
                                        <input
                                        id="offers"
                                        name="offers"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-base leading-6">
                                        <label htmlFor="offers" className="font-medium ">
                                            Offers
                                        </label>
                                        <p className="text-sm dark:text-slate-300 text-black">Get notified when a candidate accepts or rejects an offer.</p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <div>
                                <span className=" font-semibold">
                                    Change Theme
                                </span>

                                <div className="flex items-center mt-3">
                                        <label  className="relative inline-flex items-center cursor-pointer ">
                                            <input type="checkbox" value="" defaultChecked={isDark ? true : false} className="sr-only peer" />
                                            <div  onClick={toggleChangeTheme}  className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 outline-none"></div>
                                        </label>

                                        <span className=" ml-2 text-base">Dark Mode: {isDark ? "On" : 'Off'}</span>
                                    </div>  
                            </div>
                        </fieldset>
                        
                    </div>
                </div>
        </div>
    );
}

export default Setting;