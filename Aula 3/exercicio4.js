let valor = 0
let maior = 0

for(let i = 0; i < 5; i++){

    valor = Number(prompt("Insira o preço: "))

    if (valor > maior){
        maior = valor
    }

}

console.log("O maior valor é " + maior)