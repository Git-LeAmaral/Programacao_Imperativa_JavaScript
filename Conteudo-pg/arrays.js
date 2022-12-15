// .push() Adiciona um aou mais elementos ao final do array

let cores = ["Roxo", "Laranja", "Azul"];

cores.push("Violeta"); // Retorna 4

console.log(cores);

cores.push("Preto", "Amarelo"); // Push acrescenta mais elementos, então retorna 6

console.log(cores);

// .pop() Elimina o último elemento de um array

let cores1 = ["Roxo", "Laranja", "Azul"];

let ultimaCor = cores1.pop();
console.log(cores1);
console.log(ultimaCor);

// .shift() Elimina o primeiro elemento de um array

let primeiraCor = cores.shift();
console.log(cores);
console.log(primeiraCor);

// .unshift() Adiciona um ou mais elementos ao início de um array

cores.unshift('Violeta');
console.log(cores);

cores.unshift('Cinza', 'Ouro');
console.log(cores);

// .join() Junta os elementos de um array usando um separador que especificamos. Se não especificar use vírgulas.

// **Recebe um separador (string), opcional
// **Retorna uma string com os elementos unidos

console.log('********** EXEMPLO .join() ************');

let cores2 = ['Roxo', 'Laranja', 'Azul'];

let separadosPorVirgula = cores2.join();

console.log(separadosPorVirgula);

let separadosPorTraco = cores2.join(" - ");

console.log(separadosPorTraco);

// .lastIndexOf() Similar ao .indexOf(), exceto que ele começa procurando pelo elemento no final do array(de tras para frente).

// Se houver elementos repetidos, ele retorna a posição do primeiro que encontrar (ou seja, o último, se olharmos desde o início).

cores.lastIndexOf("Amarelo");
console.log(cores.length);

const filmes = ['star wars', 'matrix', 'mr.robot', 'o preço do amanhã', 'a vida é bela'];

// function letrasMaisculas(filmes){
//       filmes[0] = filmes[0].toUpperCase();
//       filmes[1] = filmes[1].toUpperCase();
//       filmes[2] = filmes[2].toUpperCase();
//       filmes[3] = filmes[3].toUpperCase();
//       filmes[4] = filmes[4].toUpperCase();

//       return filmes;
//     };
    
    // console.log(filmesMod);

    //==============================================

    