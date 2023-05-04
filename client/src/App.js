import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/Home/Home"
import ChatPage from './pages/ChatPage'
import { io } from "socket.io-client"
import SignUp from "./pages/Home/SignUp/SignUp"

const socket = io('http://localhost:5000', {
  withCredentials: true
})

function App() {
  const user = JSON.parse(localStorage.getItem('user')) ||  JSON.parse(sessionStorage.getItem('user'))

  return (
    <BrowserRouter>
        <div className="">
          <Routes>
            <Route path="/" element={<Home socket={socket}/>}></Route>
            <Route path="/chat" element={user ? <ChatPage socket={socket}/> : <Navigate to='/' />}></Route>
            <Route path="/signup" element={<SignUp socket={socket} />}></Route>
          </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;