import { useState, useEffect } from "react";
import ChatSideBar from "./ChatSideBar/ChatSideBar";
import ChatWindow from "./ChatWindow/ChatWindow";
import axios from "axios";
import { Navigate } from "react-router-dom";

function ChatPage({ socket }) {
    const user = JSON.parse(localStorage.getItem('user')) ||  JSON.parse(sessionStorage.getItem('user'))
    const [roomChoosing, setRoomChoosing] = useState([])

    useEffect(() => {
       const fetchData = async() => {
           try {
                await socket.on('id-room-choosing' , (idRoom) => {
                    axios.post('https://api-server-fatcat-chat.vercel.app/rooms/room_choose', {
                        id: idRoom.id
                    })
                    .then(result => {
                        setRoomChoosing(result.data);
                    })
                })
           } catch (error) {
                console.log(error);
           }
        }
       fetchData()  
    },[socket])


    return (
       <>
        {user ? 
            <div className='wrapper'>
                <ChatSideBar socket={socket} />
                <ChatWindow socket={socket} roomChoosing={roomChoosing} />
                
            </div>
        : <Navigate to='/' />}
       </>
    );
}


export default ChatPage;