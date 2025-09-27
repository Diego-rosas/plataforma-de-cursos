//Atividade (fases da Engenharia de Software)
/*Equipe Escrum: Diego(Scrum Master)
                 Karolaynin(Product Oner)
                 Márcio
                 Sotero
*/ 
//Projeto: Plataforma de cursos online EAD
//Publico alvo: Voltados para auxiliar pessoas que precisam de interação com aplicativos de tecnologias.
//Necessidades do cliente: Que seja fácil e intuitivo com priorização  para pessoas idosas.

const entrada = require('prompt-sync')({sigint:false}); 

class Aluno {
    constructor(nome, idade, ocupacao){
        this.nome = nome;
        this.idade = idade;
        this.ocupacao = ocupacao;
        this.alunos = [];
        this.nivel = "";
        this.pontos = 0;
    }

    cadastraAluno(aluno) {
        this.alunos.push(aluno);
        console.log(`Aluno ${aluno.nome} adicionado ao sistema!`);
    }

    exibeInfoAlunos() {
        console.log("Informações dos alunos: ");
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Ocupação: ${this.ocupacao}`);
        console.log(`Nível: ${this.nivel}`);
    }

    testeClassificacao(){
        let parada = 0
        while(parada < 5) {
            console.log("responda essas 5 perguntas para sabermos o seu nivel de conhecimento.");
            let pergunta1 = entrada("Você tem celular?[SIM/NÃO]: ").toLowerCase();
            if(pergunta1.startsWith("s")) {
                this.pontos += 1;
            }
            parada ++;
            let pergunta2 = entrada("Você usa o celular com frequência?[SIM/NÃO]: ");
            if(pergunta2.startsWith("s")) {
                this.pontos += 1;
            }
            parada ++;
            let pergunta3 = entrada("Alguém ja tentou lhe ensinar a usar um celular?[SIM/NÃO]: ");
            if(pergunta3.startsWith("s")) {
                this.pontos += 1;
            }
            parada ++;
            let pergunta4 = entrada("Você tem a quem pedir ajuda em caso de dúvidas?[SIM/NÃO]: ");
            if(pergunta4.startsWith("s")) {
                this.pontos += 1;
            }
            parada ++;
            let pergunta5 = entrada("Você acha que vale a pena aprender a usar um celular?[SIM/NÃO]: ");
            if(pergunta5.startsWith("s")) {
                this.pontos += 1;
            }
            parada ++;
        }
    
    }

    classificaAluno() {
        switch(this.pontos){
            case 1:
                this.nivel = "Básico";
                break;
            case 2:
                this.nivel = "Básico";
                break;
            case 3:
                this.nivel = "Intermediário";
                break;
            case 4:
                this.nivel = "Intermediário";
                break;
            case 5:
                this.nivel = "Avançado";
                break
        }
        console.log(`O Aluno se encontra no nível: ${this.nivel}`);
    }

}

class Professor{
    constructor(nome, materia) {
        this.nome = nome;
        this.materia = materia;
        this.professores = [];
    }

    cadastraProfessor(professor) {
        this.professores.push(professor);
        console.log(`Professor ${professor.nome} adicionado ao sistema!`);
    }

    listaProfessores(){
        console.log("Lista de professores cadastrados:  ");
        for (const professor of this.professores) {
            console.log(`Nome: ${professor.nome}`);
            console.log(`Matéria: ${professor.materia}`);
        }
        console.log("-------------------------------------------------------");
    }

}

class Curso{
    constructor(){
        this.cursos = ["Como usar o WhatApp", "Como tirar fotos", "Como fazer chamadas de video", "Como usar o YouTube"];
    }

    exibeCursos(){
        console.log("Cursos disponíveis: ")
       for(let i = 0; i < this.cursos.length; i++) {
            let curso = this.cursos[i];
            console.log(`${i + 1}. ${curso}`);
        }
    }


}

function mostaMenu() { 
    console.log("\n------------------------------------------------------------");
    console.log("              PLATAFORMA DE CURSOS ON-LINE EAD!                 ");
    console.log("---------------------------------------------------------------");
    console.log("     Menu Principal:   ");
    console.log("1. Professor");
    console.log("2. Aluno");
    console.log("3. Sair");
    console.log("---------------------------------------------------------------");
}

function menuProfessor() {
    let opcaoProfessor = "";
    while(opcaoProfessor != "3") {

        if(opcaoProfessor == "3"){ 
            break;
        }

        console.log("Menu Professores: ");
        console.log("1. Login");
        console.log("2. Cadastro");
        console.log("3. Sair");

        opcaoProfessor = entrada("O que deseja fazer: "); 

        switch (opcaoProfessor){  
            case "1": 
                console.log("Usuário: ");
                console.log("Senha: "); 
                console.log("\n------------------------------------------------------------");
                break;
            case "2":
                console.log("----- Cadastro de professores: -------");
                let nome = entrada("Digite o seu nome: ");
                let materia = entrada("Digite a materia que vai ensinar: ");
                let professor = new Professor(nome, materia);
                professor.cadastraProfessor(professor);
                console.log("\n------------------------------------------------------------");
                break;
        }       
    } 
}

function menuAluno() {
    let opcaoAluno = "";
    while(opcaoAluno != "3") {

        if(opcaoAluno == "3"){ 
            break;
        }

        console.log("Menu Alunos: ");
        console.log("1. Login");
        console.log("2. Cadastro");
        console.log("3. Sair");

        opcaoAluno = entrada("O que deseja fazer: "); 

        switch (opcaoAluno){  
        case "1":
            console.log("Usuário: ");
            console.log("Senha: ");  
            console.log("\n------------------------------------------------------------");
            break;
        case "2":
            console.log("----- Cadastro de alunos: -------");
            let nome = entrada("Digite o seu nome: ");
            let idade = entrada("Digite a sua idade: ");
            let ocupacao = entrada("Digite a sua ocupação: ");
            let aluno = new Aluno(nome, idade, ocupacao);
            aluno.cadastraAluno(aluno);
            aluno.testeClassificacao();
            aluno.classificaAluno();
            console.log("\n------------------------------------------------------------");
            break;
        }       
    } 
}

let opcao = ""; 

while(opcao != "3") { //Laço principal
    mostaMenu(); // Menu principal

    opcao = entrada("Quem é você? ");

    if(opcao == "3"){ 
        console.log("Programa encerrado!")
        break;
    }

    switch (opcao){  
        case "1":
            menuProfessor();
            console.clear();
            break;
        case "2":
            menuAluno();
            console.clear();
            break;
        default:
            console.log("Opção inválida!")
            break;
    } 
}