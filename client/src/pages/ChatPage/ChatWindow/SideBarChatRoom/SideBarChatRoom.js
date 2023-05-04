import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faBell, faFile, faImage, faLink, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SideBarChatRoom({ data }) {
    return ( 
        <>
        {data.map((info, index) => (
            <div className="extra px-2 w-80 bg-color-sidebar h-screen text-white flex flex-col items-center" key={index}>
                <div className="flex flex-col items-center mb-6 w-full">
                    <img className=" w-24 rounded-full object-cover h-24 mx-auto mt-4" alt="avatar" src="https://cdn.pixabay.com/photo/2022/04/20/01/23/wedding-7144049__480.jpg" />
                    <h2 className="name-user my-2">{info.roomName}</h2>
                    
                    <div className="flex justify-between items-start mt-2 w-full px-2">
                        <div className=" cursor-pointer text-sm mx-1 flex flex-col items-center justify-center">
                            <button className="py-1 px-2 bg-color-content rounded-full"><FontAwesomeIcon icon={faUser} /></button>
                            <span className="text-center">Thanh vien</span>
                           
                        </div>

                        <div className=" cursor-pointer text-sm mx-1 flex flex-col items-center justify-center">
                            <button className="py-1 px-2 bg-color-content rounded-full"><FontAwesomeIcon icon={faBell} /></button>
                            <span className=" text-center">Off Thong bao</span>
                        </div>

                        <div className=" cursor-pointer text-sm mx-1 flex flex-col items-center justify-center">
                            <button className="py-1 px-2 bg-color-content rounded-full"><FontAwesomeIcon icon={faSearch} /></button>
                            <span className=" text-center">Tim Kiem</span>
                        </div>
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