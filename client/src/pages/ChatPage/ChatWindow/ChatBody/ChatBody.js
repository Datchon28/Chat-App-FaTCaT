import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChatContent from "../ChatContent/ChatContent";
import { useState,useEffect, useContext } from "react";
// import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile, faImage } from '@fortawesome/free-regular-svg-icons'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
import { ApiServer } from "../../../../App";

function ChatBody({ socket, listChatAndRoom }) {
    const Api = useContext(ApiServer)
    const [text, setText] = useState('')
    const [message,  setMessage] = useState([]) 
    const [typing, setTyping] = useState(false)

    const user = JSON.parse(localStorage.getItem('user')) ||  JSON.parse(sessionStorage.getItem('user'))
    const userName = user.userName


    useEffect(() => {
        socket.on('chat-from-user', (data) => {
            setMessage([...message,data])
       })  
    
    }, [socket, message])

   
    const ChatCurrentListenChange = (e) => {
        const value = e.target.value
        if(value.length > 0) {
            setTyping(true)
            socket.emit('typing-action', { userName })
        }else {
            setTyping(false)
            
        }
        setText(value)
    }

    const handleSendChat = async (e) => {
        e.preventDefault()
        if(text.trim()) {
            socket.emit('chatValue', {
                text,
                userName
            })
            setText('')

            await axios.put(`${Api}/rooms/message`, 
            {   
                id: listChatAndRoom[0]._id,
                userName: userName,
                message: text
            })
            .then(result => {
               
            })
            .catch(error => {
                console.log(error);
            })
        }
        setTyping(false)
    }

    return (
        <>  
            <ChatContent Api={Api} isTyping={typing} idRoomChoosing={listChatAndRoom.length > 0 && listChatAndRoom[0]._id} socket={socket} message={message}  />
            
            <form className={`chat-writer ${listChatAndRoom.length <= 0 ? 'w-full' : 'w-full'} flex justify-between items-center  h-20 bg-color-content px-8 border border-solid border-color-chat-window`} onSubmit={handleSendChat}>
                <div className="w-full h-1/2 relative">
                    <input type="text" className=" rounded-lg pl-3 pr-44 w-full h-full bg-color-input" value={text} onChange={ChatCurrentListenChange} />

                    <div className='flex justify-between items-center absolute -right-1 top-0 pl-8 h-full'>
                        <div className="mr-3" >
                            <span className='px-2 py-2 cursor-pointer hover:bg-slate-500'>
                                <FontAwesomeIcon icon={faImage} />
                            </span>

                            <span className='px-2 py-2 cursor-pointer hover:bg-slate-500'>
                                <FontAwesomeIcon icon={faFaceSmile} />
                            </span>

                        </div>
                        
                        <button className=" hover:brightness-125 bg-sky-600 px-3 py-padding-send-btn rounded-r-lg text-center">
                            <span className='pr-1'>Send</span>
                            <span><FontAwesomeIcon icon={faPaperPlane} /></span>
                        </button>
                </div>
                
                </div>

                
            </form>
        </>
    );
}

export default ChatBody;