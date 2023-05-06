import { faEllipsis, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Navbar({ listChatAndRoom }) {
    return (
        <div className="nav-bar">
        {listChatAndRoom.map((list, index) => (
            <div key={index} className="user-info border border-solid border-color-chat-window mr-80 max-h-navbar h-full w-chat-window-width flex items-center justify-between px-5 py-3 bg-color-content fixed top-0 right-0 w" >
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