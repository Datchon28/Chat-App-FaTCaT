import ChatSideBar from "./ChatSideBar/ChatSideBar";
import { Navigate } from "react-router-dom";

function ChatPage({ socket, children }) {
    const user = JSON.parse(localStorage.getItem('user')) ||  JSON.parse(sessionStorage.getItem('user'))

    return (
       <>
        {user ? 
            <div className='wrapper flex justify-between'>
                <div className={` max-sm:w-full dark:bg-dark-color-sidebar `}>
                    <ChatSideBar socket={socket} />
                </div>
                {children ? 
                    <div className="flex-1 bg-white dark:bg-dark-color-content max-sm:absolute left-0 top-0 right-0 bottom-0
                    ">
                        {children}
                    </div>
                    : 
                    <div className=" flex-1 bg-white dark:bg-dark-color-content text-center relative max-sm:hidden -z-10 ">
                        <span className=" hover:animate-bounce absolute top-1/2 left-1/2 text-3xl -translate-x-1/2 -translate-y-1/2 dark:text-slate-300">Welcome to Fat Cat <br></br>Please select any text message</span>
                    </div>
                }
            </div>
        : <Navigate to='/' />}
       </>
    );
}


export default ChatPage;