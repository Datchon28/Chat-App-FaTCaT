import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faArrowLeft, faBell, faBellSlash, faFile, faImage, faLink, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const listOption = [
    {
        id:'1',
        title: 'Information about the chat',
        option_detail: [
            {
                id:'',
                title: ''
            }
        ]
    },
    {
        id:'2',
        title: 'Customize chat',
        option_detail: [
            {
                id:'',
                title: ''
            }
        ]
    },
    {
        id:'3',
        title: 'Media files, files and links',
        option_detail: [
            {
                id:'1',
                title: 'Media files'
            },
            {
                id:'2',
                title: 'Files'
            },
            {
                id:'3',
                title: 'Links'
            },
            
        ]
    },
    {
        id:'4',
        title: 'Privacy and support',
        option_detail: [
            {
                id:'',
                title: ''
            }
        ]
    },    

]

function SideBarChatRoom({ data, BackToChatContent }) {
    const [alert, setAlert] = useState(true)
    const [searchMessage, setSearchMessage] = useState(false)
    const [allMember, setAllMemeber] = useState(false)

    const [openList, setOpenList] = useState(null)

    console.log(openList);


    const handleAlert = () => {
        setAlert(!alert)
    }

    const handleSearchMessage = () => {
        setSearchMessage(!searchMessage)
    }

    return ( 
        <>
        {data.map((info, index) => (
            <div className={` max-sm:w-full  extra px-2 w-80 bg-color-content h-screen dark:bg-dark-color-content text-color-title dark:text-white flex flex-col items-center`} key={index}>
                <div className="flex flex-col items-center w-full">
                    <div className=" w-full relative">
                        <span onClick={BackToChatContent} className=" hidden max-sm:block absolute top-4 left-4 px-3 py-2 -ml-3 hover:dark:bg-dark-color-seen rounded-full"><FontAwesomeIcon icon={faArrowLeft} /></span>
                        <img className=" w-24 rounded-full object-cover h-24 mx-auto mt-4" alt="avatar" src="https://cdn.pixabay.com/photo/2022/04/20/01/23/wedding-7144049__480.jpg" />
                    </div>

                    <h2 className="name-user my-2">{info.roomName}</h2>
                    
                    <div className="flex justify-between items-start mt-2 w-full px-2">
                        <div className=" cursor-pointer text-sm mx-1 flex flex-col items-center justify-center">
                            <button className="w-9 h-9 text-white mb-1 bg-slate-700 dark:bg-dark-color-message rounded-full"><FontAwesomeIcon icon={faUser} /></button>
                            <span className="text-center">Thanh vien</span>
                           
                        </div>

                        <div className=" cursor-pointer text-sm mx-1 flex flex-col items-center justify-center" onClick={handleAlert}>
                            <button className='w-9 h-9 text-white mb-1 bg-slate-700 dark:bg-dark-color-message rounded-full'><FontAwesomeIcon icon={alert ? faBell : faBellSlash} /></button>
                            <span className=" text-center">Notice: {alert ? 'ON' : 'OFF'}</span>
                        </div>

                        <div className=" cursor-pointer text-sm mx-1 flex flex-col items-center justify-center" onClick={handleSearchMessage}>
                            <button  className="w-9 h-9 text-white mb-1 bg-slate-700 dark:bg-dark-color-message rounded-full"><FontAwesomeIcon icon={faSearch} /></button>
                            <span className=" text-center">Tim Kiem</span>
                        </div>
                    </div>

                    <div className={`w-full ${searchMessage ? 'h-7' : 'h-0'} mt-3 mb-3`}>
                        <input className={`${searchMessage === false ? 'w-0 h-0' : 'w-full h-full'} rounded-md transition-all text-black px-2 bg-color-sidebar `} placeholder="Search Messages" />
                    </div>
                </div>

                <div className="list-option w-full text-md ">
                    <ul>
                        {
                            listOption.map((list, index) => (
                                <li key={index} className="flex flex-col my-2 py- px-2"> 
                                    <div id={list.id} onClick={(e) => setOpenList(e.target.id)} className="flex items-center justify-between">
                                        <span id={list.id}>{list.title} </span>
                                        <span id={list.id} ><FontAwesomeIcon icon={faAngleUp} /></span>
                                    </div>

                                    
                                    <div className={`${list.id !== openList ? 'h-0 overflow-hidden' : 'h-fit'} opacity-100 transition-all detail-item flex flex-col mt-1`}>
                                        {list.option_detail.map((item, index) => (
                                        <div key={index} id={item.id} className="flex items-center my-1">
                                            {/* <span className="mr-3 w-5 text-base"><FontAwesomeIcon icon={faImage} /></span> */}
                                            <span>{item.title}</span>
                                        </div>
                                        ))}
                                    </div>
                                    
                                    
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>

            </div>
        ))}
        </>
    );
}

export default SideBarChatRoom;
