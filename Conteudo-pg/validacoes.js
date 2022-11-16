// ============= IF TERNÁRIO ==============

let dia = "terça";

let resultado = dia == "domingo" ? "Vou a praia" : "Fico em casa";

console.log(resultado);

// ============= SWITCH =====================

switch(dia) {
    case "segunda":
      console.log("vou tomar café");
      break;
     
    case "quarta":
      console.log("vou no cinema");  
      break;
    case "terça":
      console.log("vou para o futebol");  
      break;
      default:
        console.log("não ou fazer nada");
}


//============= Trabalhando com funcões ===============

// 1.Imagine que queremos exibir se uma pessoa é maior ou menor de idade;

let idade = 18;

if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}

// 2.Imagine que uma pessoa solicitou um empréstimo ao banco. O banco, por sua vez, para liberar o empréstimo, precisa verificar a renda mensal desta pessoa:

let pedidoDeEmprestimo = true;
let rendaMensal = 3000;

if (pedidoDeEmprestimo = true && rendaMensal >= 2500) {
    console.log('Emprestimo liberado');
} else {
    console.log('Infelismente não podemos liberar seu emprestimo');
}

/* 3.Mas e se a situação precisar de três opções? Nesse caso podemos utilizar o else if.

Imagine que uma pessoa precise lavar seu carro, e com base no seu dinheiro, existem três opções: lavar no lava rápido, lavar em casa ou não lavar o carro.

Poderíamos criar essa estrutura com o if, desta forma:
*/

let dinheiro = 9;

if (dinheiro >= 20) {
    console.log('Vou lavar o carro no lava rapido');
} else if (dinheiro >= 10 && dinheiro < 20) {
    console.log('Vou lavar o carro em casa');
} else {
    console.log('Não vou lavar o carro');
}

/* Também é possível simplificar as estruturas dos exemplos anteriores, através do if ternário. 

Com ele podemos apenas retornar algum valor, que pode ser atribuído a uma variável. A sua sintaxe é formada por três elementos, condição, valor se verdadeiro e valor se falso.

Os valores que serão retornados são separados por símbolos de interrogação e dois pontos (? :).

Novamente, validaremos se uma pessoa é maior de idade ou não, mas utilizando o If ternário:
*/

let idade1 = 18;

console.log(idade >= 18 ? 'Maior de idade' : 'Menor de idade');
        //condição      ? verdadeiro(if)   : falso(else)


// Podemos aplicar a mesma estrutura no caso do empréstimo bancário:

let pedidoDeEmprestimo1 = true;
let rendaMensal1 = 2500;

console.log(pedidoDeEmprestimo1 && rendaMensal1 >= 2500 
    ? 'Emprestimo liberado' 
    : 'Infelismente não podemos liberar seu emprestimo');


//================= Switch case ========================

/* Para entendermos melhor sua utilização, vamos imaginar o seguinte cenário:

É necessário criar um programa no qual o usuário informa uma estação e recebe uma mensagem relacionada a ela.

Utilizando if teríamos uma estrutura próxima desta
 */

// let estacao = 'Primavera';

// if (estacao == 'Verão') {
//     console.log('Que calor hein');
// } else if (estacao == 'Inverno') {
//     console.log('Eitaa, melhor arrumar uma blusa');
// } else if (estacao == 'Outono') {
//     console.log('Não esquece o guarda-chuva');
// } else if (estacao == 'Primavera') {
//     console.log('A melhor estação né');
// } else {
//     console.log('Opps, que estação é essa?');
// }

// Utilizando o switch no exemplo acima, teríamos isso:


let estacao = 'Verão';

switch (estacao) {
  case "Verão":
    console.log('Que calor hein');
    break;
  case "Inverno":
    console.log('Eitaa, melhor arrumar uma blusa');
    break;
  case "Outono":
    console.log('Não esquece o guarda-chuva');
    break;
  case "Primavera":
    console.log('A melhor estação né');
    break;
  default:
    console.log('Opps, que estação é essa?');
}