import {BrowserRouter, Routes, Route} from "react-router-dom"
import { io } from "socket.io-client"
import { createContext } from "react"

import Home from "./pages/Home/Home"
import ChatPage from './pages/ChatPage'
import SignUp from "./pages/Home/SignUp/SignUp"
import ChatWindow from "./pages/ChatPage/ChatWindow/ChatWindow"
import AccountsandSettings from "./pages/AccountsandSettings/AccountsandSettings"

const Api = process.env.REACT_APP_SERVER_API
export const ApiServer = createContext()

const socket = io(Api, { })

function App() {

  return (
    <BrowserRouter>
      <div className="main max-h-screen h-full overflow-hidden">
        <ApiServer.Provider value={Api}>
            <Routes>
                <Route index path="/" element={<Home socket={socket}/>}></Route>
                <Route index path="/signup" element={<SignUp socket={socket}/>}></Route>
                <Route index path="/chat" element={<ChatPage />}></Route>
                <Route path="*" element={<div></div>}/>
            </Routes>

            <ChatPage>
              <Routes>
                <Route index path="/chat/detail/:id" element={<ChatWindow socket={socket} />}></Route>
                <Route index path="/accounts&settings" element={<AccountsandSettings />}></Route>
                <Route path="*" element={<div></div>}/>

              </Routes>
            </ChatPage>
        </ApiServer.Provider>
      </div>
    </BrowserRouter>
    
  );
}

export default App;