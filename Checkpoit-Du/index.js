/*1- Crie uma função construtora ou Classe Aluno que tenha como atributos: nome (string), 
quantidade de faltas (number) e notas (array de números).*/
class Aluno {
  constructor(nome = "", faltas = 0, notas = []) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
  }
}

const aluno1 = new Aluno('Leticia', 5, [7.5, 9.0, 10]);
const aluno2 = new Aluno('Helena', 1, [10.0, 9.5, 7.0]);
/*2-Na função construtora crie o método calcularMedia que retorna a média de suas notas. 
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. 
Crie alguns alunos para testar a sua função construtora.*/
const escola = {
  alunos: [],
  buscarAluno(alunoBusca) {
    for (let aluno of this.alunos) {
      if (alunoBusca === aluno.nome) {
        return aluno;
      }
    }
  },
  adicionarAluno(nome, faltas, notas = []) {
    const novoAluno = new Aluno(nome, faltas, notas);
    this.alunos.push(novoAluno);
  },
  faltas(alunoFalta) {
    const alunoBusca = this.buscarAluno(alunoFalta);
    if (alunoBusca) {
      alunoBusca.faltas++;
      console.log("O total de faltas do aluno",alunoBusca.nome,"agora é:",alunoBusca.faltas);
    }
  },

  calcularMedia(alunoMedia) {
    const alunoBusca = this.buscarAluno(alunoMedia);
    if (alunoBusca) {
      let media = 0;
      let soma = 0;
      for (let i = 0; i < alunoBusca.notas.length; i++) {
        soma += alunoBusca.notas[i];
      }
      media = soma / alunoBusca.notas.length;
      console.log("A média das notas do aluno",alunoBusca.nome,"é:",media.toFixed(2));
    }
  },
};

console.log(escola.buscarAluno('Luan'));

/*3-crie o objeto literal curso que tem como atributos: nome do curso 
(string), nota de aprovação (number), faltas máximas (number) e uma 
lista de estudantes (um array composto pelos alunos criados no passo 2).*/



const curso = {
  nomeCurso:"Curso CTD",
  notaAprovacao:7.0,
  faltasMaximas:5,
  estudantes: [],
  
  /*4-Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método 
  em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto 
  curso.*/

  adicionarAluno(nome, faltas, notas) {
    const novoAluno = new Aluno(nome, faltas, notas);
    this.estudantes.push(novoAluno);
  },
};




escola.adicionarAluno(aluno1);
escola.adicionarAluno(aluno2);

// console.log(escola.buscarAluno('Leticia'));



