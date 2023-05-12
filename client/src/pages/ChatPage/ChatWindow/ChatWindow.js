import { useState, useEffect, useContext } from "react";
import axios from "axios";

import Navbar from "./NavBar/Navbar";
import ChatBody from "./ChatBody/ChatBody";
import SideBarChatRoom from "./SideBarChatRoom/SideBarChatRoom";
import { ApiServer } from "../../../App";
import { useParams } from "react-router-dom";


function ChatWindow({ socket }) {
    const Api = useContext(ApiServer)
    const [roomChoosing, setRoomChoosing] = useState([])
    const param = useParams()
    const [loading, setLoading] = useState(false)
    const [openInfoRoom, setOpenInfoRoom] = useState(false)

    useEffect(() => {
        if(!param.id) {
            return
        }
        
        const fetchData = async() => {
            setLoading(true)
            try {
                await axios.get(`${Api}/rooms/room_choose?id=${param.id}`)
                .then(result => {
                    setRoomChoosing(result.data);
                })

            } catch (error) {
                 console.log(error);
            }
            setLoading(false)
        }
        fetchData()  
    },[socket, param])

    const handleopenInfoRoom = () => {
        setOpenInfoRoom(!openInfoRoom)
    }

    console.log(openInfoRoom);

    return ( 
        <div className="main flex">
            <div className={`wrapper flex-1 bg-color-sidebar dark:bg-dark-color-sidebar text-white h-screen overflow-hidden border border-b-0 border-solid border-color-chat-window dark:border-dark-color-chat-window
             max-sm:ml-0 max-sm:w-full  
            `}>
                <Navbar roomChoosing={roomChoosing} openInfoRoom={handleopenInfoRoom} />
                <ChatBody roomChoosing={roomChoosing} socket={socket} loading={loading} />
            </div>

            <div className={`${openInfoRoom ? 'max-sm:w-full translate-x-0' : 'max-sm:w-0 max-sm:translate-x-full overflow-hidden'} transition-all duration-300 `}>
                <SideBarChatRoom data={roomChoosing} BackToChatContent={() => setOpenInfoRoom(!openInfoRoom)} />
            </div>
        </div>
    );
}

export default ChatWindow;