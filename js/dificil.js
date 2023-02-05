var tempoInicial;
var tempo = 4;
var cronometro;

var answers = [];

const questions = [
    {
        name: null,
        question: "-(√9)+4=?",
        options:[
            {
                answer: "1",
                correct: true
            },
            {
                answer: "2",
                correct: false
            },
            {
                answer: "3",
                correct: false
            },
        ]
    },
    {
        name: null,
        question: "3²+4²=?",
        options:[
            {
                answer: "7²",
                correct: false
            },
            {
                answer: "5²",
                correct: true
            },
            {
                answer: "100",
                correct: false
            },
        ]
    },
    {
        name: null,
        question: "x + √25 = 3² Qual o valor de x?",
        options:[
            {
                answer: "(x = 22)",
                correct: false
            },
            {
                answer: "(x = 4)",
                correct: true
            },
            {
                answer: "(x = 32)",
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

    const elementIndex = Math.floor(Math.random() * questions.length);

    questions[elementIndex].name = "options1";

    document.getElementById("question1").innerHTML = questions[elementIndex].question;
            
    document.getElementById(`label1-1`).innerHTML = questions[elementIndex].options[0].answer;
    document.getElementById(`label1-2`).innerHTML = questions[elementIndex].options[1].answer;
    document.getElementById(`label1-3`).innerHTML = questions[elementIndex].options[2].answer;

    document.getElementById(`option1-1`).value = questions[elementIndex].options[0].answer;
    document.getElementById(`option1-2`).value = questions[elementIndex].options[1].answer;
    document.getElementById(`option1-3`).value = questions[elementIndex].options[2].answer;
        
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
        if(questions.find(x => x.name === answer.name).options.find(x => x.answer == answer.answer).correct){
            correct++;
        }else{
            wrong++;
        }
    });

    let tempo = new Date();
    let tempoFinal = tempo.getTime();
    let tempoTotal = (tempoFinal - tempoInicial) / 1000;

    if (correct == 1) {
        Swal.fire({
            title: `Parabéns!`,
            text: `Você acertou todas as questões em ${tempoTotal} segundos!`,
            iconHtml: `<img src="../img/star_eyes-removebg-preview.png" width="150" height="150">`,
            timer: 5000,
            timerProgressBar: true,
        }).then((result) => {
            //window.location.replace("http://localhost:5500/curiosidades_final.html");
            window.location.replace("https://amaple28.github.io/curiosidades_final.html");
        })
    }else{
        Swal.fire({
            title: `Que pena!`,
            text: `Você errou toas as questões em ${tempoTotal} segundos!`,
            iconHtml: `<img src="../img/scared-removebg-preview.png" width="150" height="150">`,
            timer: 5000,
            timerProgressBar: true,
        }).then((result) => {
            //window.location.replace("http://localhost:5500/curiosidades_final.html");
            window.location.replace("https://amaple28.github.io/curiosidades_final.html");
        })
    }
}
