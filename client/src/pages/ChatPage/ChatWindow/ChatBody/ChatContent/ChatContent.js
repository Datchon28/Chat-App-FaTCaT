import { useEffect, useRef, useState } from "react";
import './ChatContent.custome.css'
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function ChatContent({ Api, socket, isTyping, message, idRoomChoosing }) {
    const currentUser = JSON.parse(localStorage.getItem('user')) ||  JSON.parse(sessionStorage.getItem('user'))

    const [userTyping, setUserTyping] = useState()
    const [loading, setLoading] = useState(false)

    const lastMessage = useRef(null)

    const [allChat, setAllChat] = useState([])

    useEffect(() => {
        socket.on('user-typing', (ut) => {
            setUserTyping(ut);
        })

        if(!idRoomChoosing) {
            return;
        }

        const fetchData = async() => {
            setLoading(true)
            await axios.get(`${Api}/rooms/get-room-choose?id=${idRoomChoosing}`)
            .then(data => {
                setAllChat(data.data[0].messages);
            })
            setLoading(false)
            
        }
        fetchData()

        // allChat.length > 0 &&  console.log(allChat[allChat.length -1].userName)
        
    },[socket, idRoomChoosing])
    
    useEffect(() => {
        lastMessage.current?.scrollIntoView({ behavior: 'smooth' })
    },[message])

                    
    return (
        <div id="chat" className='chat-content h-height-chat-content bg-color-content dark:bg-dark-color-content overflow-hidden bg-scroll'>
             <ul className='list-chat mt-3 flex flex-col overflow-hidden overflow-y-scroll h-full scroll-smooth pt-2 '>
                <div>
                    {loading === true && 
                    <span className=' text-lg absolute animate-spin left-[48%] dark:text-white text-black'><FontAwesomeIcon icon={faSpinner} /></span>}
                </div> 
                
                    {(allChat.map((ms, index) => (
                            
                        ms.userName && ms.text &&
                            <li key={index} id="user" className={`flex items-center ${currentUser.userName === ms.userName ? 'justify-end': 'justify-start'} text-color-title dark:text-white font-semibold mb-6 w-full py-1 px-1`} >
                                <div className=" flex flex-col items-end ">
                                    <div className={`flex items-center ${currentUser.userName === ms.userName && 'flex-row-reverse '}`}>
                                        <img alt="avatar" src='https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg' className='mb-2 mr-3 rounded-full w-9' />
                                        <span className=" text-sm font-semibold mr-2 ">{ms.userName}</span>
                                    </div>
                                    <span className={` w-fit  rounded-xl max-w-xs py-2 text-center ${currentUser.userName === ms.userName ? 'bg-color-primary dark:bg-dark-color-primary mr-3 text-color-message  ' : 'bg-white text-black ml-3 '} px-4 py-1  `}>
                                        {ms.text && ms.text}
                                    </span>
                                </div>
                            </li>
                        ))) 
                    
                }   

                {
                    message.map((ms, index) => (
                        <li key={index} id="user" className={`flex items-center ${currentUser.userName === ms.userName ? 'justify-end': 'justify-start'} text-color-title dark:text-white font-semibold mb-6 w-full py-1 px-1`} >
                            <div className=" flex flex-col items-end ">
                                <div className={`flex items-center ${currentUser.userName === ms.userName && 'flex-row-reverse '}`}>
                                <img alt="avatar" src='https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg' className='mb-2 mr-3 rounded-full w-9' />
                                <span className=" text-sm font-semibold mr-2 ">{ms.userName}</span>
                                </div>
                                <span className={` w-fit  rounded-xl max-w-xs py-2 text-center ${currentUser.userName === ms.userName ? 'bg-color-primary dark:bg-dark-color-primary mr-3 text-color-message  ' : 'bg-white text-black ml-3 '} px-4 py-1  `}>
                                    {ms.text && ms.text}
                                </span>
                            </div>
                        </li>
                    ))
                }
                <div ref={lastMessage} />
                
            </ul>
            
            
            <div className=" absolute bottom-20 left-istyping ml-3 ">
                {userTyping?.typing === true &&  userTyping && <span>{userTyping.userName} is typing...</span>}
            </div>
        </div>
    );
}

export default ChatContent;