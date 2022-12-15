function Pessoas (nome,idade,peso,altura) {
  this.nome = nome;
  this.idade = idade;
  this.peso = peso;
  this.altura = altura;   
  this.imc = function(){
    return this.peso/(this.altura**2)
  }
}

const leandro = new Pessoas('Leandro', 35, 115.2, 1.83)

console.log(leandro.imc());

function Aluno (nome, sala, periodo, nota1, nota2, nota3) {
    this.nome = nome;
    this.sala = sala;
    this.periodo = periodo;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.media = function(){
        return (this.nota1 + nota2 + nota3) / 3;
    }
}

const helena = new Aluno('Helena', 12, 'Manhã', 7.5, 8.0, 9.75)
console.log(helena);
console.log('A sua média de notas é: ' + helena.media());