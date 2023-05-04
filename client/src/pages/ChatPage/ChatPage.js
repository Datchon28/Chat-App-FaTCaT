import { useState, useEffect, createContext } from "react";
import ChatSideBar from "./ChatSideBar/ChatSideBar";
import ChatWindow from "./ChatWindow/ChatWindow";
import axios from "axios";
import { redirect } from "react-router-dom";

export const FullList = createContext()

function ChatPage({ socket }) {
    // const user = JSON.parse(localStorage.getItem('user')) ||  JSON.parse(sessionStorage.getItem('user'))/

    const [listChatAndRoom , setListChatAndRoom] = useState([])
    useEffect(() => {
        axios.get('https://chat-app-fatcat.onrender.com/rooms/detail')
            .then(data => {
                setListChatAndRoom(data.data);
            })
       
    }, [])

    return (
        <FullList.Provider value={listChatAndRoom}>
            <div className='wrapper'>
                <ChatSideBar socket={socket} listChat={listChatAndRoom} />
                <ChatWindow socket={socket} />
                
            </div>
        </FullList.Provider>
    );
}


export default ChatPage;