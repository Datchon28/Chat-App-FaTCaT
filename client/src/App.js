import {BrowserRouter, Routes, Route} from "react-router-dom"
import { io } from "socket.io-client"
import { createContext } from "react"

import Home from "./pages/Home/Home"
import ChatPage from './pages/ChatPage'
import SignUp from "./pages/Home/SignUp/SignUp"
import ChatWindow from "./pages/ChatPage/ChatWindow/ChatWindow"
import Account from "./pages/Account/Account"
import Setting from "./pages/Setting/Setting"

const ApiSocket = process.env.REACT_APP_SERVER_SOCKETIO
const Api = process.env.REACT_APP_API
export const ApiServer = createContext()

const socket = io('https://fatcat-chat-socketio.onrender.com', { })

function App() {

  return (
    <BrowserRouter>
      <div className="main max-h-screen h-full overflow-hidden">
        <ApiServer.Provider value={Api}>
            <Routes>
                <Route path="/" element={<Home socket={socket}/>}></Route>
                <Route path="/signup" element={<SignUp socket={socket}/>}></Route>
                <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
                <Route path="*" element={<div></div>}/>
                <Route path="/chat/detail/:id" element={<ChatPage><ChatWindow socket={socket} /></ChatPage>}></Route>
                <Route path="/account" element={<ChatPage><Account /></ChatPage>}></Route>
                <Route path="/setting" element={<ChatPage><Setting /></ChatPage>}></Route>
              </Routes>
        </ApiServer.Provider>
      </div>
    </BrowserRouter>
    
  );
}

export default App;