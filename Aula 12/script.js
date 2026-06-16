const cepInput = document.getElementById('cep');
const buscarBtn = document.getElementById('buscarBtn');
const resultado = document.getElementById('resultado');
const loading = document.getElementById('loading');
const erro = document.getElementById('erro');

buscarBtn.addEventListener("click", BuscaCEP);

async function BuscaCEP() {
    resultado.innerHTML = "";
    erro.textContent = "";

    const cep = cepInput.value.trim();

    if (cep.length !== 8) {
        erro.textContent = "Digite um CEP válido com 8 números.";
        return;
    }

    loading.style.display = "block";

    try {
        const resposta = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        );

        if (!resposta.ok) {
            throw new Error("Erro ao consultar o CEP.");
        }

        const dados = await resposta.json();

        if (dados.erro) {
            throw new Error("CEP não encontrado.");
        }

        resultado.innerHTML = `
            <div class="resultado">
                <h3>Endereço Encontrado:</h3>
                <p><strong>Logradouro:</strong> ${dados.logradouro}</p>
                <p><strong>Bairro:</strong> ${dados.bairro}</p>
                <p><strong>Localidade:</strong> ${dados.localidade}</p>
                <p><strong>Estado:</strong> ${dados.uf}</p>
            </div>
        `;

    } catch (err) {
        erro.textContent = err.message;
    } finally {
        loading.style.display = "none";
    }
}