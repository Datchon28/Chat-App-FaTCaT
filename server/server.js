// Libaries Import
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const { createServer } = require('http')
const http = createServer(app)

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

// APi
app.use('/signup', SignUp)
app.use('/login', Login)
app.use('/search', Search)
app.use('/rooms', Rooms)

app.use('/', (req, res) => {
  res.send('Welcome to Server Chat App Fat Cat')
})

http.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

module.exports = app;