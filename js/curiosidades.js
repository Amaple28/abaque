//Apos 10 segundos  sera redirecionada para o proxima
setTimeout("window.location='dificuldade.html'",10000);

function curiosidades () {

    var curiosidade = new Array();

    curiosidade[0] = "Você sabia que o nome ENIAC significa Eletronical Numerical Integrator and Computer, traduzindo, Integrador e Computador Numérico Eletrônico. O ENIAC funcionava através de um sistema composto por circuitos e válvulas, que ocupavam muito espaço, mas cumprindo seu objetivo de realizar cálculos complexos. Mesmo assim, nem se comparava à minha velocidade de processamento. Olha como ele era:"; 

    var aleatorio = Math.floor(Math.random() * curiosidade.length);

    document.querySelector(".curiosidades").innerHTML = curiosidade[aleatorio];
}