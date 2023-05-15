import { faAngleLeft, faInfoCircle, faPhoneVolume, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  NavLink } from "react-router-dom";


function Navbar({ roomChoosing, openInfoRoom }) {

    return (
        <div className="nav-bar max-h-navbar h-full w-full text-color-title dark:text-white flex items-center border-b border-solid border-color-chat-window dark:border-dark-color-chat-window">
            <div className=" mx-3">
                <NavLink to='/chat'>
                    <span className=" hover:dark:bg-dark-color-seen hover:bg-slate-400 animate-bounce px-2 py-1 rounded-full transition-colors"><FontAwesomeIcon icon={faAngleLeft} /></span>
                </NavLink>
            </div>
            {roomChoosing.map((list, index) => (
                <div key={index} className="user-info max-h-navbar h-full w-full flex items-center justify-between px-5 py-3 bg-color-sidebar dark:bg-dark-color-sidebar " >

                    <img src="https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg" className=' max-w-xs w-16 h-16 object-cover rounded-full max-sm:w-10 max-sm:h-10' />
                    <div className="user-name" onClick={openInfoRoom}>
                        <span className="font-bold">{list.roomName}</span>
                    </div>
                    <div className="setting px-1 text-primary dark:text-dark-color-primary flex justify-between items-center">
                        <span className="cursor-pointer hover:animate-pulse px-2 py-2"><FontAwesomeIcon icon={faPhoneVolume} /></span>
                        <span className="cursor-pointer hover:animate-pulse px-2 py-2 mx-3"><FontAwesomeIcon icon={faVideo} /></span>
                        <span onClick={openInfoRoom} className="cursor-pointer hover:animate-pulse px-2 py-2 max-sm:hidden"><FontAwesomeIcon icon={faInfoCircle} /></span>
                    </div>
            </div>
            ))}
        </div>
    );
}

export default Navbar;