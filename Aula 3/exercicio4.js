let valor = 0
let maior = 0

for(let i = 0; i< 5; i++){
    valor = prompt("Insira preço: ");
    if (valor > maior){
        maior = valor
    } 
}

valor = console.log("O valor maior é" + maior);