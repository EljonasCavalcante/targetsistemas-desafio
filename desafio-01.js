const Resultado = function(INDICE, SOMA, k){
    while(k < INDICE){
        k = k + 1;
        SOMA = SOMA + k;
    } return(SOMA)
}
console.log(Resultado(13,0,0))

//resultado 91