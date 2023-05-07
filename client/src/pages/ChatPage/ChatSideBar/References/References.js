import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function References({ onClick }) {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 w-full h-4/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 bg-color-sidebar border border-slate-500 shadow-md shadow-slate-500 max-w-lg max-h-96 w-full h-full">
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
                        <li className=" bg-list-references hover:bg-slate-600 cursor-pointer px-3 py-3 mb-1">
                            <span>Change theme color</span>
                          
                        </li>
                        <li className=" bg-list-references hover:bg-slate-600 cursor-pointer px-3 py-3 mb-1">General</li>
                        <li className=" bg-list-references hover:bg-slate-600 cursor-pointer px-3 py-3 mb-1">Active Status</li>
                        <li className=" bg-list-references hover:bg-slate-600 cursor-pointer px-3 py-3 mb-1">Language</li>
                        <li className=" bg-list-references hover:bg-slate-600 cursor-pointer px-3 py-3 mb-1">Theme Color</li>
                        <li className=" bg-list-references hover:bg-slate-600 cursor-pointer px-3 py-3">Option</li>
                   </ul>

                   <div className=" w-1/2">
                        <span>COntentntntn</span>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default References;