import Navbar from "./NavBar/Navbar";
import ChatBody from "./ChatBody/ChatBody";
import SideBarChatRoom from "./SideBarChatRoom/SideBarChatRoom";


function ChatWindow({ socket, roomChoosing, ApiUrl }) {

    return ( 
        <div className="main flex">
            <div className='wrapper flex-1 bg-color-sidebar text-white ml-60 h-screen overflow-hidden border border-solid border-color-chat-window' >
                <Navbar listChatAndRoom={roomChoosing} />
                <ChatBody listChatAndRoom={roomChoosing} socket={socket} ApiUrl={ApiUrl} />
            </div>

            <SideBarChatRoom data={roomChoosing} />

        </div>
    );
}

export default ChatWindow;