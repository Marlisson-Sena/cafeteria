
const gabarito = {
  q1: "brasil",
  q2: "arabica",
  q3: "mistura"
};

document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("finalizar");
  const resultado = document.getElementById("resultado");

  botao.addEventListener("click", () => {
    let pontos = 0;
    let total = 3;
    const r1 = document.querySelector('input[name="q1"]:checked')?.value;
    const r2 = document.querySelector('input[name="q2"]:checked')?.value;
    const r3 = document.querySelector('input[name="q3"]:checked')?.value;

    if (r1 === gabarito.q1) pontos++;
    if (r2 === gabarito.q2) pontos++;
    if (r3 === gabarito.q3) pontos++;


    resultado.textContent = `Você acertou ${pontos} de ${total} perguntas!`;

    if (pontos === total) {
      resultado.style.color = "lightgreen";
    } else {
      resultado.style.color = "red";
    }
  });
});