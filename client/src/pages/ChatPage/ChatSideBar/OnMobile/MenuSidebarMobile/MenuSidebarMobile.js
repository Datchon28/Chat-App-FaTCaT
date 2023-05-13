import { faSignOut, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import References from "./Reference";
import { useNavigate } from "react-router-dom";

const listMenu = [
    {
        title: 'All Chat',
        to: '/chat'
    },
    {
        title:'Setting',
        to: '/setting'
    }
]

function MenuSidebarMobile({ closeMenu, openMenu ,info }) {
    const [openSetting, setOpenSetting] = useState(false)
    const navigate = useNavigate()

    const handleSignOut = () => {
        localStorage.removeItem('user')
        sessionStorage.removeItem('user')
        navigate('/')
    }

    return (
            <div className={`hidden max-sm:flex w-full h-full top-0 left-0 absolute ${openMenu ? 'translate-x-0' : '-translate-x-full'} transition-all duration-200 flex justify-between`}>
                <div className={` bg-color-sidebar w-4/6  `}>
                   <div className="flex justify-between items-center px-2 pt-5 max-w-xs w-full flex-wrap">
                        <div className="user flex items-center">
                            <img alt="avatar" src='https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg' 
                                className=" w-12 h-full rounded-full object-cover mr-1"
                            />
                            <h2 className="text-base font-semibold">{info.firstName} {info.lastName}</h2>
                        </div>

                        <div onClick={() => setOpenSetting(!openSetting)} className="user-detail px-3 py-2 rounded-full hover:bg-color-message text-black">
                            <span className=""><FontAwesomeIcon icon={faPencil} /></span>
                        </div>      
                   </div>

                   <div className="flex flex-col h-5/6 justify-between items-center mt-6">
                        <ul className="w-full">
                            {listMenu.map((list, index) => (
                                <Link to={list.to} onClick={closeMenu} key={index}>
                                    <li className=" w-full px-3 py-3 mb-4 text-center font-semibold text-lg bg-color-message">{list.title}</li>
                                </Link>
                                
                            ))}
                            
                        </ul>

                        <button className='px-3 py-4' onClick={handleSignOut}>
                            <span className=" text-center pt-1 mr-2 text-2xl"><FontAwesomeIcon icon={faSignOut} /></span>
                            
                        </button>
                    </div>

                   
                </div>

                <div className={`absolute bg-red-400 w-full h-full mt-6 ${openSetting ? 'translate-y-0' : 'translate-y-full'} transition-all duration-300 `}>
                    <References close={() => setOpenSetting(!openSetting)} user={info} />
                </div>

                <div onClick={closeMenu} className={`bg-modal flex-1 ${openMenu ? 'opacity-100' : 'opacity-0'} duration-700 transition-opacity`}></div>
                
            </div>
       
    );
}

export default MenuSidebarMobile;