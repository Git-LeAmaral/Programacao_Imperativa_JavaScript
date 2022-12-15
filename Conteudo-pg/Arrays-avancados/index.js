// MAP - .map() este metodo recebe uma função como parametro (callback).
// Faz um loop no array e retorna um novo array modificado
// As modificações serão aquelas que programamos em nossa função de callback 

// let numeros = [2, 4, 6];
// let dobro = numeros.map(function(num){
//     return num * 2;
// });
// console.log(dobro);

//*************************************************************************** */

// REDUCE - .reduce(), Este método percorre a array e retorna um único valor.
// Ele recebe uma callback para ser executada em cada elemento do array.
// Este, por sua vez, recebe dois parametros: um acumulador e o elemento atual que esta percorrendo.

// let numeros = [5, 7, 16];
// let soma = numeros.reduce(
//     function (acumulador, numero) {
//         return acumulador + numero;
//     }
// );
// console.log(soma);


// function calcularMedia() {
    // let notas = [6, 10, 7];
    // let media = notas.map(function(m){
    //         return m / notas.length
    // })

    // for (let i = 0; i < notas.length; i++) {
    //     sum += notas[i];
    // }

    // return sum / notas.length
// }

// console.log(media);