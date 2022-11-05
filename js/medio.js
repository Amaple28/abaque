var tempoInicial;
var tempo = 4;
var cronometro;

var answers = [];

const questions = [
    {
        name: null,
        question: "67-76=?",
        options:[
            {
                answer: "-9",
                correct: true
            },
            {
                answer: "-7",
                correct: false
            },
            {
                answer: "10",
                correct: false
            },
        ]
    },
    {
        name: null,
        question: "10÷20=?",
        options:[
            {
                answer: "0.5",
                correct: true
            },
            {
                answer: "4",
                correct: false
            },
            {
                answer: "30",
                correct: false
            },
        ]
    },
    {
        name: null,
        question: "7x5=?",
        options:[
            {
                answer: "37",
                correct: false
            },
            {
                answer: "14",
                correct: false
            },
            {
                answer: "35",
                correct: true
            },
        ]
    },
    {
        name: null,
        question: "77+33=?",
        options:[
            {
                answer: "90",
                correct: false
            },
            {
                answer: "100",
                correct: false
            },
            {
                answer: "110",
                correct: true
            },
        ]
    },
    {
        name: null,
        question: "9÷2=?",
        options:[
            {
                answer: "4",
                correct: false
            },
            {
                answer: "4.5",
                correct: true
            },
            {
                answer: "0",
                correct: false
            },
        ]
    },
    {
        name: null,
        question: "10x10x10=?",
        options:[
            {
                answer: "100",
                correct: false
            },
            {
                answer: "1000",
                correct: true
            },
            {
                answer: "111",
                correct: false
            },
        ]
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
    
    for (let index = 0; index <= 1 ; index++) {
        const elementIndex = Math.floor(Math.random() * questions.length);
        if(questions[elementIndex].name == null){
            questions[elementIndex].name = "options" + (index+1);

            document.getElementById("question" + (index+1)).innerHTML = questions[elementIndex].question;
            
            document.getElementById(`label${(index+1)}-1`).innerHTML = questions[elementIndex].options[0].answer;
            document.getElementById(`label${(index+1)}-2`).innerHTML = questions[elementIndex].options[1].answer;
            document.getElementById(`label${(index+1)}-3`).innerHTML = questions[elementIndex].options[2].answer;

            document.getElementById(`option${(index+1)}-1`).value = questions[elementIndex].options[0].answer;
            document.getElementById(`option${(index+1)}-2`).value = questions[elementIndex].options[1].answer;
            document.getElementById(`option${(index+1)}-3`).value = questions[elementIndex].options[2].answer;

        }else{
            index--;
        }
        
    }
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

    if(answers.length == 2){
        checkAnswers();
    }
}

function checkAnswers(){
    let correct = 0;
    let wrong = 0;

    answers.forEach(answer => {
        if(questions.find(x => x.name === answer.name).options.find(x => x.answer == answer.answer).correct){
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
