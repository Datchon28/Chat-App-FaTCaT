import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faBell, faBellSlash, faFile, faImage, faLink, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function SideBarChatRoom({ data }) {
    const [alert, setAlert] = useState(true)
    const [searchMessage, setSearchMessage] = useState(false)
    const [allMember, setAllMemeber] = useState(false)


    const handleAlert = () => {
        setAlert(!alert)
    }

    const handleSearchMessage = () => {
        setSearchMessage(!searchMessage)
    }

    return ( 
        <>
        {data.map((info, index) => (
            <div className="extra px-2 w-80 bg-color-content h-screen text-white flex flex-col items-center" key={index}>
                <div className="flex flex-col items-center w-full">
                    <img className=" w-24 rounded-full object-cover h-24 mx-auto mt-4" alt="avatar" src="https://cdn.pixabay.com/photo/2022/04/20/01/23/wedding-7144049__480.jpg" />
                    <h2 className="name-user my-2">{info.roomName}</h2>
                    
                    <div className="flex justify-between items-start mt-2 w-full px-2">
                        <div className=" cursor-pointer text-sm mx-1 flex flex-col items-center justify-center">
                            <button className="w-9 h-9 mb-1 bg-slate-700 rounded-full"><FontAwesomeIcon icon={faUser} /></button>
                            <span className="text-center">Thanh vien</span>
                           
                        </div>

                        <div className=" cursor-pointer text-sm mx-1 flex flex-col items-center justify-center" onClick={handleAlert}>
                            <button className='w-9 h-9 mb-1 bg-slate-700 rounded-full'><FontAwesomeIcon icon={alert ? faBell : faBellSlash} /></button>
                            <span className=" text-center">Notice: {alert ? 'ON' : 'OFF'}</span>
                        </div>

                        <div className=" cursor-pointer text-sm mx-1 flex flex-col items-center justify-center" onClick={handleSearchMessage}>
                            <button  className="w-9 h-9 mb-1 bg-slate-700 rounded-full"><FontAwesomeIcon icon={faSearch} /></button>
                            <span className=" text-center">Tim Kiem</span>
                        </div>
                    </div>

                    <div className=' w-full h-7 mt-3 mb-3'>
                        <input className={`${searchMessage === false ? 'w-0 h-0' : 'w-full h-full'} rounded-md transition-all text-black px-2`} placeholder="Search Messages" />
                    </div>
                </div>

                <div className="list-option w-full text-md ">
                    <ul>
                        <li className="flex justify-between items-center my-2 py-2 bg-cyan-700 px-2"> 
                            <span>Information about the chat </span>
                            <span><FontAwesomeIcon icon={faArrowUp} /></span>
                        </li>
                        <li className="flex justify-between items-center my-2 py-2 bg-cyan-700 px-2"> 
                            <span>Customize chat</span>
                            <span><FontAwesomeIcon icon={faArrowUp} /></span>
                        </li>
                        <li className="flex justify-between items-center my-2 py-2 bg-cyan-700 px-2"> 
                            <span>Media files, files and links</span>
                            <span><FontAwesomeIcon icon={faArrowUp} /></span>
                        </li>

                        <div className="detail-item flex flex-col h-24 ">
                                <div className="flex items-center my-1">
                                    <span className="mr-3 w-5 text-base"><FontAwesomeIcon icon={faImage} /></span>
                                    <span>Media files</span>
                                </div>

                                <div className="flex items-center my-1">
                                    <span className="mr-3 w-5 text-base"><FontAwesomeIcon icon={faFile} /></span>
                                    <span>Files</span>
                                </div>

                                <div className="flex items-center my-1">
                                    <span className="mr-3 w-5 text-base"><FontAwesomeIcon icon={faLink} /></span>
                                    <span>Links</span>
                                </div>
                        </div>

                        <li className="flex justify-between items-center my-2 py-2 bg-cyan-700 px-2">
                            <span>Privacy and support</span>
                            <span><FontAwesomeIcon icon={faArrowUp} /></span>
                        </li>
                    </ul>
                </div>

            </div>
        ))}
        </>
    );
}

export default SideBarChatRoom;