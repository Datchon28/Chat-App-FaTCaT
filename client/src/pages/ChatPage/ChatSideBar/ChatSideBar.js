import { useEffect, useState } from "react";
import Search from "./Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import NewRoomModal from "./NewRoom/NewRoomModal";
import ListChat from "./ListChat/ListChat";
import DropMenu from "../../../components/DropMenu/DropMenu";
import References from "./References/References";

function ChatSideBar({ socket }) {
    const currentUser = JSON.parse(localStorage.getItem('user')) ||  JSON.parse(sessionStorage.getItem('user'))
    const navigate = useNavigate()
    // OpenRoom Toggle
    const [openCreateNewRoom, setOpenCreateNewRoom] = useState(false)
    const [menuUser, setMenuUser] = useState(false)
    const [openReferences, setOpenReferences] = useState(false)

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
        axios.get('https://api-server-fatcat-chat.vercel.app/rooms/detail')
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
        await axios.post('https://api-server-fatcat-chat.vercel.app/rooms/add-room', {
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
                <h1 className=" text-3xl font-bold mb-3 px-2">Chat</h1>
                <Search />
           </div>
            
            <div className='chat-list flex-1 h-height-parent-list-chat-sidebar'>
                <div className="h-12">
                    <button className="w-full rounded-md text-center px-1 py-2 bg-sky-600 mt-2 cursor-pointer hover:bg-sky-500 transition-colors duration-100" onClick={handleOpenCreateRoom}>New Room</button>
                </div>
                
               {openCreateNewRoom &&  
                    <div>
                        <NewRoomModal openingRoom={openCreateNewRoom}
                            // Room Name 
                            onChangeRoomName={e => setRoomName(e.target.value)}
                            roomName={roomName}
                            // Add Member
                            onChangeMember={e => setMember(e.target.value)}
                            member={member}

                            // OpenRoom
                            onClick={() => setOpenCreateNewRoom(false)}
                            // Create button
                            createNewRoom={handleCreateNewRoom}
                        />
                    </div>
                }
                <ListChat socket={socket} room={room} />
            </div>

            <div className="h-28">
               <DropMenu content={
                    <ul className=" w-auto h-auto shadow-sm shadow-slate-400 rounded-lg text-md">
                        <li className=" hover:bg-sky-600 transition-colors cursor-pointer bg-color-none-seen text-center px-4 py-3 my-1 font-semibold rounded-t-md" onClick={() => setOpenReferences(!openReferences)}>Preferences</li>
                        <li className=" hover:bg-sky-600 transition-colors cursor-pointer bg-color-none-seen text-center px-4 py-3 my-1 font-semibold">Account & support</li>
                        <li className=" hover:bg-sky-600 transition-colors cursor-pointer bg-color-none-seen text-center px-4 py-3 my-1 font-semibold rounded-b-md">
                            <button className='' onClick={handleSignOut}>
                                <span className=" text-center pt-1 mr-2 text-lg"><FontAwesomeIcon icon={faSignOut} /></span>
                                Sign Out
                            </button>
                        </li>
                        
                    </ul>
               }>
                    <div className='user flex items-center' onClick={() => setMenuUser(!menuUser)}>
                        <img id="avatar" src="https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg" className='w-12 mr-3 rounded-full object-cover' />
                        <span className=' text-lg font-bold '>{currentUser && `${currentUser.firstName}` + ' ' + `${currentUser.lastName}`}</span>
                    </div>
                </DropMenu>

                {openReferences && <References onClick={() => setOpenReferences(!openReferences)} />}

                {/* <input onChange={ChangeImage} type='file'  className='w-12 mr-3 rounded-full object-cover' /> */}
                
            </div>
            
        </div>
    );
}

export default ChatSideBar;