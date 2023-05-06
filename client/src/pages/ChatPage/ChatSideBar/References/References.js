import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function References({ onClick }) {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 w-full h-4/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 bg-color-sidebar shadow-sm shadow-slate-500 max-w-lg max-h-96 w-full h-full">
                <div className=' inline-block text-right w-full'>
                    <button className=" px-4 py-2" onClick={onClick}>
                        <span className="text-lg">
                            <FontAwesomeIcon icon={faClose}  />
                        </span>
                    </button>
                </div>

                <ul>
                    <li>
                        <span>Change theme color</span>
                        <button className=" bg-red-600"><span>X</span></button>
                    </li>
                    <li>Option</li>
                    <li>Option</li>
                    <li>Option</li>
                    <li>Option</li>
                    <li>Option</li>
                </ul>
            </div>
        </div>
    );
}

export default References;