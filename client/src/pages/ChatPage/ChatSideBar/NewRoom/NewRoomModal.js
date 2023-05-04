import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function NewRoomModal({ button, infoRoom }) {
  
    return (
        <div className="modal fixed top-0 left-0 w-full h-full z-30 ">
            <div className='modal2 bg-color-sidebar  shadow-lg shadow-slate-500 rounded-md px-4 py-3 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 max-w-modal-new-room w-full max-h-60 h-full'> 
                <div className="relative w-full h-full">
                    <button className="absolute right-0 px-2 py-1 ">
                        <span className=" hover:text-black"><FontAwesomeIcon icon={faClose} /></span>
                    </button>

                    {infoRoom}

                    {button}
                </div>
            </div>
        </div>
    
    );
}

export default NewRoomModal;