// const avaliacoes = [3,3,4,5,5]

// let soma = 0

// for (const i of avaliacoes) {
//     console.log ('Avaliações dos clientes', i) 

//         soma = soma + i
// }


let valor = 0
let soma = 0
let media = 0

for (let i = 0; i <= 5; i++){

    valor = Number(prompt("Insira a nota n° " + (i + 1)))

    soma += valor
}

media = soma / 6

console.log("A média é igual a " + media)


