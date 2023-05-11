import { useState, useEffect, useContext } from "react";
import axios from "axios";

import Navbar from "./NavBar/Navbar";
import ChatBody from "./ChatBody/ChatBody";
import SideBarChatRoom from "./SideBarChatRoom/SideBarChatRoom";
import { ApiServer } from "../../../App";
import { useLocation, useParams } from "react-router-dom";


function ChatWindow({ socket }) {
    const Api = useContext(ApiServer)
    const [roomChoosing, setRoomChoosing] = useState([])
    const param = useParams()
    const location = useLocation()

    useEffect(() => {
        const fetchData = async() => {
            try {
                await axios.get(`${Api}/rooms/room_choose?id=${param.id}`)
                .then(result => {
                    setRoomChoosing(result.data);
                })

            } catch (error) {
                 console.log(error);
            }
         }
        fetchData()  
    },[socket, param])

    return ( 
        <div className="main flex">
            <div className={`wrapper flex-1 bg-color-sidebar dark:bg-dark-color-sidebar text-white h-screen overflow-hidden border border-b-0 border-solid border-color-chat-window dark:border-dark-color-chat-window
             max-sm:ml-0 max-sm:w-full 
            `}>
                <Navbar roomChoosing={roomChoosing} />
                <ChatBody roomChoosing={roomChoosing} socket={socket} />
            </div>

            <SideBarChatRoom data={roomChoosing} />
        </div>
    );
}

export default ChatWindow;