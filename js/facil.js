var tempoInicial;
var tempo = 4;
var cronometro;

var answers = [];

const questions = [
    {
        name: null,
        question: "69-2=?",
        options:[
            {
                answer: "67",
                correct: true
            },
            {
                answer: "19",
                correct: false
            },
            {
                answer: "100",
                correct: false
            },
        ]
    },
    {
        name: null,
        question: "77+0=?",
        options:[
            {
                answer: "77",
                correct: true
            },
            {
                answer: "54",
                correct: false
            },
            {
                answer: "12",
                correct: false
            },
        ]
    },
    {
        name: null,
        question: "64-10=?",
        options:[
            {
                answer: "48",
                correct: false
            },
            {
                answer: "20",
                correct: false
            },
            {
                answer: "54",
                correct: true
            },
        ]
    },
    {
        name: null,
        question: "4+9=?",
        options:[
            {
                answer: "10",
                correct: false
            },
            {
                answer: "12",
                correct: false
            },
            {
                answer: "13",
                correct: true
            },
        ]
    },
    {
        name: null,
        question: "9-9=?",
        options:[
            {
                answer: "4",
                correct: false
            },
            {
                answer: "0",
                correct: true
            },
            {
                answer: "1",
                correct: false
            },
        ]
    },
    {
        name: null,
        question: "5+7=?",
        options:[
            {
                answer: "10",
                correct: false
            },
            {
                answer: "11",
                correct: false
            },
            {
                answer: "12",
                correct: true
            },
        ]
    },
    {
        name: null,
        question: "79-9=?",
        options:[
            {
                answer: "78",
                correct: false
            },
            {
                answer: "70",
                correct: true
            },
            {
                answer: "10",
                correct: false
            },
        ]
    },
    {
        name: null,
        question: "50-7=?",
        options:[
            {
                answer: "57",
                correct: false
            },
            {
                answer: "43",
                correct: true
            },
            {
                answer: "14",
                correct: false
            },
        ]
    },
    {
        name: null,
        question: "90+4=?",
        options:[
            {
                answer: "94",
                correct: true
            },
            {
                answer: "86",
                correct: false
            },
            {
                answer: "904",
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
    
    for (let index = 0; index <= 2 ; index++) {
        const elementIndex = Math.floor(Math.random() * questions.length);
        console.log(elementIndex);
        if(questions[elementIndex].name == null){
            console.log(questions[elementIndex]);
            questions[elementIndex].name = "options" + (index+1);
            console.log(questions[elementIndex]);

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

    if(answers.length == 3){
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
        case 3:
            Swal.fire({
                title: `Parabéns!`,
                text: `Você acertou todas as questões em ${tempoTotal} segundos!`,
                iconHtml: `<img src="../img/star_eyes-removebg-preview.png" width="150" height="150">`,
                timer: 5000,
                timerProgressBar: true,
            }).then((result) => {
                localStorage.setItem("tempoTotal", tempoTotal);
                //window.location.replace("http://localhost:5500/curiosidades_final.html");
                window.location.replace("../curiosidades_final.html");
            })
        break;

        case 2:
            Swal.fire({
                title: `Muito bem!`,
                text: `Você acertou ${correct} questões em ${tempoTotal} segundos!`,
                iconHtml: `<img src="../img/thumbs_up-removebg-preview.png" width="150" height="150">`,
                timer: 5000,
                timerProgressBar: true,
            }).then((result) => {
                localStorage.setItem("tempoTotal", tempoTotal);
                //window.location.replace("http://localhost:5500/curiosidades_final.html");
                window.location.replace("../curiosidades_final.html");
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
                localStorage.setItem("tempoTotal", tempoTotal);
                //window.location.replace("http://localhost:5500/curiosidades_final.html");
                window.location.replace("../curiosidades_final.html");
            })
        break;
        
        default:
            Swal.fire({
                title: `Que pena!`,
                text: `Você errou todas as questões em ${tempoTotal} segundos!`,
                iconHtml: `<img src="../img/scared-removebg-preview.png" width="150" height="150">`,
                timer: 5000,
                timerProgressBar: true,
            }).then((result) => {
                localStorage.setItem("tempoTotal", tempoTotal);
                //window.location.replace("http://localhost:5500/curiosidades_final.html");
                window.location.replace("../curiosidades_final.html");
            })
        break;
    }
}
