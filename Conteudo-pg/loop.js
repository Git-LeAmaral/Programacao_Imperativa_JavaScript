for (let i = 0; i <= 4; i++) {
    console.log('Oi' + i);
}

// 1.Repetir como um papagaio
// Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição se deve mostrar no console a mensagem “Olá mundo”.

for (let papagaio = 0; papagaio <= 4; papagaio++) {
    console.log('Olá Mundo ' + papagaio);
}

/* 2.Contando números ímpares

Crie um loop for de 1 a 10, em que exiba no console apenas o valor das repetições de números ímpares. Dica: A ideia é que nas repetições ímpares de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no console.

*/

console.log('********* Imprimir números ímpares ************');

for (let n = 0; n <= 10; n++) {

    if ((n % 2) != 0) {
        console.log(n);
    }
}

/* 3.Criando a tabuada

Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar utilizar dois loops (for).

*/

console.log('********* Construindo Tabuada ************');

let valor = 3;

for (let i = 0; i <= 10; i++) {
    console.log(valor + ' x ' + i + ' = ' + (valor * i));
}


console.log('******** While e do While *********');

// 1. Programa em Javascript que mostra os números ímpares
// Escreva um aplicativo em Javascript que mostre todos os números ímpares de 1 até 100.

let numero = 1;

while (numero <= 100) {
    if ((numero % 2) != 0) {
      console.log(numero);
    }
    numero++
};
