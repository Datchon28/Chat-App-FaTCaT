import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import ChatPage from './pages/ChatPage'
import { io } from "socket.io-client"
import SignUp from "./pages/Home/SignUp/SignUp"
import { createContext } from "react"

const Api = process.env.REACT_APP_SERVER_API
export const ApiServer = createContext()

const socket = io(Api, { })

function App() {

  return (
    <BrowserRouter>
      <div>
        <ApiServer.Provider value={Api}>
          <Routes>
              <Route path="/" element={<Home socket={socket}/>}></Route>
              <Route path="/chat" element={<ChatPage socket={socket}/>}></Route>
              <Route path="/signup" element={<SignUp socket={socket}/>}></Route>
          </Routes>
        </ApiServer.Provider>
      </div>
    </BrowserRouter>
    
  );
}

export default App;