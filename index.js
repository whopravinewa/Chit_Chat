console.log("Server listening at port 3000........")

const io = require('socket.io')(3000)

io.on('connection', socket => {
    socket.on('chit-message', message => {
        console.log('Chit :' + message)
        socket.broadcast.emit('chat-message', message)
    })

    socket.on('chat-message', message => {
        console.log('Chat :' + message)
        socket.broadcast.emit('chit-message', message)
    })
})



