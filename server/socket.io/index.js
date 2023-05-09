
function socketIo (io) {
    io.on("connection", (socket) => {
        console.log('User connected');
        
        socket.on('chatValue', (value) => {
          io.emit('chat-from-user', value)
      
        })
      
        socket.on('typing-action', (data) => {
            io.emit('user-typing', data)
        })
      
        socket.on('room-choose' , (data) => {
          io.emit('id-room-choosing', (data));
        })
      
        socket.on('disconnect', () => {
          console.log('🔥: A user disconnected');
        });
    })
}

module.exports = { socketIo }