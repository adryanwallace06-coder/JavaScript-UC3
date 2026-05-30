const botao = document.getElementById("botao");

botao.addEventListener("click", function(){
    
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Novo Titulo";

    const paragrafos = document.getElementsByClassName("texto");
    paragrafos[0].textContent = "Páragrafos alterado";

    const segundoParagrafo  = document.querySelector(".texto:nth-of-type(2)");
    segundoParagrafo.innerHTML = "<strong>Texto em negrito</strong>";

    const imagem = document.getElementById("imagem");
    imagem.setAttribute("src", "nova-imagem.png");
    imagem.setAttribute("alt", "Nova descrição");

    console.log(
        imagem.getAttribute("alt")
    );
});