import { useEffect, useState } from "react";
import Navbar from "./NavBar/Navbar";
import ChatBody from "./ChatBody/ChatBody";
import axios from "axios";

import SideBarChatRoom from "./SideBarChatRoom/SideBarChatRoom";


function ChatWindow({ socket }) {
    const [roomChoosing, setRoomChoosing] = useState([])

    useEffect(() => {
       const fetchData = async() => {
           try {
                await socket.on('id-room-choosing' , (idRoom) => {
                    axios.post('http://localhost:5000/rooms/room_choose' , {
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
        <div className="main flex">
            <div className='wrapper flex-1 bg-color-sidebar text-white ml-60 h-screen overflow-hidden' >
                <Navbar listChatAndRoom={roomChoosing} />
                <ChatBody listChatAndRoom={roomChoosing} socket={socket} />
            </div>

            <SideBarChatRoom data={roomChoosing} />

        </div>

        
        
    );
}

export default ChatWindow;