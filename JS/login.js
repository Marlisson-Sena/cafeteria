function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "usuario" && senha === "123") {
    window.location.href = "page/Home/home.html";
  } else {
    alert("Usuário ou senha inválidos");
  }
}

const container = document.querySelector(".container");

setTimeout(() => {
  container.classList.add("active");
}, 3500);
