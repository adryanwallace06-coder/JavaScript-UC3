// const precos = [10.99, 45.99, 15.00];
 
// let total = 0;

// for (const preco of precos) {
//     total += preco;
// }

// console.log(total)


const precos = [10.99, 45.99, 15.00, 19.99, 23.99];
 
let soma = 0;

for (let i = 0; i < precos.length; i++) {
    soma += precos[i];
}



let soma_par = 0;
for (let i = 0; i < precos.length; i++) {
    if (i % 2 === 0) { 
        soma_par += precos[i];
    }
}

let soma_impar = 0;
for (let i = 0; i < precos.length; i++) {
    if (i % 2 !== 0) {
        soma_impar += precos[i];
    }
}