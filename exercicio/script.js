const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const btnCadastrar = document.getElementById("btnCadastrar");
const mensagem = document.getElementById("mensagem");
const listaUsuarios = document.getElementById("listaUsuarios");
const filtro = document.getElementById("filtro");

const usuarios = [];

// Habilitar ou desabilitar botão
function validarCampos() {

    const telefoneValido = /^\d{10,11}$/.test(telefone.value);
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);

    if (
        nome.value.trim() !== "" &&
        email.value.trim() !== "" &&
        telefoneValido &&
        emailValido
    ) {

        btnCadastrar.disabled = false;

    } else {

        btnCadastrar.disabled = true;
    }
}

nome.addEventListener("input", validarCampos);
email.addEventListener("input", validarCampos);
telefone.addEventListener("input", validarCampos);

// Cadastrar usuário
btnCadastrar.addEventListener("click", function () {

    const telefoneValido = /^\d{10,11}$/.test(telefone.value);

    if (!email.value.includes("@")) {

        mensagem.textContent = "E-mail inválido!";
        mensagem.style.color = "red";
        return;
    }

    if (!telefoneValido) {

        mensagem.textContent =
            "Digite um telefone com DDD. Ex: 11987654321";

        mensagem.style.color = "red";
        return;
    }

    if (!email.value.includes("@")) {

        mensagem.textContent = "E-mail inválido!";
        mensagem.style.color = "red";
        return;
    }

    const usuarioExiste = usuarios.some(function(usuario) {
        return usuario.email === email.value;
    });

    if (usuarioExiste) {

        mensagem.textContent = "Usuário já cadastrado!";
        mensagem.style.color = "red";

    } else {

        usuarios.push({
            nome: nome.value,
            email: email.value,
            telefone: telefone.value
        });

        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";

        exibirUsuarios();

        nome.value = "";
        email.value = "";
        telefone.value = "";

        btnCadastrar.disabled = true;
    }
});

// Exibir usuários
function exibirUsuarios(lista = usuarios) {

    listaUsuarios.innerHTML = "";

    for (const usuario of lista) {

        const item = document.createElement("li");

        item.innerHTML = `
            <strong>Nome:</strong> ${usuario.nome}<br>
            <strong>E-mail:</strong> ${usuario.email}<br>
            <strong>Telefone:</strong> ${usuario.telefone}<br><br>

            <button onclick="excluirUsuario('${usuario.email}')">
                Excluir
            </button>
        `;

        listaUsuarios.appendChild(item);
    }
}

// Excluir usuário
function excluirUsuario(email) {

    const indice = usuarios.findIndex(function(usuario) {
        return usuario.email === email;
    });

    if (indice !== -1) {

        usuarios.splice(indice, 1);

        mensagem.textContent = "Usuário removido com sucesso!";
        mensagem.style.color = "orange";

        exibirUsuarios();
    }
}

// Filtrar usuários
filtro.addEventListener("input", function () {

    const pesquisa = filtro.value.toLowerCase();

    const usuariosFiltrados = usuarios.filter(function(usuario) {

        return usuario.nome.toLowerCase().includes(pesquisa);

    });

    exibirUsuarios(usuariosFiltrados);
});