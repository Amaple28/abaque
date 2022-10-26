// quando clicar no botao comecar, ele vai tirar a opacidadde do textarea e vai ativar o botao finalizar 
// e vai desativar o botao comecar
var tempoInicial;

function comecar(){
    document.getElementById("resposta").style.opacity = "1";
    document.getElementById("textarea").disabled = false;
    document.getElementById("finalizar").disabled = false;
    document.getElementById("comecar").disabled = true;
    var tempo = new Date();
    tempoInicial = tempo.getTime();
}

// calcular tempo que o usuario demorou para responder a pergunta e mostrar na tela o tempo que ele demorou para responder 
// e mostrar na tela o tempo que ele demorou para responder

function finalizar(){
    var tempo = new Date();
    var tempoFinal = tempo.getTime();
    var tempoTotal = (tempoFinal - tempoInicial) / 1000;
    document.getElementById("tempo").innerHTML = tempoTotal;

    // alerta mostrando o tempo
    alert("Você demorou " + tempoTotal + " segundos para responder a pergunta");
}

// criar alerta personalizado de acerto

function acertou(){
    alert("Você acertou!");
}
