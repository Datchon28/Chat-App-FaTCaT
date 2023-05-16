import { useEffect, useState } from 'react'
import '../ListChat/Customize.css'
import { useNavigate, useParams } from 'react-router-dom'

function ListChat({ room ,socket }) {
    const [idRoomChoosing, setIdRoomChoosing] = useState(undefined)
    const [seenChat, setSeenChat] = useState(false)

    // useEffect(() => {
    //     socket.on('chat-from-user', (data) => {
            
    //     }) 
    // }, [socket])

    const navigate = useNavigate()
    const param = useParams()
    
    const handleOpenRoom = (e) => {
        const id = e.id
        if(id === param.id) {
            return
        }else {
            navigate(`/chat/detail/${id}`)
            setSeenChat(true)
        }
        setIdRoomChoosing(id)
    }

    return (
        <div id="all-chat" className="max-h-height-child-list-chat-sidebar h-full overflow-y-scroll mt-3 pt-3">
            <ul className='list-none flex justify-center items-center flex-col -mt-3'>
                {room.map((list, index) => (
                <li id={list._id} onClick={(e) => handleOpenRoom(e.target)} key={index} className={`flex  items-center justify-between my-2 px-3 pb-3 pt-5 w-full rounded-xl ${idRoomChoosing === list._id  || param.id === list._id  ? 'bg-color-seen dark:bg-dark-color-seen transition-colors' : 'bg-color-none-seen dark:bg-dark-color-none-seen'} max-sm:bg-color-none-seen max-sm:dark:bg-dark-color-none-seen font-semibold cursor-pointer`}>
                    
                    <div className=' w-1/4 mr-2'>
                        <img alt='img' id={list._id} src="https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg" className='w-full h-full object-cover rounded-full' />
                    </div>
                    
                    <div id={list._id} className='w-full'>
                        <span id={list._id} className=' font-bold' >{list.roomName}</span>
                        {list.messages.length > 0 ? 
                            <div className='w-full flex justify-between items-center'>
                                <span id={list._id} className='w-full py-1 line-clamp-1 text-sm text-color-lastmessage flex-1'>
                                    {list.messages[list.messages.length -1].userName } : { list.messages[list.messages.length -1].text}
                                </span>
                                <span id={list._id} className=' w-12 text-xs pb-1 pt-1 text-color-lastmessage max-sm:text-sm'> {list.messages[list.messages.length -1].createAt.hour} : {list.messages[list.messages.length -1].createAt.minutes}</span>
                            </div> : 

                            <span id={list._id} className='w-full py-2 text-lastmessage-sumary-sidebar text-color-lastmessage ml-1'>The chat has no messages yet</span>
                        }
                    </div>
                </li>
                ))}
            </ul>
            
            {/* <div className='loading'>
                <Modal maxHeight='max-h-32' maxWidth='max-w-xs'>
                    <span className='w-full h-full '>
                        Loadinggggggggg
                    </span>
                </Modal>
            </div> */}
        </div>  
    );
}

export default ListChat;