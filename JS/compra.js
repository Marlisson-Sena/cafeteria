const produto = JSON.parse(localStorage.getItem('produtoSelecionado'));
const div = document.getElementById('produto-selecionado');

if (produto) {
  // quantidade inicial = 1
  produto.quantidade = 1;

  div.innerHTML = `
    <div class="produto-info">
      <img src="${produto.imagem}" alt="${produto.nome}" class="produto-img">
      <h3>${produto.nome}</h3>
      <p><strong>Preço unitário:</strong> R$ ${produto.preco}</p>
      <label>
        Quantidade: 
        <input type="number" id="quantidade" value="1" min="1" style="width: 60px; text-align: center;">
      </label>
      <p id="total"><strong>Total:</strong> R$ ${produto.preco}</p>
      <p><strong>Descrição:</strong> ${produto.descricao}</p>
      <p><strong>Ingredientes:</strong> ${produto.ingredientes}</p>
      <p><strong>Preparo:</strong> ${produto.preparo}</p>
    </div>
  `;

  // atualizar total quando a quantidade mudar
  const qtdInput = document.getElementById('quantidade');
  const totalEl = document.getElementById('total');

  qtdInput.addEventListener('input', () => {
    let qtd = parseInt(qtdInput.value);
    if (isNaN(qtd) || qtd < 1) qtd = 1;
    produto.quantidade = qtd;
    const total = produto.preco * qtd;
    totalEl.innerHTML = `<strong>Total:</strong> R$ ${total}`;
  });

} else {
  div.textContent = 'Nenhum produto selecionado.';
}

document.getElementById('finalizar').addEventListener('click', () => {
  const metodo = document.querySelector('input[name="pagamento"]:checked');
  const rua = document.getElementById('rua').value;
  const bairro = document.getElementById('bairro').value;
  const cidade = document.getElementById('cidade').value;
  const cep = document.getElementById('cep').value;

  if (!produto) {
    alert('Nenhum produto selecionado.');
    return;
  }
  if (!metodo) {
    alert('Escolha uma forma de pagamento.');
    return;
  }
  if (!rua || !bairro || !cidade || !cep) {
    alert('Preencha o endereço de entrega.');
    return;
  }

  const total = produto.preco * produto.quantidade;

  alert(`✅ Compra finalizada!\n\nProduto: ${produto.nome}\nQuantidade: ${produto.quantidade}\nTotal: R$ ${total}\nPagamento: ${metodo.value}\nEndereço: ${rua}, ${bairro}, ${cidade} - CEP ${cep}`);

  localStorage.removeItem('produtoSelecionado');
  window.location.href = '../../page/Home/home.html';
});
