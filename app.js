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