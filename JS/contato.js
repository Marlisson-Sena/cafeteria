let form = document.querySelector(".contato-form");

form.onsubmit = function(e) {
  e.preventDefault(); // impede que recarregue a página

  let nome = form.querySelector("input[type='text']").value;
  let email = form.querySelector("input[type='email']").value;
  let mensagem = form.querySelector("textarea").value;
  let termos = form.querySelector("input[type='checkbox']").checked;

  if (nome === "" || email === "" || mensagem === "" || !termos) {
    alert("⚠️ Preencha todos os campos e aceite os termos.");
  } else {
    alert("✅ Obrigado, " + nome + "! Sua mensagem foi enviada.");
    form.reset();
  }
}