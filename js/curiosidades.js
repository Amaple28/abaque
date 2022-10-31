//Apos 10 segundos sera redirecionada para o proxima
setTimeout("window.location='dificuldade.html'",10000);

function curiosidades () {

    const curiosidade = [
        {
            "curiosidade":"Você sabia que o nome ENIAC significa Eletronical Numerical Integrator and Computer, traduzindo, Integrador e Computador Numérico Eletrônico. O ENIAC funcionava através de um sistema composto por circuitos e válvulas, que ocupavam muito espaço, mas cumprindo seu objetivo de realizar cálculos complexos. Mesmo assim, nem se comparava à minha velocidade de processamento. Olha como ele era:",
            "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/ENIAC_Penn1.jpg/1200px-ENIAC_Penn1.jpg"

        }

        ,{
            "curiosidade":"Como visto anteriormente, os computadores nem sempre foram as máquinas pequenas que estamos acostumados a mexer. Tendo isso em mente, foi em 1973 que o primeiro protótipo para o PC como conhecemos hoje surgiu. Desenvolvido pela empresa IBM, o computador veio acompanhado de uma tela CRT(Cathodic Ray Tube), um teclado e uma entrada para fitas cassete, acredita nisso? Só que, antes da chegada do IBM PC, a famosa Apple de Steve Wozniak e Steve Jobs surgiria no mercado com o Apple-I, lançado em 1976."
            ,"img":"https://s.zst.com.br/cms-assets/2022/08/primeiro-computador-ibm-1-.webp"
        } 

        ,{
            "curiosidade": "O computador mais rápido atualmente é o Fugaku, um supercomputador dedicado a processamento de Inteligência Artificial e pesquisas médicas, tendo ajudado no combate à covid-19, fazendo diversas pesquisas e trabalhando em outras aplicações que exigiam cálculos massivos."
            ,"img":"https://www.japantimes.co.jp/wp-content/uploads/2021/03/np_file_74688.jpeg"

        }
        
        ,{
            "curiosidade":"O primeiro processador do mundo foi feito pela empresa Busicom, conhecida na época como Nippon Calculating Machine Corporation. A empresa pediu ajuda da Intel para fabricação de chips de processamento. Com essa parceria as empresas conseguiram produzir o primeiro processador programável do mundo o Intel 4004."
            ,"img":"https://s2.glbimg.com/ZexcnJNUGs4tabG1Cfthor8MpgU=/0x0:620x342/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/G/2/QNBfd2RMaSJUP11FIN7Q/2011-11-16-intel-4004-gold-pins-640x353.jpg"
        }

        ,{
            "curiosidade":"O criador do primeiro computador portátil ainda continua indeciso. Ainda assim, historiadores creditam o desenvolvimento do primeiro notebook ao autor e desenvolvedor Adam Osborne tendo lançado em 1981 o Osborne 1."
            ,"img":"https://t.ctcdn.com.br/ut0csI_pz4iAGoEa4FjlLYNBV34=/660x0/smart/i514784.jpeg"

        }
]

    var aleatorio = Math.floor(Math.random() * curiosidade.length);

    document.querySelector(".curiosidades").innerHTML = curiosidade[aleatorio].curiosidade;
    document.querySelector(".img_curiosidade").src = curiosidade[aleatorio].img;
}
