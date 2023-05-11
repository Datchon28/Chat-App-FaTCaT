import { useEffect, useState } from "react";
import ChatSideBar from "./ChatSideBar/ChatSideBar";
import { Navigate, useLocation } from "react-router-dom";

function ChatPage({ socket, children }) {
    const user = JSON.parse(localStorage.getItem('user')) ||  JSON.parse(sessionStorage.getItem('user'))
    const location = useLocation()
    const [openChatRoom, setOpenChatRoom] = useState(false)

    useEffect(() => {
        if(location.pathname === '/chat') {
            setOpenChatRoom(false)
        }else {
            setOpenChatRoom(true)
        }
    }, [location])

    return (
       <>
        {user ? 
            <div className='wrapper flex justify-between'>
                <div className={`${openChatRoom  ? 'max-sm:w-0 overflow-hidden duration-300' : 'max-sm:w-full'} dark:bg-dark-color-sidebar `}>
                    <ChatSideBar socket={socket} />
                </div>
                {children ? 
                    <div className="flex-1 bg-white dark:bg-dark-color-content">
                        {children}
                    </div>
                    : 
                    <div className=" flex-1 bg-white dark:bg-dark-color-content max-sm:hidden">
                        <span>Helo</span>
                    </div>
                }
                
                
            </div>
        : <Navigate to='/' />}
       </>
    );
}


export default ChatPage;