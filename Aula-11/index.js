// todos os arrays de entrada vão ter 4 elementos

function inverter(array = []) {
    const novoArray = [];
    // novoArray.push(array.pop());
    novoArray[0] = array[3];
    novoArray[1] = array[2];
    novoArray[2] = array[1];
    novoArray[3] = array[0];
    console.log(novoArray);
}

const nomes = ['fulano1', 'fulando2', 'fulano3', 'fulano4'];
inverter(nomes);

// Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.

function somarArray() {
    const total = (soma1[0] + soma1[1] + soma1[2]);
    const total1 = (soma2[0] + soma2[1] + soma2[2]);
    const total2 = (soma3[0] + soma3[1]);

    console.log(total);
    console.log(total1);
    console.log(total2);
}

const soma1 = [1, 2, 3];
const soma2 = [10, 3, 10, 4];
const soma3 = [-5, 100];
somarArray()


/*  Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
Importante: Não poderá utilizar o método Array.join() original.

Por exemplo:


join(["o","l","á"]) deve retornar a string "olá".
join([“t”,"c","h","a,"u"]) deve retornar a string "tchau".

 */

const nome = ['L', 'e', 'a', 'n', 'd', 'r', 'o'];

const juncao = nome.join();
console.log(juncao);

/* O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
	"star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela".*/

  function letrasMaius(filmes) {
      const maiuscula = filmes.toUpperCase();
      console.log(maiuscula);
  }


  const filmes = ['Star Wars', 'Matrix', 'Mr.Robot', 'O preço do amanhã', 'A vida é bela'];

  // console.log(filmes[3]);