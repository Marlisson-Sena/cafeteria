document.addEventListener('DOMContentLoaded', () => {
  const listaProdutos = document.getElementById('lista-produtos');

  // Busca o arquivo JSON com Fetch
  fetch('../dados/produtos.json')
    .then(res => res.json())
    .then(produtos => {
      // Monta cada card de produto
      produtos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto';
        card.innerHTML = `
          <img src="${produto.imagem}" alt="${produto.nome}">
          <p>${produto.nome}</p>
          <span>${produto.preco}</span>
          <button>Comprar</button>
        `;
        listaProdutos.appendChild(card);
      });
    })
    .catch(err => console.error('Erro ao carregar produtos:', err));
});