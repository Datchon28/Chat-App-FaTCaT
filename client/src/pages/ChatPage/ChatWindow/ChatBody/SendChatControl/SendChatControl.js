import { faFaceSmile, faImage } from '@fortawesome/free-regular-svg-icons'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from 'axios'
import { useState } from 'react';


function SendChatControl({ socket, roomChoosing, Api }) {
    const [text, setText] = useState('')
    const [typing, setTyping] = useState(false)

    
    const user = JSON.parse(localStorage.getItem('user')) ||  JSON.parse(sessionStorage.getItem('user'))
    const userName = user.userName  
    
    const ChatCurrentListenChange = (e) => {
        const value = e.target.value
        if(value.length > 0) {
            socket.emit('typing-action', { userName, typing :true })
        }else {
            socket.emit('typing-action', { userName, typing :false })
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
                id: roomChoosing[0]._id,
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
        <form className={`chat-writer text-color-title dark:text-white ${roomChoosing.length <= 0 ? 'w-full' : 'w-full'} h-20 bg-color-content dark:bg-dark-color-content px-8 border-t border-solid border-color-chat-window dark:border-dark-color-chat-window`} onSubmit={handleSendChat}>
               <div className='w-full flex justify-between items-center max-h-10 h-full mt-5 focus:bg-slate-500 border-solid'>
                    <div className="mr-3 flex items-center" >
                        <span className='px-2 py-2 cursor-pointer hover:bg-sky-600 rounded-md'>
                            <FontAwesomeIcon icon={faImage} />
                        </span>

                        <span className='px-2 py-2 cursor-pointer hover:bg-sky-600 rounded-md'>
                            <FontAwesomeIcon icon={faFaceSmile} />
                        </span>

                    </div>
                    
                    <div className=" w-4/5 h-full">
                        <input type="text" className="bg-color-sidebar dark:bg-dark-color-sidebar dark:outline-none outline outline-1 outline-slate-300 pr-8 rounded-lg pl-3 w-full h-full bg-color-input placeholder:text-slate-500" placeholder='Send Message' value={text} onChange={ChatCurrentListenChange} />
                    </div>

                    <div className='flex justify-between items-center ml-4'>
                        <button className=" text-white hover:brightness-125 bg-sky-500 px-3 py-padding-send-btn rounded-md text-center flex items-center justify-between">
                            <span className='pr-1'>Send</span>
                            <span><FontAwesomeIcon icon={faPaperPlane} /></span>
                        </button>
                    </div>
               </div>
        </form>
    );
}

export default SendChatControl;

 