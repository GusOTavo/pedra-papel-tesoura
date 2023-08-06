let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const pontuacao_div = document.querySelector(".pontuacao");
const resultado_div = document.querySelector(".resultado");
const pedra_div = document.getElementById("pedra");
const papel_div = document.getElementById("papel");
const tesoura_div = document.getElementById("tesoura");


function pegarEscolhaComputador() {
    const escolhasPossiveis = ['pedra', 'papel', 'tesoura'];
    const numeroAleatorio = Math.floor(Math.random() * 3);

    return escolhasPossiveis[numeroAleatorio];

}

function converterLinguagem(palavra) {
    if (palavra === "pedra") return "Pedra";
    if (palavra === "papel") return "Papel";
    if (palavra === "tesoura") return "Tesoura";
}

function vitoria(escolhaDoJogador, escolhaDoComputador) {
    const nomePequenoJogador = "Você".fontsize(3).sub();
    const nomePequenoComp = "Comp".fontsize(3).sub();
    const escolhaDoJogador_div = document.getElementById(escolhaDoJogador);
    const escolhaDoComputador_div = document.getElementById(escolhaDoComputador);

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    resultado_div.innerHTML = `${converterLinguagem(escolhaDoJogador)}${nomePequenoJogador} acabou com ${converterLinguagem(escolhaDoComputador)}${nomePequenoComp}. Você ganhou! :)`

    escolhaDoJogador_div.classList.add('brilho-verde');
    escolhaDoComputador_div.classList.add('brilho-vermelho');

    setTimeout(() => escolhaDoJogador_div.classList.remove('brilho-verde'), 300)
    setTimeout(() => escolhaDoComputador_div.classList.remove('brilho-vermelho'), 300)
}

function derrota(escolhaDoJogador, escolhaDoComputador) {
    const nomePequenoJogador = "Você".fontsize(3).sub();
    const nomePequenoComp = "Comp".fontsize(3).sub();
    const escolhaDoJogador_div = document.getElementById(escolhaDoJogador);
    const escolhaDoComputador_div = document.getElementById(escolhaDoComputador);

    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    resultado_div.innerHTML = `${converterLinguagem(escolhaDoJogador)}${nomePequenoJogador} foi derrotada por ${converterLinguagem(escolhaDoComputador)}${nomePequenoComp}. Você perdeu... :(`

    escolhaDoJogador_div.classList.add('brilho-vermelho');
    escolhaDoComputador_div.classList.add('brilho-verde');

    setTimeout(() => escolhaDoJogador_div.classList.remove('brilho-vermelho'), 300)
    setTimeout(() => escolhaDoComputador_div.classList.remove('brilho-verde'), 300)
}

function empate(escolhaDoJogador, escolhaDoComputador) {
    const nomePequenoJogador = "Você".fontsize(3).sub();
    const nomePequenoComp = "Comp".fontsize(3).sub();
    const escolhaDoJogador_div = document.getElementById(escolhaDoJogador);

    resultado_div.innerHTML = `${converterLinguagem(escolhaDoJogador)}${nomePequenoJogador} não ganha de ${converterLinguagem(escolhaDoComputador)}${nomePequenoComp}. Empatou. :/`

    escolhaDoJogador_div.classList.add('brilho-cinza');
    setTimeout(() => escolhaDoJogador_div.classList.remove('brilho-cinza'), 300)
}

function jogar(escolhaDoJogador) {
    const escolhaDoComputador = pegarEscolhaComputador();
    switch (escolhaDoJogador + escolhaDoComputador) {
        case 'pedratesoura':
        case 'papelpedra':
        case 'tesourapapel':
            vitoria(escolhaDoJogador, escolhaDoComputador);
            break;
        case 'pedrapapel':
        case 'papeltesoura':
        case 'tesourapedra':
            derrota(escolhaDoJogador, escolhaDoComputador);
            break;
        case 'pedrapedra':
        case 'papelpapel':
        case 'tesouratesoura':
            empate(escolhaDoJogador, escolhaDoComputador);
            break;
    }
}

function principal() {
    pedra_div.addEventListener('click', () => jogar("pedra"))

    papel_div.addEventListener('click', () => jogar("papel"))

    tesoura_div.addEventListener('click', () => jogar("tesoura"))
};

principal();

