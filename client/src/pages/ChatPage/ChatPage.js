import { useState, useEffect } from "react";
import ChatSideBar from "./ChatSideBar/ChatSideBar";
import ChatWindow from "./ChatWindow/ChatWindow";
import axios from "axios";
import { Navigate } from "react-router-dom";

function ChatPage({ socket }) {
    const user = JSON.parse(localStorage.getItem('user')) ||  JSON.parse(sessionStorage.getItem('user'))

    const [listChatAndRoom , setListChatAndRoom] = useState([])
    useEffect(() => {
        axios.get('https://chat-app-fatcat.onrender.com/rooms/detail')
            .then(data => {
                setListChatAndRoom(data.data);
        })
       
    }, [user])

    return (
       <>
        {user ? 
            <div className='wrapper'>
                <ChatSideBar socket={socket} listChat={listChatAndRoom} />
                <ChatWindow socket={socket} />
                
            </div>
        : <Navigate to='/' />}
       </>
    );
}


export default ChatPage;