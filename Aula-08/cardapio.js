/*





 */
var readlineSync = require('readline-sync');

console.log (`

  Bem-Vindo ao nosso cardápio digital:

  Temos as seguintes opções:

  1 - Pizza
  2 - Hamburguer
  3 - Batata-Frita
  4 - Lasanha
  5 - Açaí
  6 - Tapioca

`);

var opcao = readlineSync.question('Escolha uma opcao:');
console.log(`Sua opção foi ${opcao}`);

//escolha
switch(opcao){
   case '1':
     console.log('Pizza');
     break;
   case '2':
     console.log('Hamburguer');
     break;
   case '3':
     console.log('Batata-Frita');
     break;
   case '4':
     console.log('Lasanha');
     break;
   case '5':
     console.log('Açaí');
     break;
   case '6':
     console.log('Tapioca');
     break;
   defaut:
     console.log('Opção inválida');  
}