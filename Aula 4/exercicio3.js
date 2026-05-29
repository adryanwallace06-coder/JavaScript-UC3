const bebidas = [
    [1, "Coca-Cola", 8.50],
    [2, "Pepsi", 7.50],
    [3, "Fanta", 7.00]
];

for (let linha = 0; linha < bebidas.length; linha++) {

    console.log(
        `ID: ${bebidas[linha][0]} | Produto: ${bebidas[linha][1]} | Valor: R$ ${bebidas[linha][2]}`
    );
}

let encontrou = false;

for (let linha = 0; linha < bebidas.length; linha++) {

    if (bebidas[linha][1] === "Coca-Cola") {
        encontrou = true;
    }
}

if (encontrou) {
    console.log("Coca-Cola existe no array");
} else {
    console.log("Coca-Cola não existe no array");
}