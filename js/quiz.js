// quando clicar no botao comecar, ele vai tirar a opacidadde do textarea e vai ativar o botao finalizar 
// e vai desativar o botao comecar
var tempoInicial;

function comecar() {
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


//------------------------------------------------------------------
let idcontrol = 0;

let questionsDataBase = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115vrwvbjrwu<br>rwwrrf'
		},
		correctAnswer: 'b'
	},
	{
		question: "69/6.9",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	}
];

function gerarnumero(){
	let rnumber = Math.floor(Math.random() * questionsDataBase.length);
	return questionsDataBase[rnumber];

};

var myQuestions = [gerarnumero(), gerarnumero(), gerarnumero()];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('finalizar');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions.length; i++){
			
			// first reset the list of answers
			answers = [];

			// for each available answer...
			for(letter in questions[i].answers){
                idcontrol++
				// ...add an html radio button
				answers.push(
					
                    '<input type="radio" id="res'+idcontrol+'" name="question'+i+'" value="'+letter+'">'+
                    '<label for="res'+idcontrol+'">'
                        + questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="col">'+
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>' + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){
		
		// gather answer containers from our quiz
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		// keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;
		
		// for each question...
		for(var i=0; i<questions.length; i++){

			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			// if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers[i].style.color = 'lightgreen';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show questions right away
	showQuestions(questions, quizContainer);
	
	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
		acertou();
	}

}