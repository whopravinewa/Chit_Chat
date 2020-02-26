// let us suppose chit wants to talk to chat(lets suppose another person)
const socket = io('http://localhost:3000')

const chitMessageForm = document.getElementById('send-container')
const chitMessageContainer = document.getElementById('message-container')
let chitMessage = document.getElementById('message-input')

chitMessageForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = chitMessage.value
    console.log(message)
    appendMessageLeft('You : ' + message)
    socket.emit('chit-message', message)
    chitMessage.value = ''
})

function appendMessageRight(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageElement.align = 'right'
    chitMessageContainer.append(messageElement)
}

function appendMessageLeft(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageElement.align = 'left'
    chitMessageContainer.append(messageElement)
}


socket.on('chit-message', message => {
    console.log(message)
    appendMessageRight('Chat : ' + message)
})