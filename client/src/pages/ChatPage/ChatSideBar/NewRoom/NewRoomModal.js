import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../../../components/Modal/Modal";
import { useState } from "react";

function NewRoomModal({ onClick, createNewRoom, onChangeRoomName, roomName, onChangeMember, member, AddMemberBtn, list, handleDeleteMem }) {
    
    return (
        <Modal maxWidth={'max-w-modal-new-room'} maxHeight={'max-h-modal-new-room'}>
            <div className='bg-color-sidebar dark:bg-dark-color-sidebar  shadow-lg shadow-slate-500 rounded-md px-4 py-3 w-full h-full border border-solid border-slate-500'> 
                <div className="info-room flex flex-col">
                    <label className="flex flex-col mt-3">
                        <span className=" ml-1">Room Name</span>
                        <input className="mt-1 pl-2 h-8 rounded-md text-black" onChange={onChangeRoomName} value={roomName} placeholder="Name Your Room"/>
                    </label>

                    <label className="flex flex-col mt-3">
                        <span className=" ml-1">Add People</span>
                        <div className='flex w-full justify-between items-center mt-1'>
                            <input className=" w-11/12 mt-1 pl-2 h-8 rounded-md text-black pr-8" onChange={onChangeMember} value={member} placeholder="Add Some People" />
                            
                            <button className=" ml-4 bg-color-primary dark:bg-dark-color-primary text-white px-2.5 py-1.5 rounded-md" onClick={AddMemberBtn}>
                                <span className=" text-sm"><FontAwesomeIcon icon={faPlus} /></span>
                            </button>
                        </div>
                    </label>
                </div>

                <div className="list-member-add mt-6 border-t border-solid">
                    <h3 className=" ml-1">Add Member</h3>
                    <ul className="flex items-center flex-wrap">
                        {
                            list.map((li, index) => (
                                <li id={li} key={index} className=" ml-2 w-fit bg-slate-500 px-1 h-9 flex items-center justify-between rounded-md">
                                    <span id={li} className=" text-lg">{li}</span>
                                    <button id={li} onClick={(e) => handleDeleteMem(e.target.id)} className=" text-sm ml-1 px-1.5 ">
                                        <span id={li} className="text-lg text-center text-black font-bold w-full h-full">x</span> 
                                    </button>,
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="btn-control absolute bottom-0 right-0 mb-3">
                    <button onClick={createNewRoom} className="cancle px-3 py-2 mr-2 rounded-md bg-color-primary dark:bg-dark-color-primary text-white dark:text-black hover:bg-sky-500 transition-colors">Create</button>
                    <button onClick={onClick} className='confirm px-3 py-2 rounded-md'>Cancle</button>
                </div>
            </div>
            

        </Modal>
        
    );
}

export default NewRoomModal;



