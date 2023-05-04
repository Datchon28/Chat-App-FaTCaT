// Libaries Import
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const { createServer } = require('http')
const http = createServer(app)
const { Server } = require('socket.io')

// Enviroment
require('dotenv').config()
const PORT = process.env.PORT || 4000

// File Import
const db = require('./src/db')
const SignUp = require('./src/routes/SignUp')
const Login = require('./src/routes/Login')
const Search = require('./src/routes/Search')

const Rooms = require('./src/routes/Rooms')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

db.connect(process.env.MONGO_URI)

const io = new Server(http, {
  cors: {
    origin: 'https://fatcat-chat-gbug665h9-datchon28.vercel.app/' ||'http://localhost:3000',
    credentials: true
  }
});

app.use('/', (req, res) => {
  res.send('Welcome to Server Chat App Fat Cat')
})

app.use('/signup', SignUp)
app.use('/login', Login)
app.use('/search', Search)
app.use('/rooms', Rooms)

io.on("connection", (socket) => {
  socket.on('user-login', (user) => {
    
  })

  socket.on('chatValue', (value) => {
    io.emit('chat-from-user', value)

  })

  socket.on('typing-action', (data) => {
      io.emit('user-typing', data)
  })

  socket.on('message-user', (data) => {
    console.log(data);
  })

  socket.on('room-choose' , (data) => {
    io.emit('id-room-choosing', (data));
  })

  socket.on('disconnect', () => {
    // console.log('🔥: A user disconnected');
  });
})

   
http.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

module.exports = app;