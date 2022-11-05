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

    switch (correct) {
        case 2:
            Swal.fire({
                title: `Parabéns!`,
                text: `Você acertou todas as questões em ${tempoTotal} segundos!`,
                iconHtml: `<img src="../img/star_eyes-removebg-preview.png" width="150" height="150">`,
                timer: 5000,
                timerProgressBar: true,
            }).then((result) => {
                window.location.replace("http://localhost:5500/curiosidades_final.html");
            })
        break;

        case 1:
            Swal.fire({
                title: `Quase lá!`,
                text: `Você acertou ${correct} questões em ${tempoTotal} segundos!`,
                iconHtml: `<img src="../img/abaque.png" width="150" height="150">`,
                timer: 5000,
                timerProgressBar: true,
            }).then((result) => {
                window.location.replace("http://localhost:5500/curiosidades_final.html");
            })
        break;
        
        default:
            Swal.fire({
                title: `Que pena!`,
                text: `Você errou toas as questões em ${tempoTotal} segundos!`,
                iconHtml: `<img src="../img/scared-removebg-preview.png" width="150" height="150">`,
                timer: 5000,
                timerProgressBar: true,
            }).then((result) => {
                window.location.replace("http://localhost:5500/curiosidades_final.html");
            })
        break;
    }
}
