var tempoInicial;
var tempo = 4;
var cronometro;

var answers = [];

const questions = []
const correctAnswers = [
    {
        name: 'options1',
        answer: '4'
    },
]

function iniciarCronometro() {
    cronometro = setInterval('atualizarCronometro()', 1000);
    document.getElementById('tela-jogo').style.display = 'none';
}

function atualizarCronometro() {
    if (tempo > 1) {
        tempo--;
        document.getElementById('tempo').innerHTML = tempo;
    } else {
        clearInterval(cronometro);
        exibirTelaJogo();
        comecar();
    }
}

function exibirTelaJogo() {
    document.getElementById('tela-inicial').style.display = 'none';
    document.getElementById('tela-jogo').style.display = 'grid';
}

function comecar() {
    var tempo = new Date();
    tempoInicial = tempo.getTime();     
}

function checkFinished(asnwer, name){
    let fullAnswer = {
        name: name,
        answer: asnwer,
    }

    if(answers.find(x => x.name == name) == undefined){
        answers.push(fullAnswer);
    }else{
        answers[answers.findIndex(x => x.name == name)] = fullAnswer;
    }

    if(answers.length == 1){
        checkAnswers();
    }
}

function checkAnswers(){
    let correct = 0;
    let wrong = 0;

    answers.forEach(answer => {
        if(correctAnswers.find(x => x.name == answer.name && x.answer === answer.answer) != undefined){
            correct++;
        }else{
            wrong++;
        }
    });

    let tempo = new Date();
    let tempoFinal = tempo.getTime();
    let tempoTotal = (tempoFinal - tempoInicial) / 1000;

    Swal.fire({
        title: `${correct > 0 ? 'Parabéns!' : 'Que pena!'}`,
        text: `${correct > 0 ? 'Você acertou ' + correct + ' de '+ answers.length + ' questões, em apenas ' + tempoTotal + ' segundos!' : 'Você errou todas as questões!'}`,
        icon: `${correct > 0 ? 'success' : 'error'}`,
        confirmButtonText: 'Jogar novamente'
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload();
        }
    }
    )
}
