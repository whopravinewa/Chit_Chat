const socketChat = io("http://localhost:3333");
// console.log('i am chat app')
const messageContainer = document.getElementById("message-container");

socketChat.on("chat-message", (message) => {
  console.log(message);
  appendMessageRight("Chit : " + message);
});

const chatMessageForm = document.getElementById("send-container");
// const chatmessageContainer = document.getElementById('message-container')
let chatMessage = document.getElementById("message-input");

chatMessageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = chatMessage.value;
  console.log(message);
  appendMessageLeft("You created message is : " + message);
  socketChat.emit("chat-message", message);
  chatMessage.value = "";
});

function appendMessageRight(message) {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.align = "right";
  messageContainer.append(messageElement);
}

function appendMessageLeft(message) {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.align = "left";
  messageContainer.append(messageElement);
}
