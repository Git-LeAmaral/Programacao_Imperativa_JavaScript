// Calculadora - Nível I

function soma (param1 = 0, param2 = 0){
  return  param1 + param2
}
function subtracao (param1 = 0, param2 = 0){
  return param1 - param2
}
function multiplicacao (param1 = 1,param2 = 1){
  return param1 * param2
}
function divisao (param1 = 1,param2 = 1){
  return param1 / param2

}




// Calculadora - Nível II

console.log ("-------------- Teste de Operações / Calculadora --------------")


console.log('A soma dos números é: ' + soma(4,4));
console.log('A subtração dos números é: ' + subtracao(4,4));
console.log('A multiplicação dos números é: ' + multiplicacao(4,4));
console.log('A divisão dos números é: ' + divisao(4,4));
console.log('A divisão por zero é: ' + divisao(100,0));

// Calculadora - Nível III

function quadradoDoNumero(numero){
    return multiplicacao(numero,numero);
}
console.log(' O número elevado ao quadrado é: ' + quadradoDoNumero(5));

function mediaDeTreNumeros(num1, num2, num3){
    const somaNum1Num2 = soma(num1,num2);
    const media = soma(somaNum1Num2, num3);
    return divisao(media,3);
}
console.log(' A média dos  números é: ' + mediaDeTreNumeros(5,8,7.5));


