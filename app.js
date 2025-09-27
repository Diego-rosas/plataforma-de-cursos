//Atividade (fases da Engenharia de Software)
/*Equipe Escrum: Diego(Scrum Master)
                 Kerolayne(Product Oner)
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

    menuProfessor(){
        
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
    console.log("Quem é você? ");
    console.log("1. Professor");
    console.log("2. Aluno");
    console.log("3. Mostrar Infomações");
    console.log("4. Sair");
    console.log("---------------------------------------------------------------");
}

let opcao = ""; 


while(opcao != "4") { 
    mostaMenu();

    opcao = entrada("Digite a opção desejada: "); 

    if(opcao == "4"){ 
        console.log("Programa encerrado!")
        break;
    }

    switch (opcao){  
        case "1":
            console.log("1. Login");
            console.log("2. Cadastro");
            let opcaoProfessor = entrada("O que deseja fazer: "); 
            switch (opcaoProfessor){  
                case "1": 
                    break;
                case "2":
                    let nome = entrada("Digite o seu nomme: ");
                    let materia = entrada("Digite a materia que vai ensinar: ");
                    let professor = new Projessor(nome, materia);
                    professor.cadastraProfessor(professor);
                    break;
            }       
        case "2":
            console.log("1. Login");
            console.log("2. Cadastro");
            let opcaoAluno = entrada("O que deseja fazer: ");   
            switch (opcaoAluno){  
                case "1":
                    console.log("Usuário: ");
                    console.log("Senha: ");    
                    break;
                case "2":
                    let nome = entrada("Digite o seu nome: ");
                    let idade = entrada("Digite a sua idade: ");
                    let ocupacao = entrada("Digite a sua ocupação: ");
                    let aluno = new Aluno(nome, idade, ocupacao);
                    aluno.cadastraAluno(aluno);
                    aluno.testeClassificacao();
                    aluno.classificaAluno();
                    break;
            }
        case "3":
            //professor.listaProfessores();
            break;
        default:
            console.log("Opção inválida!")
            break;
    } 
}
