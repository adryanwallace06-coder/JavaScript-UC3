// Pega o input de busca e a lista de produtos
const campoBusca = document.getElementById('campoBusca');
const listaProdutos = document.getElementById('listaProdutos');
const produtos = listaProdutos.getElementsByClassName('produto');
 
// Adiciona um evento que dispara sempre que algo é digitado
campoBusca.addEventListener('input', function() {
    // Pega o valor digitado e passa para minúsculo para evitar problemas de capitalização
    const textoDigitado = campoBusca.value.toLowerCase();
 
    // Percorre todos os produtos da lista
    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        const textoProduto = produto.textContent.toLowerCase();
 
        // Verifica se o texto digitado existe dentro do nome do produto
        if (textoProduto.includes(textoDigitado)) {
            // Remove a classe oculto para mostrar o produto
            produto.classList.remove('oculto');
        } else {
            // Adiciona a classe oculto para esconder o produto
            produto.classList.add('oculto');
        }
    }
});