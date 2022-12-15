// JSON.PARSE()

//Converte um texto com o formato JSON ao tipo de dado equivalente em JavaScript.
//RECEBE uma string de texto com formato JSON;
//DEVOLVE o mesmo dado que recebeu em formato JavaScript.

let dadosJson = '{"Cidade": "São Paulo", "Bairro": "Morumbi"}';
let dadosConvertidos = JSON.parse(dadosJson);

console.log(dadosConvertidos);

//JSON.STRINGIFY()

// Converte um tipo de dado de JavaScript em um texto em formato JSON.
// RECEBE um tipo de dado de JavaScript;
// DEVOLVE uma string de texto com formato JSON.

let objetoLiteral = { nome: 'Carla', pais: 'Brasil' };
let dadosConvertidos1 = JSON.stringify(objetoLiteral);

console.log(dadosConvertidos1);
