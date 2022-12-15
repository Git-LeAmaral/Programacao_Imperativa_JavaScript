// Estruturas, Propriedades e Metodos

let jogador = {
  nome: 'Leandro',
  sobrenome: 'Amaral',
  saudacao: function() {
      return 'Olá, me chamo ' + this.nome;
  }
}
console.log(jogador.saudacao());

// ======================================

let meuCarro = new Carro('Ford', 'Fusion');
let outroCarro = new Carro('Chevrolet', 'Corvette');