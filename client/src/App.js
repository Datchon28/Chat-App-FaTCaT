import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/Home/Home"
import ChatPage from './pages/ChatPage'
import { io } from "socket.io-client"
import SignUp from "./pages/Home/SignUp/SignUp"

const socket = io(String(process.env.REACT_APP_SOCKET_API), { })

function App() {
  
  return (
    <BrowserRouter>
        <div className="">
          <Routes>
            <Route path="/" element={<Home socket={socket}/>}></Route>
            <Route path="/chat" element={<ChatPage socket={socket}/>}></Route>
            <Route path="/signup" element={<SignUp socket={socket} />}></Route>
          </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;