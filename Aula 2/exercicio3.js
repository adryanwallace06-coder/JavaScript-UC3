const dinheiro = 1
const cartão = 2
const pix = 3


if (dinheiro == 1) {
    console.log ("Selecionado o dinheiro")
}

else if (cartão == 2) {
    console.log ("Selecionado cartão")
}

else if (pix == 3) {
    console.log ("Selecionado pix")
}

else {
    console.log("Pagemnto não reconhecido")
}




let metodo_de_pagamento = 1

switch (metodo_de_pagamento) {
    case 1:
     console.log ("Pagamento em dinheiro")
     
    case 2:
     console.log ("pagamento em cartão")

    case 3:
     console.log ("Pagamento em pix")

     default:
        console.log ("pagamento não reconhecido")
}

