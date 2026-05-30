let valor = 0
let soma = 0
let qtd = 0
let media = 0

while (qtd <= 5){

    valor = Number(prompt("Insira a nota n° " + (qtd + 1)))

    soma += valor

    if(qtd == 5){

        media = soma / 6

        console.log("A média é igual a " + media)

    }

    qtd++
}

