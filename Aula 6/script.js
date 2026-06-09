const botao = document.getElementById('meuBotao');
const caixa = document.getElementById ('minhaCaixa');
const selecao = document.getElementById('meuSelect');

botao.addEventListener('click', function() {
    alert('O meu botão foi clicado!');
});

caixa.addEventListener('mouseover', function() {
    caixa.style.backgroundColor = 'lightblue';
});

selecao.addEventListener('change', function(evento){
    console.log('Cor selecionada: ' + evento.target.value);
});

function paginaCarregada() {
    alert("a página foi totalmente carregada!");
}