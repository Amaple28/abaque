//fazer animação de digitação
function anima() {
    //pegar o elemento com class "frase"
    var frase = document.querySelector(".texto");
    //pegar o texto do elemento
    var texto = frase.innerHTML;
    //limpar o texto do elemento
    frase.innerHTML = "";
    //criar um array com cada letra do texto
    var letras = texto.split("");
    //criar um loop com um intervalo de tempo entre cada letra para adicionar cada letra no elemento
    for (var i = 0; i < letras.length; i++) {
        setTimeout(function (i) {
            frase.innerHTML += letras[i];
        }, 100 * i, i);
    }
    
}