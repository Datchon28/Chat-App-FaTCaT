import {  faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../../../components/Modal/Modal";
import { useState } from "react";
import useChangeTheme from "../../../../hooks/useChangeTheme";

const listReferences = [
    {   
        id: 'general',
        title: 'General',
        option: 'General',
    },
    {   
        id: 'status',
        title: 'Status',
        option: 'Status',
    },
    {   
        id: 'language',
        title: 'Language',
        option: 'Language',
    },
    {   
        id: 'color',
        title: 'Color',
        option: 'Color',
    },
]

function References({ onClick }) {
    const [option, setOption] = useState(listReferences)
    const [darkMode, setDarkMode] = useState("dark")

    const [isDark, changeThemeToggle] = useChangeTheme()
    
    const handleTakeOption = (item) => {
        const takeItem = listReferences.filter((i, index) => i.id === item)
        setOption(takeItem)
    }

    const toggleChangeTheme = () => {
       changeThemeToggle(!isDark)
    }
    

    
    return (
        <Modal maxWidth={'max-w-lg'} maxHeight={'max-h-96'}>
            <div className="bg-color-sidebar dark:bg-dark-color-sidebar border border-slate-500 shadow-md shadow-slate-500 ">
                <div className=' flex justify-between items-center w-full h-1/6'>
                    <h2 className="text-lg pl-3">References</h2>

                    <button className="px-4 py-2" onClick={onClick}>
                        <span className="text-lg">
                            <FontAwesomeIcon icon={faClose}  />
                        </span>
                    </button>

                
                </div>

                <div className="w-full h-5/6 flex justify-between ">
                    <ul className=" w-1/2 flex flex-col justify-between border-r border-solid pr-2">
                        {
                            listReferences.map((item, index) => (
                                <li key={index} id={item.id} onClick={(e) => handleTakeOption(e.target.id)} className=" bg-list-references hover:bg-slate-600 cursor-pointer px-3 py-3 mb-1">
                                    {item.title}
                                </li>
                            ))
                        }
                        
                    </ul>

                    <div className=" w-1/2">
                       {
                        option.map((item, index) => (
                            <li key={index} className=" list-none cursor-pointer px-3 mb-1 w-full h-full">
                               <span className="text-md font-semibold">{item.option}</span>

                                {
                                    item.option === 'Color' && 
                                    <div className="flex items-center mt-3">
                                        <label  className="relative inline-flex items-center cursor-pointer ">
                                            <input type="checkbox" value="" defaultChecked={isDark ? true : false} className="sr-only peer" />
                                            <div  onClick={toggleChangeTheme}  className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 outline-none"></div>
                                        </label>

                                        <span className=" ml-2 font-semibold">Dark Mode: {isDark ? "On" : 'Off'}</span>
                                    </div>  
                                }
                            </li>

                        ))
                       }

                       
                        
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default References;