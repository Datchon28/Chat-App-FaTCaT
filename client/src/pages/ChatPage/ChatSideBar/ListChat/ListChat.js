import { useEffect, useState } from 'react'
import '../ListChat/Customize.css'
import { useNavigate, useParams } from 'react-router-dom'

function ListChat({ room ,socket }) {
    const [idRoomChoosing, setIdRoomChoosing] = useState(undefined)
    const [roomChoosing, setRoomChoosing] = useState(false)
    const [seenChat, setSeenChat] = useState(false)

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
        <div id="all-chat" className="max-h-height-child-list-chat-sidebar h-full overflow-y-scroll mt-5">
            <ul className='list-none flex justify-center items-center flex-col -mt-3'>
                {room.map((list, index) => (
                <li id={list._id} onClick={(e) => handleOpenRoom(e.target)} key={index} className={`flex flex-col items-start justify-between my-3 px-3 py-2 w-full rounded-xl ${idRoomChoosing === list._id  || param.id === list._id  ? 'bg-color-seen dark:bg-dark-color-seen transition-colors' : 'bg-color-none-seen dark:bg-dark-color-none-seen'} max-sm:bg-color-none-seen max-sm:dark:bg-dark-color-none-seen font-semibold cursor-pointer`}>
                    
                    <div className='flex items-center pt-1 pb-1' id={list._id}> 
                        <img alt='img' id={list._id} src="https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg" className='w-10 mr-3 rounded-full' />
                        <span id={list._id} className=' font-bold' >{list.roomName}</span>
                        
                    </div>
                    
                    <div id={list._id}>
                        {list.messages.length > 0 ? <span id={list._id} className='w-full py-2 text-sm text-color-lastmessage ml-1'>
                            {list.messages[list.messages.length -1].userName} : { list.messages[list.messages.length -1].text}
                            </span> : 

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