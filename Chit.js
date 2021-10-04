// let us suppose chit wants to talk to chat(lets suppose another person)
const socketChat = io("http://localhost:3000");

const chitMessageForm = document.getElementById("send-container");
const chitMessageContainer = document.getElementById("message-container");
let chitMessage = document.getElementById("message-input");

chitMessageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = chitMessage.value;
  console.log(message);
  appendMessageLeft("You : " + message);
  socketChat.emit("chit-message", message);
  chitMessage.value = "";
});

function appendMessageRight(message) {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.align = "right";
  chitMessageContainer.append(messageElement);
}

function appendMessageLeft(message) {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.align = "left";
  chitMessageContainer.append(messageElement);
}

socketChat.on("chit-message", (message) => {
  console.log(message);
  appendMessageRight("Chat : " + message);
});
