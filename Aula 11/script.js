const escola = {
    nome: "Escola Tech",
    alunos: [],

    apresentar() {
        return `${this.nome} - Total: ${this.Alunos.length} alunos`
    }
}

const alunosIniciais = [{
        id: 1,
        nome: "João",
        idade: 20,
        curso: "JavaScript"
    },
    {
        id: 1,
        nome: "Maria",
        idade: 22,
        curso: "Python"
    },
]

escola.alunos = [...alunosIniciais]

function exibirAlunos() {
    const alunosDiv = document.getElementById("alunosList");
    if (escola.alunos.length === 0) {
        alunosDiv.innerHTML = '<p> Nenhum aluno cadastrado</p>'
        return
    }

    alunosDiv.innerHTML = escola.alunos.map(alunos =>
        `<div> class="alunos-item">
        <strong>${alunos.nome}</strong> | ${alunos.idade} anos | ${alunos.curso}
        </div>`
    ).join("");

    document.getElementById('jsonDisplay').textContent =
        JSON.stringify(escola.alunos, null, 2);
}

function adionarAluno() {
    const novoId = escola.alunos.length + 1;
    const novoAluno = {
        id: novoId,
        nome: `Aluno ${novoId}`,
        idade: Math.floor(Math.random() * 30) + 18,
        curso: ["HTML/CSS", "React", "Node.Js", "SQL"][Math.floor(Math.random() * 4)]
    };
    escola.alunos.push(novoAluno);
    exibirAlunos();
}

function salvarJSON() {
    const jsonStrig = JSON.stringify(escola.alunos, null, 2);

}