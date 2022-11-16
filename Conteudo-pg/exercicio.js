// CRIE UMA FUNÇÃO PODESUBIR() QUE RECEBA DOIS PARAMETROS:
// -ALTURA DA PESSOA;
// -SE ESTA ACOMPANHADA;

function podeSubir(altura, acompanhada) {
    let podeSubir = false;

    if (altura <= 2.00 && altura > 1.40  ) {
        podeSubir = true;

    } else if (altura <= 1.40 && acompanhada) {
        podeSubir = true;

    } else {
        console.log('Não podera subir, nem acompanhada');
    }
    console.log(podeSubir(1.40));
}
