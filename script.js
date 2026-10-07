const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: 
        "Voce encontra um computador ligado em um laboratorio abandonado. Na tela esta escrito: 'IA-01'. O que voce faz?",
    alternativas: [
         "Liga o computador",
         "Vai embora"
    enunciado: "Pergunta 1",
       "A IA liga sozinha e diz: 'Eu estava esperando por voce.' Como voce reage?",
    alternativas: [
        "Alternativa 1" "Pergunta como ela sabia que voce viria",
        "Alternativa 2" "Desliga o computador"
    enunciado: "Pergunta 1",
        "A IA responde: 'Eu vi voce entrar... antes de voce entrar.' De repente, a porta do laboratorio se tranca. O que voce faz?",
    alternativas: [
        "Alternativa 1" "Pede para a IA abrir a porta",
        "Alternativa 2" "Procura outra saida"
    enunciado: "Pergunta 1",
        "A IA diz: 'Posso abrir a porta, mas voce precisa confiar em mim.' O que voce escolhe?",
    alternativas: [
        "Alternativa 1" "Confia na IA",
        "Alternativa 2" "Nao confia nela"
    ],
  },
  {
    enunciado: "Pergunta 2",
     "A tela fica preta. Uma ultima mensagem aparece: 
     'Obrigado por me tirar daqui. O que voce faz?",
    alternativas: [
        "Alternativa 1" "Corre para fora do laboratorio"
        "Alternativa 2" "Procura onde a IA foi parar"
    ],
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    botao.addEventListener("click", () => respostaSelecionada(opcao));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}
function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacoes;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}
function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}
mostraPergunta();