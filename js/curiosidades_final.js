const texts = [
"  Nesse mesmo tempo um computador consegue calcular quantas pessoas um peru de 9 KG alimenta!",
"Nesse mesmo tempo um computador consegue calcular quanto tempo falta para seu aniversário!",
"Nesse mesmo tempo um computador consegue calcular a matriz inversa, a determinante e fazer multiplicações de várias matrizes!",
"Nesse mesmo tempo o processador da máquina consegue completar 2,5 bilhões de ciclos de operações!",

"Nesse mesmo tempo um computador consegue calcular a quanto tempo você está vivo!",

"Nesse mesmo tempo um computador consegue calcular seno, cosseno e tangente dos lados de um triângulo! ",

"Nesse mesmo tempo um computador consegue calcular o logaritmo de um número, números esses que estão na base da programação dos computadores.",

"Nesse mesmo tempo um computador consegue calcular uma função derivada do cálculo, uma fórmula matemática proposta por Newton, utilizada para determinar o movimento dos seres vivos, fórmula com utilidades na ciência da computação, engenharia, medicina, entre outras áreas.",

"Nesse mesmo tempo um computador consegue calcular uma equação Maxwell - Faraday, utilizada nas bases do magnetismo, equação essa que permite que usinas hidrelétricas, turbinas eólicas e até mesmo baterias de carros funcionem.",
]

document.getElementById("titleTime").innerHTML = "Você finalizou em "+localStorage.getItem("tempoTotal") + " segundos!";

document.getElementById("curiosidades").innerHTML = texts[Math.floor(Math.random() * texts.length)];