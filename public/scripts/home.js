const iGame = document.getElementById("iGame");
iGame.setAttribute("src", "./game_v2/index.html?id=" + sessionStorage.id + "&name=" + sessionStorage.name);

const chat = document.getElementById("chat");
const msg = document.getElementById("msg");
const send = document.getElementById("send");

const sendMsg = () => {
  chat.value += "\n" + msg.value;
  msg.value = "";
};

send.addEventListener("click", sendMsg);

msg.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMsg();
  }
});
