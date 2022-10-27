//Apos 10 segundos sera redirecionada para o proxima
setTimeout("window.location='dificuldade.html'",10000);

function curiosidades () {

    const curiosidade = [
        {
            "curiosidade":"Você sabia que o nome ENIAC significa Eletronical Numerical Integrator and Computer, traduzindo, Integrador e Computador Numérico Eletrônico. O ENIAC funcionava através de um sistema composto por circuitos e válvulas, que ocupavam muito espaço, mas cumprindo seu objetivo de realizar cálculos complexos. Mesmo assim, nem se comparava à minha velocidade de processamento. Olha como ele era:",
            "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/ENIAC_Penn1.jpg/1200px-ENIAC_Penn1.jpg"
        }
    ]

    var aleatorio = Math.floor(Math.random() * curiosidade.length);

    document.querySelector(".curiosidades").innerHTML = curiosidade[aleatorio].curiosidade;
    document.querySelector(".img_curiosidade").src = curiosidade[aleatorio].img;
}
