// quando clicar no botao comecar, ele vai tirar a opacidadde do textarea e vai ativar o botao finalizar 
// e vai desativar o botao comecar
var tempoInicial;

function comecar() {
    document.getElementById("resposta").style.opacity = "1";
    document.getElementById("textarea").disabled = false;
    document.getElementById("finalizar").disabled = false;
    document.getElementById("comecar").disabled = true;
    var tempo = new Date();
    tempoInicial = tempo.getTime();
}

// calcular tempo que o usuario demorou para responder a pergunta e mostrar na tela o tempo que ele demorou para responder 
// e mostrar na tela o tempo que ele demorou para responder
function finalizar() {
    var tempo = new Date();
    var tempoFinal = tempo.getTime();
    var tempoTotal = (tempoFinal - tempoInicial) / 1000;
    document.getElementById("tempo").innerHTML = tempoTotal;

    //alerta mostrando o tempo
    alert("Você demorou " + tempoTotal + " segundos para responder a pergunta");
}

// ALERTAAAS DE ACERTO E ERRO
function acertou() {
    // alerta de acerto
    let timerInterval
    Swal.fire({
        title: 'Você Acertou!',
        padding: '3em',
        icon: 'success',
        backdrop: `
        rgba(0,0,123,0.4)
        url("https://www.guia55.com.br/wp-content/uploads/2021/08/9O8-84n-Abaco-0-127829369_m.jpg")
        left top
        no-repeat
    `,
        timer: 2000,
        timerProgressBar: true,

        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}

function errou() {
    // alerta de erro
    let timerInterval
    Swal.fire({
        title: 'Você Errou!',
        padding: '3em',
        icon: 'error',
        backdrop: `
        rgba(0,0,123,0.4)
        url("https://www.guia55.com.br/wp-content/uploads/2021/08/9O8-84n-Abaco-0-127829369_m.jpg")
        left top
        no-repeat
    `,
        timer: 2000,
        timerProgressBar: true,

        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}