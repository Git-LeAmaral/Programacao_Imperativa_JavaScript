function calculaImc(peso,altura,nome,idade,plano) {
    const imc = peso/altura**2;
    console.log(nome + ' tem ' + idade + ' anos e seu índice de massa corporal é de ' +  imc.toFixed(2) + ` e ` + plano + ` plano ` );
}

//Chamada
//José
//da Silva
//27
//83.5
//1.70
//Ouro

calculaImc(83.5,1.70,'José da Silva',27,`Tem`);
calculaImc(63.7,1.53,'Aline Ferreira',33,`Nao Tem`);
calculaImc(80.1,1.76,'Carlos de Souza',28,`Tem`);