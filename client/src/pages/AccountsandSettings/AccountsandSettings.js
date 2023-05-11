import { useState } from "react";
import Accounts from "./Accounts/Accounts";
import Settings from "./Settings/Settings";


function AccountsandSettings() {
    const [chooseTab, setChooseTab] = useState(false)
    

    return (
        <div className=' dark:text-white'>
            <nav className="flex justify-around mt-6">
                <span onClick={() => setChooseTab(false)} className=" px-6 pt-3 pb-4 mx-5 text-xl dark:bg-red-600 '">Account</span>
                <span onClick={() => setChooseTab(true)} className=" px-6 pt-3 pb-4 mx-5 text-xl dark:bg-red-600 '">Setting</span>
            </nav>

            <div className="content max-h-screen overflow-y-hidden">
                <div className=" mt-10 dark:text-white px-8">
                    {chooseTab ? <Settings /> : <Accounts />}
                </div>
                    
            </div>
        </div>
    );
}

export default AccountsandSettings;