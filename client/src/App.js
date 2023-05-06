import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import ChatPage from './pages/ChatPage'
import { io } from "socket.io-client"
import SignUp from "./pages/Home/SignUp/SignUp"

// const Api = process.env.REACT_APP_SERVER_API

const socket = io('https://chat-app-fatcat.onrender.com', { })

function App() {
  
  return (
    <BrowserRouter>
        <div className="">
          <Routes>
            <Route path="/" element={<Home socket={socket}/>}></Route>
            <Route path="/chat" element={<ChatPage socket={socket}/>}></Route>
            <Route path="/signup" element={<SignUp socket={socket}/>}></Route>
          </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;