// Diferença entre let e var;
/*
  let
    -> Não pode ser acessado antes da inicialização
    -> Só é visivel dentro do escopo o qual foi declarado

  var
    -> Possui visibilidade global
    -> Pode ser acessado fora do escopo o qual foi definido
    -> Pode ser acessado antes da inicialização
    
*/                                            

{
    let x = 5;
    console.log(x);
}