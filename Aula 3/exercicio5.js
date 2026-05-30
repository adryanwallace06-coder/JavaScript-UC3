let valor = 0
let soma = 0
let qtd = 0
let media = 0

while (qtd < 6){

    valor = Number(prompt("Insira a nota n° " + (qtd + 1)))

    soma += valor

    qtd++
}

media = soma / 6

console.log("A média é igual a " + media)