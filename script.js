// Array---------Array-----------------Array---------
var total = 0;
let alunos = [
    novoAluno("Mario", 10),
    novoAluno("Jose", 20),
    novoAluno("Marcia", 30),
    novoAluno("Joao", 40),
]

function novoAluno(nome, idade) {
    return { nome, idade }
}

function somar(){
    let valores = (reduce(getIdade))
    for(let i = 0; i < valores.length; i++){
        total = total + valores[i];
    }
    console.log(total)
}

function getIdade(aluno){
    return aluno.idade > 0;
}

function reduce(callback){
    let idadeDosAlunos = [];
    for(let aluno of alunos){
        if(callback(aluno)){
            idadeDosAlunos.push(aluno.idade)
        }
    }
    return idadeDosAlunos
}

somar();



