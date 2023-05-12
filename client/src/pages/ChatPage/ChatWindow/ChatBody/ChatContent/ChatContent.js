import { useEffect, useRef } from "react";
import './ChatContent.custome.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function ChatContent({ message, roomChoosing, loading }) {
    const currentUser = JSON.parse(localStorage.getItem('user')) ||  JSON.parse(sessionStorage.getItem('user'))
    const lastMessage = useRef(null)
    
    useEffect(() => {
        lastMessage.current?.scrollIntoView({ behavior: 'smooth' })
    },[message])

    return (
        <div id="chat" className='chat-content h-height-chat-content bg-color-content dark:bg-dark-color-content overflow-hidden bg-scroll'>
             <ul className='list-chat mt-3 flex flex-col overflow-hidden overflow-y-scroll h-full scroll-smooth pt-2 pl-2 '>
                <div>
                    {loading === true && 
                    <span className=' text-lg absolute animate-spin left-[48%] dark:text-white text-black'><FontAwesomeIcon icon={faSpinner} /></span>}
                </div> 
                
                {roomChoosing.length > 0 && roomChoosing[0].messages.map((ms, index) => (      
                    ms.userName && ms.text &&
                        <li key={index} id="user" className={`flex items-center ${currentUser.userName === ms.userName ? 'justify-end': 'justify-start mb-2'} text-color-title dark:text-white font-semibold w-full py-1 px-1`} >
                            <div className=" flex  items-end ">
                                <div id={index} className={`flex items-center ${currentUser.userName === ms.userName && 'hidden'}  `}>
                                    <img alt="avatar" src='https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg' className='mb-2 mr-2 rounded-full w-8' />
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className={`text-sm font-semibold mr-2 px-2 pb-1 ${currentUser.userName === ms.userName && 'hidden'}`} >{ms.userName}</span>
                                    <span className={`w-fit rounded-xl max-w-xs py-2 text-center ${currentUser.userName === ms.userName ? 'bg-color-primary dark:bg-dark-color-primary mr-1 text-color-message ' : 'dark:bg-dark-color-message bg-color-message  text-black dark:text-white'} px-4 py-1  `}>
                                        {ms.text && ms.text}
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))
                
                }   
                
                {
                    message.map((ms, index) => (
                        <li key={index} id="user" className={`flex items-center ${currentUser.userName === ms.userName ? 'justify-end': 'justify-start mb-2'} text-color-title dark:text-white font-semibold w-full py-1 px-1`} >
                            <div className=" flex  items-end ">
                                <div id={index} className={`flex items-center ${currentUser.userName === ms.userName && 'hidden'}  `}>
                                    <img alt="avatar" src='https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg' className='mb-2 mr-2 rounded-full w-8' />
                                </div>
                                <div className="flex flex-col items-start">
                                    <span className={`text-sm font-semibold mr-2 px-2 pb-1 ${currentUser.userName === ms.userName && 'hidden'}`} >{ms.userName}</span>
                                    <span className={`w-fit rounded-xl max-w-xs py-2 text-center ${currentUser.userName === ms.userName ? 'bg-color-primary dark:bg-dark-color-primary mr-1 text-color-message ' : 'dark:bg-dark-color-message bg-color-message  text-black dark:text-white'} px-4 py-1  `}>
                                        {ms.text && ms.text}
                                    </span>
                                </div>
                            </div>
                        </li>
                    ))
                }
                <div ref={lastMessage} />
                
            </ul>
        </div>
    );
}

export default ChatContent;