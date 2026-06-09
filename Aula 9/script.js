// Seleciona os elementos da página
const elemento = document.getElementById('meuElemento');
const texto = document.getElementById('meuTexto');
 
// Adiciona um evento de clique ao elemento
elemento.addEventListener('click', function() {
   
    // Verifica se o elemento tem a classe atual
    if (elemento.classList.contains('estado-inicial')) {
        // Altera a classe CSS
        elemento.classList.remove('estado-inicial');
        elemento.classList.add('estado-vermelho');
        // Altera o conteúdo HTML
        texto.innerHTML = "O estado atual é: <strong>Perigo (Vermelho)!</strong>";
       
    } else if (elemento.classList.contains('estado-vermelho')) {
        elemento.classList.remove('estado-vermelho');
        elemento.classList.add('estado-verde');
        texto.innerHTML = "O estado atual é: <strong>Liberado (Verde)!</strong>";
       
    } else {
        elemento.classList.remove('estado-verde');
        elemento.classList.add('estado-inicial');
        texto.innerHTML = "O estado atual é: Inicial.";
    }
});