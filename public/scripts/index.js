const username = document.getElementById("username");
const password = document.getElementById("password");

const login = async () => {
  const user = { username: username.value, password: password.value };
  const respuesta = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  });
  const data = await respuesta.json();
  console.log(data);  // Añadido para depurar
  if (data.isLogin) {
    sessionStorage.setItem("id", data.user.user_id);
    sessionStorage.setItem("name", data.user.username);
    window.location = "/pages/home.html?id=" + data.user.user_id + "&name=" + data.user.username;
  } else {
    alert("credenciales incorrectas");
  }
};

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", login);

password.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    login();
  }
});
