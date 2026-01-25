function login() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "usuario" && senha === "123") {
    window.location.href = "page/home/home.html";
  } else {
    alert("Usuário ou senha inválidos");
  }
}