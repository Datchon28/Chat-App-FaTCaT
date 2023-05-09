import Navbar from "./NavBar/Navbar";
import ChatBody from "./ChatBody/ChatBody";
import SideBarChatRoom from "./SideBarChatRoom/SideBarChatRoom";


function ChatWindow({ socket, roomChoosing }) {

    return ( 
        <div className="main flex">
            <div className='wrapper flex-1 bg-color-sidebar dark:bg-dark-color-sidebar text-white ml-60 h-screen overflow-hidden border border-b-0 border-solid border-color-chat-window dark:border-dark-color-chat-window' >
                <Navbar roomChoosing={roomChoosing} />
                <ChatBody roomChoosing={roomChoosing} socket={socket} />
            </div>

            <SideBarChatRoom data={roomChoosing} />

        </div>
    );
}

export default ChatWindow;