// animação de contagem regressiva de 3 segundos para o início do jogo 
// e exibição da tela de jogo

// variáveis globais

var tempo = 4;
var intervalo = 1000;
var cronometro;

// função que inicia o cronômetro
function iniciarCronometro() {
    cronometro = setInterval('atualizarCronometro()', intervalo);
}

// função que atualiza o cronômetro
function atualizarCronometro() {
    if (tempo > 1) {
        tempo--;
        document.getElementById('tempo').innerHTML = tempo;
    } else {
        clearInterval(cronometro);
        exibirTelaJogo();
    }
}

// função que exibe a tela de jogo
function exibirTelaJogo() {
    document.getElementById('tela-inicial').style.display = 'none';
    document.getElementById('tela-jogo').style.display = 'block';
}