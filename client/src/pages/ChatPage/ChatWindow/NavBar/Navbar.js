import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Navbar({ roomChoosing }) {
    return (
        <div className="nav-bar max-h-navbar h-full w-full text-color-title dark:text-white">
            {roomChoosing.map((list, index) => (
                <div key={index} className="user-info border-b border-solid border-color-chat-window dark:border-dark-color-chat-window max-h-navbar h-full w-full flex items-center justify-between px-5 py-3 bg-color-sidebar dark:bg-dark-color-sidebar " >
                    <img src="https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg" className=' max-w-xs w-16 h-16 object-cover rounded-full' />
                    <div className="user-name">
                        <span className="font-bold">{list.roomName}</span>
                    </div>
                    <div className="setting px-1 py-2">
                        <span><FontAwesomeIcon icon={faEllipsisVertical} /></span>
                    </div>
            </div>
            ))}
        </div>
    );
}

export default Navbar;