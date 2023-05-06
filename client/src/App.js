import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/Home/Home"
import ChatPage from './pages/ChatPage'
import { io } from "socket.io-client"
import SignUp from "./pages/Home/SignUp/SignUp"

const ApiUrl = process.env.REACT_APP_SERVER_API
const socket = io(ApiUrl, { })

function App() {
  
  return (
    <BrowserRouter>
        <div className="">
          <Routes>
            <Route path="/" element={<Home socket={socket} ApiUrl={ApiUrl} />}></Route>
            <Route path="/chat" element={<ChatPage socket={socket} ApiUrl={ApiUrl} />}></Route>
            <Route path="/signup" element={<SignUp socket={socket} ApiUrl={ApiUrl} />}></Route>
          </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;