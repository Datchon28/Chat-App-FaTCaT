import { useContext, useEffect, useState } from "react";
import Search from "./Search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlus, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios";
import NewRoomModal from "./NewRoom/NewRoomModal";
import ListChat from "./ListChat/ListChat";
import DropMenu from "../../../components/DropMenu/DropMenu";
import { ApiServer } from "../../../App";
import MenuSidebarMobile from "./OnMobile/MenuSidebarMobile/MenuSidebarMobile";
import Tippy from "@tippyjs/react";

function ChatSideBar({ socket }) {
    const Api = useContext(ApiServer)
    const navigate = useNavigate()
    const location = useLocation()
    // User
    const currentUser = JSON.parse(localStorage.getItem('user')) ||  JSON.parse(sessionStorage.getItem('user'))
    

    // OpenRoom Toggle
    const [openChatRoom, setOpenChatRoom] = useState(false)
    const [openMenuMobile, setOpenMenuMobile] = useState(false)
    
    const [openCreateNewRoom, setOpenCreateNewRoom] = useState(false)
    const [menuUser, setMenuUser] = useState(false)

    // Check Create Room
    const [createRoomSucess, setCreateRoomSucess] = useState(false)
    const [list, setList] = useState([])

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
        axios.get(`${Api}/rooms/detail?admin=${currentUser._id}&person=${currentUser.userName}` )
        .then(room => {
            setRoom(room.data);
        })

    }, [Api, currentUser._id, currentUser.userName, createRoomSucess])


    const AddMemberBtn = () => { 
        setList([...list, member])
        setMember('')
    }

    useEffect(() => {
        if(location.pathname === '/chat') {
            setOpenChatRoom(false)
        }else {
            setOpenChatRoom(true)
        }
    }, [location])


    const handleCreateNewRoom = async() => {
        setCreateRoomSucess(true)
        await axios.post(`${Api}/rooms/add-room`, {
            roomName: roomName,
            admin: {
                id: currentUser._id ,
                userName: currentUser.userName,
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
            },
            person: list.map(data => (
                {
                    person: {
                        id: '123',
                        userName: data,
                    }
                }
            )) 
        })
        .then(data => {
            data && setCreateRoomSucess(true)
        })
        setCreateRoomSucess(false)
        setOpenCreateNewRoom(false)
    }

    const handleDeleteMem = (item) => {
        const after = list.filter((af, index) => af !== item)
        setList(after);
    };
    

    return (
        <div className={`wrapper relative flex justify-center flex-col bg-color-sidebar dark:bg-dark-color-sidebar text-color-title dark:text-white w-60 h-screen py-5 px-4 max-sm:w-full translate-x-0
           transition-transform duration-300 ${openChatRoom && 'transition-transform max-sm:-translate-x-full duration-300'}
        `} >
           <div  className=" mb-1 mt-9 max-sm:mt-0 h-32 pt-10 max-sm:pt-6">
                <div className="flex justify-between items-center mb-2">
                    <span onClick={() => setOpenMenuMobile(!openMenuMobile)} className=" hidden max-sm:inline-block max-sm:px-3 max-sm:py-1.5 max-sm:text-base">
                        <FontAwesomeIcon icon={faList} />
                    </span>
                    <h1 className="text-2xl font-semibold max-sm:pl-2 max-sm:pr-4 max-sm:pb-2">Chat</h1>
                    <Tippy content='Create New Room' placement="right">
                        <span onClick={handleOpenCreateRoom} className=" py-2 px-3 rounded-lg cursor-pointer transition-colors max-sm:inline-block max-sm:px-3 max-sm:py-1.5 max-sm:text-base hover:dark:bg-dark-color-primary max-sm:rounded-full">
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </Tippy>
                </div>
                <Search />
           </div>
           
            <MenuSidebarMobile info={currentUser} openMenu={openMenuMobile} closeMenu={() => setOpenMenuMobile(!openMenuMobile)}  />
           
            
            <div className='chat-list flex-1 h-height-parent-list-chat-sidebar mt-4 max-sm:mt-0'>
                
                {/* <div className="h-12">
                    <button className="w-full rounded-md text-center px-1 py-2 bg-color-primary dark:bg-dark-color-primary text-white mt-2 cursor-pointer hover:brightness-110 transition-colors duration-100" onClick={handleOpenCreateRoom}>New Room</button>
                </div> */}
                
               {openCreateNewRoom &&  
                    <div>
                        <NewRoomModal openingRoom={openCreateNewRoom}
                            // Room Name 
                            onChangeRoomName={e => setRoomName(e.target.value)}
                            roomName={roomName}
                            // Add Member
                            onChangeMember={e => setMember(e.target.value)}
                            member={member}
                            AddMemberBtn={AddMemberBtn}
                            list={list}

                            // OpenRoom
                            onClick={() => setOpenCreateNewRoom(false)}
                            // Create button
                            createNewRoom={handleCreateNewRoom}

                            handleDeleteMem={handleDeleteMem}
                        />
                    </div>
                }
                
                <ListChat socket={socket} room={room} />
                
            </div>

            <div className="h-14 flex items-start justify-between mb-2 max-sm:hidden">
                    <DropMenu content={
                        <>
                            <li onClick={() => navigate('/account')} className="cursor-pointer bg-color-none-seen dark:bg-dark-color-none-seen text-center hover:bg-sky-600 dark:hover:bg-sky-600 transition-colors hover:text-white px-10 py-3 my-1 font-semibold">Account</li>
                            <li onClick={() => navigate('/setting')} className="cursor-pointer bg-color-none-seen dark:bg-dark-color-none-seen text-center hover:bg-sky-600 dark:hover:bg-sky-600 transition-colors hover:text-white px-10 py-3 my-1 font-semibold">Setting</li>
                            <li className="cursor-pointer bg-color-none-seen dark:bg-dark-color-none-seen text-center hover:bg-sky-600 dark:hover:bg-sky-600 transition-colors hover:text-white px-4 py-2 my-1 font-semibold rounded-b-md">
                                <button className='' onClick={handleSignOut}>
                                    <span className=" text-center pt-1 mr-2 text-lg"><FontAwesomeIcon icon={faSignOut} /></span>
                                    Sign Out
                                </button>
                            </li>
                        </>
                    }>
                        <div className='user flex items-center cursor-default' onClick={() => setMenuUser(!menuUser)}>
                            <img id="avatar" src="https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg" className='w-12 mr-3 rounded-full object-cover' />
                            <span className=' text-lg font-bold '>{currentUser && currentUser.userName}</span>
                        </div>
                    </DropMenu>
                </div>
        </div>
    );
}

export default ChatSideBar;