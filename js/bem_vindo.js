function bem_vindo() {
    // script para cada vez que entrar nessa pagina aparecer uma frase diferente
    var frases = new Array();
    frases[0] = "Bem vindo, humano. Quer ver como eu funciono?";
    frases[1] = "Olá! Não te vi aí... Talvez porque eu não tenha olhos, haha! Quer explorar o meu mundo?";
    frases[2] = "Olá! Você é um humano? Eu sou o Abaquê! Quer ver como eu funciono?";
    frases[3] = "5537 contas, 5538 cont... Oh! Olá. Venha conhecer mais sobre o Abaque!";
    frases[4] = "Oh, desculpe! Estava calculando alguns milhões :) Quer ver como é?";
    frases[5] = " Beep  boop. Brincadeira, bem vindo! Quer ver como o Abaque funciona?";
    frases[6] = "Olá, que bom você estar aqui! Quer conhecer sobre o Abaque?";
    frases[7] = "É um pássaro, é um avião? Não, é o Abaque! Vamos conhecer mais sobre ele?";
    frases[8] = "Olá, humano! Quer conhecer mais sobre o Abaque?";
    frases[9] = "Bem vindo, viajante! Uma pausinha para conhecer o Abaque?";
    frases[10] = "Opa, é bom ter você aqui! Vem comigo, vou te explicar sobre o Abaque!";
    frases[11] = " Nada melhor do que fazer algumas contas! Quer ver como eu faço?";
    frases[12] = "Olá, eu sou o Abaque! Quer ver como eu faço contas super rápido?";
    frases[13] = "Olá! Pronto parar ver algo incrível?";
    frases[14] = "Olá, humano! Quer ver como eu faço contas?";
    frases[15] = "Sistemas não são tão chatos assim e eu posso provar, vem comigo!";
    frases[16] = "Iae! Bem vindo ao Abaque, da uma olhada em como ele funciona:";
    frases[17] = "Com grandes contas, vem grandes responsabilidades, certo! Vamos ver como essa responsabilidade funciona!";

    //escolhe um numero aleatorio entre 0 e o numero de frases
    var aleatorio = Math.floor(Math.random() * frases.length);

    //escrever frase no elemento html com class "frase"
    document.querySelector(".frase").innerHTML = frases[aleatorio];

    //chamar a função anima
    anima();
}

//fazer animação de digitação
function anima() {
    //pegar o elemento com class "frase"
    var frase = document.querySelector(".frase");
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

//depois de 5 segundos nessa pagina redireciona para outra 
setTimeout(function () {
    window.location.href = "curiosidades.html";
}, 10000);
