import { useState,useEffect, useContext } from "react";

import ChatContent from "./ChatContent/ChatContent";
import { ApiServer } from "../../../../App";
import SendChatControl from "./SendChatControl/SendChatControl";

function ChatBody({ socket, roomChoosing, loading }) {
    const Api = useContext(ApiServer)
    const [message,  setMessage] = useState([]) 

    useEffect(() => {
        socket.on('chat-from-user', (data) => {
            setMessage([...message,data])
       })  
    
    }, [socket, message])

    return (
        <>  
            <ChatContent message={message} roomChoosing={roomChoosing} loading={loading}  />
            <SendChatControl socket={socket} Api={Api} roomChoosing={roomChoosing} />
            
        </>
    );
}

export default ChatBody;