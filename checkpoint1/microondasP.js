const readlineSync = require('readline-sync');
let microondas = (opcao, tempo) => {
    console.log(
        "~~~~~~~~~~~[MENÚ]~~~~~~~~~~" + "\n" +
        "1 = Pipoca      10 segundos" + "\n" +
        "2 = Macarrão    08 segundos" + "\n" +
        "3 = Carne       15 segundos" + "\n" +
        "4 = Feijão      12 segundos" + "\n" +
        "5 = Brigadeiro  08 segundos" + "\n" +
        "~~~~~~~~~~~~~~~~~~~~~~~~~~~" + "\n");
    
    opcao = Number(readlineSync.question(`Escolha o prato desejado: `));
        switch(opcao ){
            case 1:
                 console.log(`Você escolheu pipoca!`);
                 tempo = Number(readlineSync.question(`Defina o tempo desejado: `));
               if( (tempo >= (2 * 10)) && (tempo < (3 * 10)) ){
                    console.log("A comida queimou");
                    console.log("Prato pronto, bom apetite!!");
                } else if(tempo < 10){
                    console.log("Tempo insuficiente");
                    console.log("Prato pronto, bom apetite!!");
                } else if (tempo >= (3 * 10)) {
                    console.log("Kabumm");
                    console.log("Prato pronto, bom apetite!!");
                } else if(tempo === 10){
                    console.log("Prato pronto, bom apetite!!");
                }
                break;
            case 2:
                console.log(`Você escolheu Macarrão!`);
                tempo = Number(readlineSync.question(`Defina o tempo desejado: `));
                if( (tempo >= (2 * 10)) && (tempo < (3 * 10)) ){
                     console.log("A comida queimou");
                     console.log("Prato pronto, bom apetite!!");
                 } else if(tempo < 10){
                     console.log("Tempo insuficiente");
                     console.log("Prato pronto, bom apetite!!");
                 } else if (tempo >= (3 * 10)) {
                     console.log("Kabumm");
                     console.log("Prato pronto, bom apetite!!");
                 } else if(tempo === 10){
                     console.log("Prato pronto, bom apetite!!");
                 }
                break;
            case 3:
                console.log(`Você escolheu carne!`);
                tempo = Number(readlineSync.question(`Defina o tempo desejado: `));
                if( (tempo >= (2 * 10)) && (tempo < (3 * 10)) ){
                     console.log("A comida queimou");
                     console.log("Prato pronto, bom apetite!!");
                 } else if(tempo < 10){
                     console.log("Tempo insuficiente");
                     console.log("Prato pronto, bom apetite!!");
                 } else if (tempo >= (3 * 10)) {
                     console.log("Kabumm");
                     console.log("Prato pronto, bom apetite!!");
                 } else if(tempo === 10){
                     console.log("Prato pronto, bom apetite!!");
                 }
                break;
            case 4:
                console.log(`Você escolheu feijão!`);
                tempo = Number(readlineSync.question(`Defina o tempo desejado: `));
                if( (tempo >= (2 * 10)) && (tempo < (3 * 10)) ){
                     console.log("A comida queimou");
                     console.log("Prato pronto, bom apetite!!");
                 } else if(tempo < 10){
                     console.log("Tempo insuficiente");
                     console.log("Prato pronto, bom apetite!!");
                 } else if (tempo >= (3 * 10)) {
                     console.log("Kabumm");
                     console.log("Prato pronto, bom apetite!!");
                 } else if(tempo === 10){
                     console.log("Prato pronto, bom apetite!!");
                 }
                break;
            case 5:
                console.log(`Você escolheu brigadeiro!`);
                tempo = Number(readlineSync.question(`Defina o tempo desejado: `));
                if( (tempo >= (2 * 10)) && (tempo < (3 * 10)) ){
                     console.log("A comida queimou");
                     console.log("Prato pronto, bom apetite!!");
                 } else if(tempo < 10){
                     console.log("Tempo insuficiente");
                     console.log("Prato pronto, bom apetite!!");
                 } else if (tempo >= (3 * 10)) {
                     console.log("Kabumm");
                     console.log("Prato pronto, bom apetite!!");
                 } else if(tempo === 10){
                     console.log("Prato pronto, bom apetite!!");
                 }
                break;
            default:
                console.log(`Prato inexistente!`);
        }
       
}
microondas();