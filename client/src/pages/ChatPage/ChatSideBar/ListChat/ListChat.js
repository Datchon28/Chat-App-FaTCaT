import '../ListChat/Customize.css'


function ListChat({ room,socket }) {

    const handleOpenRoom = (e) => {
        const id = e.id
        socket.emit('room-choose', { id })
    }
    
    return (
        <div id="all-chat" className="max-h-height-child-list-chat-sidebar h-full overflow-y-scroll mt-5">
        <ul className='list-none flex justify-center items-center flex-col -mt-3'>
            {room.map((list, index) => (
            <li  onClick={(e) => handleOpenRoom(e.target)} key={index} className='my-3 w-full rounded-xl bg-color-user-item-in-list font-semibold cursor-pointer'>
                <div className='flex items-center px-3 py-3 ' id={list._id}> 
                    <img alt='img' id={list._id} src="https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg" className='w-11 mr-3 rounded-full'></img>
                    <span id={list._id} >{list.roomName}</span>
                </div>
            </li>
            ))}

            
            
         </ul>
         </div>
    );
}

export default ListChat;