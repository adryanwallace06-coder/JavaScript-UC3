const API = 'https://servicodados.ibge.gov.br/api/v1/localidades'
const API_KEY = 'demo-ibge-2024'

let cacheEstados = null
let cacheMunicipios = {}

async function autenticar() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(API_KEY.startsWith('demo-') ? {auth: true} : {auth: false});
        }, 300);
    });
}

async function fetchAPI(url) {
    const auth = await autenticar();
    if(!auth.auth) throw new Error('Falha na autenticação');

    const response = await fetch (url, {
        headers: {'X-API-Key': API_KEY, 'Content-type': 'application/json'}
    });

    if (!response.ok) throw new Error(`Erro na requisição: ${response.status}`);
    return await response.json();

}