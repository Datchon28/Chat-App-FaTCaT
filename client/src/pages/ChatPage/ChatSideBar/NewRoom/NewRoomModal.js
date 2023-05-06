import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function NewRoomModal({ onClick, createNewRoom, onChangeRoomName, roomName, onChangeMember, member }) {
  
    return (
        <div className="modal fixed top-0 left-0 w-full h-full z-30 ">
            <div className='modal2 bg-color-sidebar  shadow-lg shadow-slate-500 rounded-md px-4 py-3 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 max-w-modal-new-room w-full max-h-60 h-full'> 
                <div className="relative w-full h-full">
                    <button className="absolute right-0 px-2 py-1 ">
                        <span className=" hover:text-black"><FontAwesomeIcon icon={faClose} /></span>
                    </button>

                    <div className="info-room flex flex-col">
                        <label className="flex flex-col mt-3">
                            <span>Room Name</span>
                            <input className="mt-1 pl-2 h-8 rounded-md text-black" onChange={onChangeRoomName} value={roomName} placeholder="Name Your Room"/>
                        </label>

                        <label className="flex flex-col mt-3">
                            <span>Add People</span>
                            <input className="mt-1 pl-2 h-8 rounded-md text-black" onChange={onChangeMember} value={member} placeholder="Add Some People" />
                        </label>
                    </div>

                    <div className="btn-control absolute bottom-0 right-0">
                        <button onClick={createNewRoom} className="cancle px-3 py-2 mr-2 rounded-md bg-sky-600 hover:bg-sky-500 transition-colors">Create</button>
                        <button onClick={onClick} className='confirm px-3 py-2 rounded-md'>Cancle</button>
                    </div>
                </div>
            </div>
        </div>
    
    );
}

export default NewRoomModal;