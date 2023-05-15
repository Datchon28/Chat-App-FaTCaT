import React, { createElement, useEffect, useRef, useState } from 'react';
import './ChatContent.custome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleLeft,
    faSpinner,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { text } from '@fortawesome/fontawesome-svg-core';

var images = [
    { id: 'like', unicode: '&#x1f44d;' },
    { id: 'love', unicode: '&#x2764;' },
    { id: 'haha', unicode: '&#x1f923;' },
    { id: 'wow', unicode: '&#x1f62e;' },
    { id: 'sad', unicode: '&#x1f622;' },
    { id: 'angry', unicode: '&#x1f621;' },
];

function ChatContent({ message, roomChoosing, loading }) {
    const currentUser = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));
    const lastMessage = useRef(null);
    const [thisMessage, setThisMessage] = useState('');
    const [reaction, setReaction] = useState(null);
    const [test, setTest] = useState([])
    

    useEffect(() => {
        lastMessage.current?.scrollIntoView({ behavior: 'smooth' });
    }, [message]);

    const handleReaction = (id) => {
        const current = document.getElementById(thisMessage)
        const react = document.getElementById('react')
        const lol = document.createElement('span')
        const reaction = images.filter((item) => item.id === id);
        setReaction(reaction[0].unicode);
        setTest([{ ...test }, { id:'', li: reaction[0].unicode }])
        lol.textContent = 
        // if(current.id !== thisMessage) {
        //     current.classList.add('hidden')
        // }
        console.log(current.id);
    };

    console.log(test);

    return (
        <div
            id="chat"
            className="chat-content h-height-chat-content bg-color-content dark:bg-dark-color-content overflow-hidden bg-scroll"
        >
            <ul className="list-chat mt-3 flex flex-col overflow-hidden overflow-y-scroll h-full scroll-smooth pt-2 pl-2 ">
                <div>
                    {loading === true && (
                        <span className=" text-lg absolute animate-spin left-[48%] dark:text-white text-black">
                            <FontAwesomeIcon icon={faSpinner} />
                        </span>
                    )}
                </div>

                {roomChoosing.length > 0 &&
                    roomChoosing[0].messages.map(
                        (ms, index) =>
                            ms.userName &&
                            ms.text && (
                                <li
                                    key={index}
                                    id="user"
                                    className={`flex items-center ${
                                        currentUser.userName === ms.userName ? 'justify-end' : 'justify-start mb-2'
                                    } text-color-title dark:text-white font-semibold w-full py-1 px-1 mb-1`}
                                >
                                    <div className=" flex  items-end ">
                                        {/* Avatar */}
                                        <div
                                            id={index}
                                            className={`flex items-center ${
                                                currentUser.userName === ms.userName && 'hidden'
                                            }  `}
                                        >
                                            <img
                                                alt="avatar"
                                                src="https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg"
                                                className="mb-2 mr-2 rounded-full w-8"
                                            />
                                        </div>
                                        <div className="flex flex-col items-start">
                                            {/* Username */}
                                            <span
                                                className={`text-sm font-semibold mr-2 px-2 pb-1 ${
                                                    currentUser.userName === ms.userName && 'hidden'
                                                }`}
                                            >
                                                {ms.userName}
                                            </span>

                                            {/* Message */}
                                            <Tippy
                                                placement="left"
                                                render={(attrs) => (
                                                    <div
                                                        id="null"
                                                        className="flex justify-between items-center bg-slate-400 rounded-2xl px-3"
                                                        {...attrs}
                                                    >
                                                        <>
                                                            <button
                                                                className={`px-2 py-1 text-sm rounded-full bg-red-300`}
                                                            >
                                                                {thisMessage === ms._id ? (
                                                                    <span onClick={() => setThisMessage('')}>
                                                                        <FontAwesomeIcon icon={faAngleLeft} />
                                                                    </span>
                                                                ) : (
                                                                    <span>
                                                                        <FontAwesomeIcon icon={faTrash} />
                                                                    </span>
                                                                )}
                                                            </button>
                                                            <button
                                                                id={ms._id}
                                                                onClick={(e) => setThisMessage(e.target.id)}
                                                                className=" px-2 py-1 text-sm rounded-full bg-red-300 ml-2"
                                                            >
                                                                <span id={ms._id}>&#x1f603;</span>
                                                            </button>
                                                            {images.map((emoji, index) => (
                                                                <span
                                                                    id={emoji.id}
                                                                    onClick={(e) => handleReaction(e.target.id)}
                                                                    className={` ${
                                                                        thisMessage === ms._id ? 'block' : 'hidden'
                                                                    } rounded-full cursor-default px-1 py-1 text-base hover:bg-yellow-500`}
                                                                    key={index}
                                                                    dangerouslySetInnerHTML={{ __html: emoji.unicode }}
                                                                />
                                                            ))}
                                                        </>
                                                    </div>
                                                )}
                                                interactive
                                            >
                                                <p  
                                                    id={ms._id}
                                                    className={` relative w-fit rounded-xl max-w-xs py-2 text-center ${
                                                        currentUser.userName === ms.userName
                                                            ? 'bg-color-primary dark:bg-dark-color-primary mr-1 text-color-message '
                                                            : 'dark:bg-dark-color-message bg-color-message  text-black dark:text-white'
                                                    } px-4 py-1  `}
                                                >
                                                    {ms.text && ms.text}
                                                    {}
                                                    
                                                </p>
                                            </Tippy>
                                        </div>
                                    </div>
                                </li>
                            ),
                    )}

                {message.map((ms, index) => (
                    <li
                        key={index}
                        id="user"
                        className={`flex items-center ${
                            currentUser.userName === ms.userName ? 'justify-end' : 'justify-start mb-2'
                        } text-color-title dark:text-white font-semibold w-full py-1 px-1 mb-1`}
                    >
                        <div className=" flex  items-end ">
                            {/* Avatar */}
                            <div
                                id={index}
                                className={`flex items-center ${currentUser.userName === ms.userName && 'hidden'}  `}
                            >
                                <img
                                    alt="avatar"
                                    src="https://i.pinimg.com/564x/f1/43/64/f1436415a2a208043bdef80c73d66b4a.jpg"
                                    className="mb-2 mr-2 rounded-full w-8"
                                />
                            </div>
                            <div className="flex flex-col items-start">
                                {/* Username */}
                                <span
                                    className={`text-sm font-semibold mr-2 px-2 pb-1 ${
                                        currentUser.userName === ms.userName && 'hidden'
                                    }`}
                                >
                                    {ms.userName}
                                </span>

                                {/* Message */}
                                <Tippy
                                    placement="left"
                                    render={(attrs) => (
                                        <div
                                            id="null"
                                            className="flex justify-between items-center bg-slate-400 rounded-2xl px-3"
                                            {...attrs}
                                        >
                                            <>
                                                <button className={`px-2 py-1 text-sm rounded-full bg-red-300`}>
                                                    {thisMessage === ms._id ? (
                                                        <span onClick={() => setThisMessage('')}>
                                                            <FontAwesomeIcon icon={faAngleLeft} />
                                                        </span>
                                                    ) : (
                                                        <span>
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </span>
                                                    )}
                                                </button>
                                                <button
                                                    id={ms._id}
                                                    onClick={(e) => setThisMessage(e.target.id)}
                                                    className=" px-2 py-1 text-sm rounded-full bg-red-300 ml-2"
                                                >
                                                    <span id={ms._id}>&#x1f603;</span>
                                                </button>
                                                {images.map((emoji, index) => (
                                                    <span
                                                        id={emoji.id}
                                                        onClick={(e) => handleReaction(e.target.id)}
                                                        className={` ${
                                                            thisMessage === ms._id ? 'block' : 'hidden'
                                                        } rounded-full cursor-default px-1 py-1 text-base hover:bg-yellow-500`}
                                                        key={index}
                                                        dangerouslySetInnerHTML={{ __html: emoji.unicode }}
                                                    />
                                                ))}
                                            </>
                                        </div>
                                    )}
                                    interactive
                                >
                                    <p
                                        id={ms._id}
                                        className={` relative w-fit rounded-xl max-w-xs py-2 text-center ${
                                            currentUser.userName === ms.userName
                                                ? 'bg-color-primary dark:bg-dark-color-primary mr-1 text-color-message '
                                                : 'dark:bg-dark-color-message bg-color-message  text-black dark:text-white'
                                        } px-4 py-1  `}
                                    >
                                        {ms.text && ms.text}
                                        <span
                                            className=" absolute -bottom-2 text-sm px-1 bg-red-500 right-2 z-10 rounded-full"
                                            dangerouslySetInnerHTML={{ __html: reaction }}
                                        ></span>
                                    </p>
                                </Tippy>
                            </div>
                        </div>
                    </li>
                ))}
                <div ref={lastMessage} />
            </ul>
        </div>
    );
}

export default ChatContent;


// {
//     ms._id === thisMessage ? 
//     <span
    
//     id='react'
//     className={`  absolute -bottom-2 text-sm px-0.5 py-px bg-red-500 right-2 z-10 rounded-full`}
//     dangerouslySetInnerHTML={{ __html: reaction }}
// ></span> : null
// }