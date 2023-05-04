import { useEffect, useState } from "react";
import Search from "./Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import NewRoomModal from "./NewRoom/NewRoomModal";
import ListChat from "./ListChat/ListChat";

function ChatSideBar({ socket, listChat }) {
    const currentUser = JSON.parse(localStorage.getItem('user')) ||  JSON.parse(sessionStorage.getItem('user'))
    const navigate = useNavigate()
    // OpenRoom Toggle
    const [openCreateNewRoom, setOpenCreateNewRoom] = useState(false)

    // Check Create Room
    const [createRoomSucess, setCreateRoomSucess] = useState(false)

    // Info Room
    const [roomName, setRoomName] = useState('')
    const [member, setMember] = useState('')
    const [room, setRoom] = useState([])

    // Handle Function
    const handleOpenCreateRoom = () => {
        setOpenCreateNewRoom(!openCreateNewRoom)
    }

    const handleSignOut = () => {
        localStorage.removeItem('user')
        sessionStorage.removeItem('user')
        navigate('/')
    }

    useEffect(() => {
        axios.get('http://localhost:5000/rooms/detail')
        .then(room => {
            const allRoom = room.data
            const Filter =  allRoom.filter((item, index) => {
                const people =  item.people.map(o => o.person.userName) 
               return item.admin.id === currentUser._id || String(people) === currentUser.userName
            })
            setRoom(Filter);
        })

    }, [createRoomSucess])


    const handleCreateNewRoom = async() => {
        setCreateRoomSucess(true)
        await axios.post('http://localhost:5000/rooms/add-room', {
            roomName: roomName,
            admin: {
                id: currentUser._id ,
                userName: currentUser.userName,
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
            },
            person: {
                id: '123',
                userName: member,
            }, 
        })
        .then(data => {
            data && setCreateRoomSucess(true)
        })
        setCreateRoomSucess(false)
        setOpenCreateNewRoom(false)
        
    }
    
    // const handleUpImg = (e) => {
    //     console.log(e.target.value);
    //     const img = document.querySelector('#avatar')
    //     img.onload = () => {
    //         URL.revokeObjectURL(img.src)
    //     }
    //     img.src = URL.createObjectURL(this.files[0])
    // }
    const ChangeImage = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            const output = document.querySelector('#avatar')
            output.src = reader.result
        }
        reader.readAsDataURL(e.target.files[0])
    }


    
    return (
        <div className='wrapper flex justify-center flex-col text-white bg-color-sidebar w-60 h-screen fixed top-0 py-5 px-4 ' >
           <div  className=" mb-3 mt-9 h-24">
                <h1 className=" text-3xl font-bold mb-3">Chat</h1>
           
                <Search />
           </div>
            
            <div className='chat-list flex-1 h-height-parent-list-chat-sidebar'>
                <div className="h-12">
                    <button className="w-full rounded-md text-center px-1 py-2 bg-sky-600 mt-2 cursor-pointer" onClick={handleOpenCreateRoom}>New Room</button>
                </div>
                
               {openCreateNewRoom &&  
                    <div>
                        <NewRoomModal openingRoom={openCreateNewRoom} 
                        infoRoom={
                            <div className="info-room flex flex-col">
                            <label className="flex flex-col mt-3">
                                <span>Room Name</span>
                                <input className="mt-1 pl-2 h-8 rounded-md text-black" onChange={e => setRoomName(e.target.value)} value={roomName} placeholder="Name Your Room"/>
                            </label>

                            <label className="flex flex-col mt-3">
                                <span>Add People</span>
                                <input className="mt-1 pl-2 h-8 rounded-md text-black" onChange={e => setMember(e.target.value)} value={member} placeholder="Add Some People" />
                            </label>
                        </div>
                        }

                        button={ 
                            <div className="btn-control absolute bottom-0 right-0">
                                <button onClick={handleCreateNewRoom} className="cancle px-3 py-2 mr-2 rounded-md bg-sky-600 hover:bg-sky-500 transition-colors">Create</button>
                                <button onClick={() => setOpenCreateNewRoom(false)} className='confirm px-3 py-2 rounded-md'>Cancle</button>
                            </div>
                        } />
                        
                    </div>
                }
                

                <ListChat socket={socket} room={room} />
            </div>

            <div className="h-28">
                <div className='user flex items-center mb-4 '>
                    <img id="avatar" src="https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg" className='w-12 mr-3 rounded-full object-cover' />
                    <span className=' text-lg font-bold '>{currentUser && `${currentUser.firstName}` + ' ' + `${currentUser.lastName}`}</span>
                </div>
                    <input onChange={ChangeImage} type='file'  className='w-12 mr-3 rounded-full object-cover' />

                <div className='user flex items-center'>
                    <button className=' py-2 px-8 ml-1 text-lg font-bold' onClick={handleSignOut}>
                        <span className="mr-2 text-xl"><FontAwesomeIcon icon={faSignOut} /></span>
                        <span>Sign Out</span>
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default ChatSideBar;