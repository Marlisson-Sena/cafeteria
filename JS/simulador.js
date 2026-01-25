const cafeSelect = document.getElementById("cafe");
const tamanhoSelect = document.getElementById("tamanho");
const checkExtras = document.querySelectorAll("input[type='checkbox']");
const precoEl = document.getElementById("preco");
const btnFinalizar = document.getElementById("btnFinalizarSimulador");


const imagensCafe = {
  "Espresso": "../../img/coffe2.jpg",
  "Moka": "../../img/coffe1.jpg",
  "Latte": "../../img/coffe3.jpg",
  "Cappuccino": "../../img/p4.jpg",
  "Mocha": "../../img/p6.jpg"
};


function calcularPreco() {
  const cafeNome = cafeSelect.options[cafeSelect.selectedIndex].text.split(" - ")[0];
  const cafePreco = parseFloat(cafeSelect.value);

  const tamanhoNome = tamanhoSelect.options[tamanhoSelect.selectedIndex].text;
  const tamanhoPreco = parseFloat(tamanhoSelect.value);

  let extrasPreco = 0;
  checkExtras.forEach(e => { if (e.checked) extrasPreco += parseFloat(e.value) });

  const total = cafePreco + tamanhoPreco + extrasPreco;
  precoEl.textContent = `Total: R$ ${total.toFixed(2).replace(".", ",")}`;

  return { cafeNome, cafePreco, tamanhoNome, tamanhoPreco, extrasPreco, total };
}


cafeSelect.addEventListener("change", calcularPreco);
tamanhoSelect.addEventListener("change", calcularPreco);
checkExtras.forEach(e => e.addEventListener("change", calcularPreco));


btnFinalizar.addEventListener("click", () => {
  const { cafeNome, cafePreco, tamanhoNome, tamanhoPreco, extrasPreco, total } = calcularPreco();

  if (!cafeNome || cafePreco <= 0) {
    alert("⚠️ Escolha um tipo de café válido.");
    return;
  }

  const extrasMarcados = [...checkExtras].filter(e => e.checked).map(e => e.parentElement.textContent.trim());

  const produtoSelecionado = {
    nome: `${cafeNome} - ${tamanhoNome}`,
    preco: total,
    descricao: "Café montado no simulador",
    ingredientes: extrasMarcados.length > 0 ? extrasMarcados.join(", ") : "Nenhum",
    preparo: "Preparado conforme sua escolha",
    imagem: imagensCafe[cafeNome] || "../../img/simulador-cafe.jpg"
  };

  
  localStorage.setItem("produtoSelecionado", JSON.stringify(produtoSelecionado));
  window.location.href = "../../page/compra/compra.html";
});


calcularPreco();