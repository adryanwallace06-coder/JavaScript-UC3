// Pega a hora atual do computador do usuário
const horaAtual = new Date().getHours();
 
// Elementos HTML
const msgDia = document.getElementById('msg-dia');
const msgNoite = document.getElementById('msg-noite');
 
// Condição: Se a hora for menor que 18 (antes das 18h), mostra a mensagem de dia
if (horaAtual < 18) {
    msgDia.classList.add('visivel');
} else {
    // Caso contrário, mostra a mensagem de noite
    msgNoite.classList.add('visivel');
}