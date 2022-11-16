//existem duas formas de declarar uma função

//****EXPRESSA E DECLARADA*****

//Tradicional/Declarada

function darOi () {
    console.log("Olá, tudo bem?");
}

darOi();

//FUNÇÃO EXPRESSA

let somar = function (numaA, numB) {
    return (numaA + numB);
}

somar(2,2);

let rersultado = somar(1,2);
console.log(somar(2,2));

//ESCOPO 

let resultado = 0;
console.log("resultado fora da função =", resultado);

function multiplicar (numA, numB) {
    resultado = numA * numB;
    console.log("resultado dentro da função =", resultado);
  }

  multiplicar(5, 3);


  console.log("***********Exercicios do Playground sobre funções**********"); 

  //Crie uma função que converta polegadas em centimetros
  //1POLEGADA = 2,54 CENTIMETROS

  function convertP (polegadas) {
      conversao = polegadas * 2.54;
      console.log("resultado em cm é:", conversao);
  }

  convertP(2);

  //Crie uma função que receba uma string e a converta em um URL.
  //ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

  function convertUrl (name1) {
      conversao = 'http://www.' + name1 + '.com.br';
      console.log(conversao);
  }

  convertUrl('leandro');

  /*Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.*/

  function idadeDog (dog) {
      convertDog = dog * 7;
      console.log('A idade do seu dog é ' + convertDog + ' anos. ');
  }

  idadeDog(2);

  /* Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.

    8hrs por dia = 40hrs por semana = 160hrs por mês
    Formula = salario do funcionario / 160
  PS: considere que você trabalhe 160 horas no mês. */

  function hrTrab (salFuncionario) {
      calc = salFuncionario / 160;
      console.log('Sua hora de trabalho é de ' + calc);
  }

  hrTrab(1200);




