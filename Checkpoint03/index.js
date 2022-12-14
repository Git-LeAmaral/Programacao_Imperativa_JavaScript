// 1 - Crie uma função construtora ou Classe Aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). 

// 2 - Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora. 

class Aluno {
  constructor (nome, qtdFaltas, notas) {
      this.nome = nome;
      this.qtdFaltas = qtdFaltas;
      this.notas = notas;
    } 

    adicionarFaltas() {
      return this.qtdFaltas+=1;
  }

  calcularMedia(){
    return (this.notas.reduce((acc, media) => acc + media)/this.notas.length).toFixed(1);
  }
}

const aluno1 = new Aluno('Leticia', 5, [7.5, 9.0, 10]);
const aluno2 = new Aluno('Helena', 1, [10.0, 9.5, 7.0]);
const aluno3 = new Aluno('Michelle', 10, [7, 8.5, 5.0]);
const aluno4 = new Aluno('Leandro', 3, [8.5, 10.0, 8.0]);
const aluno5 = new Aluno('Davi', 3, [6.0, 8.0, 8.5]);
const aluno6 = new Aluno('Régis', 15, [5.5, 3.0, 7.0]);
const aluno7 = new Aluno('Marcelo', 1, [5.5, 4.0, 6.0]);

// CALCULO DAS MÉDIAS

// console.log(`Média do aluno(a) ${aluno1.nome}: ${aluno1.calcularMedia()}`);


// ADICONAR FALTAS

// console.log(`Faltas do aluno(a) ${aluno1.nome}: ${aluno1.adicionarFaltas()}`);



// 3 - crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).



const curso = {
    nomeDoCurso: 'Programação Imperativa',
    notaDeAprovacao: 7.0,
    faltasMaximas: 7,
    estudantes:[],

    adicionarAluno(aluno){
        this.estudantes.push(aluno)
      },

    buscaEstudante(estudanteEncontrado){
      for (let estudante of this.estudantes) {
        if (estudanteEncontrado === estudante.nome) {
          return estudante;
        }
      }
    },

    // 4 - 	Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

    avaliadorEstudante(estudante){
      const estudanteEncontrado = this.buscaEstudante(estudante);
      // console.log(estudanteEncontrado);
      const mediaEstudante = estudanteEncontrado.calcularMedia();
      // console.log(mediaEstudante);
      if (mediaEstudante >= this.notaDeAprovacao && estudanteEncontrado.qtdFaltas < this.faltasMaximas) {
          return true;

      } else if (mediaEstudante >= this.notaDeAprovacao + (this.notaDeAprovacao * 0.1) && estudanteEncontrado.qtdFaltas == this.faltasMaximas) {
          return true;

      } else {
          return false;
      }
    },

//     5 - Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados
// se os alunos aprovaram ou não.
// 

    alunosAprovados() {
        let aprovados = [];
        for (const estudante of this.estudantes) {
            if (this.avaliadorEstudante(estudante.nome) == true) {
                aprovados.push({nome: estudante.nome, media: estudante.calcularMedia(), faltas: estudante.qtdFaltas});
            }
        }
        return aprovados;
    },

    alunosReprovados() {
      let reprovados = [];
      for (const estudante of this.estudantes) {
          if (this.avaliadorEstudante(estudante.nome) == false) {
              reprovados.push({nome: estudante.nome, media: estudante.calcularMedia(), faltas: estudante.qtdFaltas});
          }
      }
      return reprovados;
  }

}

// ******* ADICIONANDO ALUNOS *********

curso.adicionarAluno(aluno1);
curso.adicionarAluno(aluno2);
curso.adicionarAluno(aluno3);
curso.adicionarAluno(aluno4);
curso.adicionarAluno(aluno5);
curso.adicionarAluno(aluno6);
curso.adicionarAluno(aluno7);

console.table(curso.estudantes);

// ******* BUSCANDO ALUNOS ******

console.log(curso.buscaEstudante('Michelle'));



// curso.avaliadorEstudante();

console.log('***LISTA DE APROVADOS***');
console.log(`***${curso.nomeDoCurso}***`);
console.table(curso.alunosAprovados());

console.log('==============');

console.log('***LISTA DE REPROVADOS***');
console.log(`***${curso.nomeDoCurso}***`);
console.table(curso.alunosReprovados());














