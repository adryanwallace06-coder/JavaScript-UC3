const matriz = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

for (let linha = 0; linha < matriz.length; linha++) {

    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {

        console.log(`Elemento na posição [${linha}][${coluna}] é ${matriz[linha][coluna]}`);
    }
}