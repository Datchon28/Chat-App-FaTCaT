import { useState, useEffect, useContext } from "react";
import ChatSideBar from "./ChatSideBar/ChatSideBar";
import ChatWindow from "./ChatWindow/ChatWindow";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { ApiServer } from "../../App";

function ChatPage({ socket }) {
    const Api = useContext(ApiServer)
    const user = JSON.parse(localStorage.getItem('user')) ||  JSON.parse(sessionStorage.getItem('user'))
    
    const [roomChoosing, setRoomChoosing] = useState([])

    useEffect(() => {
       const fetchData = async() => {
           try {
                await socket.on('id-room-choosing' , (idRoom) => {
                    axios.get(`${Api}/rooms/room_choose?id=${idRoom.id}`)
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