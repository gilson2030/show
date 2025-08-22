// ----- 20 questões (versão mais difícil) -----
const perguntas = [
  {
    pergunta: "Qual identidade expressa corretamente o cubo da soma?",
    alternativas: [
      "(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3",
      "(a + b)^3 = a^3 + a^2b + ab^2 + b^3",
      "(a + b)^3 = a^3 - 3a^2b + 3ab^2 - b^3",
      "(a + b)^3 = (a + b)(a^2 + b^2)"
    ],
    correta: 0
  },
  {
    pergunta: "A equação linear ax + b = cx + d NÃO tem solução (conjunto vazio) quando:",
    alternativas: [
      "a = c e b = d",
      "a = c e b ≠ d",
      "a ≠ c e b = d",
      "a ≠ c e b ≠ d"
    ],
    correta: 1
  },
  {
    pergunta: "Uma equação do 2º grau tem duas raízes reais e distintas quando:",
    alternativas: [
      "Δ = 0",
      "Δ < 0",
      "Δ > 0",
      "b = 0"
    ],
    correta: 2
  },
  {
    pergunta: "Qual afirmação é o converso correto do Teorema de Pitágoras?",
    alternativas: [
      "Se três lados são proporcionais, o triângulo é retângulo.",
      "Se o quadrado do maior lado é igual à soma dos quadrados dos outros dois, o triângulo é retângulo.",
      "Se a soma de dois lados é maior que o terceiro, o triângulo é retângulo.",
      "Se um ângulo é reto, a soma dos lados é constante."
    ],
    correta: 1
  },
  {
    pergunta: "Em um losango, as diagonais são:",
    alternativas: [
      "Paralelas e de mesmo comprimento.",
      "Perpendiculares e bissetam os ângulos internos.",
      "Sempre iguais, mas não se cruzam no meio.",
      "Coincidentes."
    ],
    correta: 1
  },
  {
    pergunta: "Sobre a função do 1º grau f(x) = ax + b, é correto afirmar que:",
    alternativas: [
      "Se a > 0, é decrescente; se a < 0, é constante.",
      "Se a > 0, é crescente; se a < 0, é decrescente; se a = 0, é constante.",
      "Se a = 0, a reta é vertical.",
      "O sinal de a não influencia o crescimento."
    ],
    correta: 1
  },
  {
    pergunta: "Traçar, num triângulo, uma reta paralela a um lado que intercepte os outros dois lados implica que:",
    alternativas: [
      "Os ângulos internos duplicam.",
      "Os triângulos formados são semelhantes ao original.",
      "O perímetro permanece inalterado.",
      "A área do triângulo menor é igual à do maior."
    ],
    correta: 1
  },
  {
    pergunta: "O que caracteriza um trinômio quadrado perfeito?",
    alternativas: [
      "O termo do meio é o produto dos outros dois termos.",
      "O 1º e o último termos são quadrados perfeitos e o termo do meio é o dobro do produto de suas raízes quadradas.",
      "Todos os coeficientes são múltiplos de 3.",
      "Possui três raízes reais distintas."
    ],
    correta: 1
  },
  {
    pergunta: "Nos reais, a igualdade √(a^2) é igual a:",
    alternativas: [
      "a",
      "|a|",
      "-a",
      "a^2"
    ],
    correta: 1
  },
  {
    pergunta: "Sem parênteses, a ordem correta de prioridade das operações é:",
    alternativas: [
      "Multiplicação/Divisão → Potências/Raízes → Adição/Subtração",
      "Potências/Raízes → Multiplicação/Divisão → Adição/Subtração",
      "Adição/Subtração → Potências/Raízes → Multiplicação/Divisão",
      "Sempre da esquerda para a direita, sem exceção"
    ],
    correta: 1
  },
  {
    pergunta: "Na forma ax^2 + bx + c = 0, se a = 0 então:",
    alternativas: [
      "Continua sendo do 2º grau desde que b ≠ 0.",
      "Deixa de ser do 2º grau e passa a ser uma equação do 1º grau.",
      "Não possui solução nos reais.",
      "Passa a ser do 3º grau."
    ],
    correta: 1
  },
  {
    pergunta: "Em qualquer paralelogramo, as diagonais:",
    alternativas: [
      "São sempre perpendiculares.",
      "São sempre congruentes (mesmo comprimento).",
      "Interceptam-se nos pontos médios (uma bisseta a outra).",
      "Nunca se cruzam."
    ],
    correta: 2
  },
  {
    pergunta: "Comparando o quadrado do maior lado com a soma dos quadrados dos outros dois, pode-se concluir que:",
    alternativas: [
      "Se c^2 < a^2 + b^2, o triângulo é obtusângulo.",
      "Se c^2 = a^2 + b^2, o triângulo é acutângulo.",
      "Essa comparação permite classificar o triângulo em acutângulo, retângulo ou obtusângulo.",
      "Essa comparação decide apenas se o triângulo é isósceles."
    ],
    correta: 2
  },
  {
    pergunta: "A raiz (ou zero) de uma função do 1º grau é, geometricamente:",
    alternativas: [
      "O ponto onde a função atinge o valor máximo.",
      "Todo ponto onde a reta cruza o eixo y.",
      "O valor de x que zera a função; ponto onde a reta cruza o eixo x.",
      "O coeficiente angular da reta."
    ],
    correta: 2
  },
  {
    pergunta: "Para aplicar corretamente o Teorema de Tales é indispensável que:",
    alternativas: [
      "As transversais sejam concorrentes em um mesmo ponto.",
      "Os segmentos cortados tenham medidas iguais.",
      "Haja retas paralelas cortadas por transversais.",
      "O triângulo considerado seja isósceles."
    ],
    correta: 2
  },
  {
    pergunta: "A fatoração da soma de cubos está CORRETA em:",
    alternativas: [
      "a^3 + b^3 = (a + b)(a^2 - ab + b^2)",
      "a^3 + b^3 = (a + b)(a^2 + ab + b^2)",
      "a^3 + b^3 = (a - b)(a^2 - ab + b^2)",
      "a^3 + b^3 = (a + b)(a^2 + b^2)"
    ],
    correta: 0
  },
  {
    pergunta: "A igualdade √a · √b = √(ab), com índice par, é válida quando:",
    alternativas: [
      "Para quaisquer a e b reais.",
      "Para a ≥ 0 e b ≥ 0.",
      "Somente quando a = b.",
      "Nunca é válida."
    ],
    correta: 1
  },
  {
    pergunta: "O desenvolvimento correto do quadrado da diferença é:",
    alternativas: [
      "(a - b)^2 = a^2 + 2ab + b^2",
      "(a - b)^2 = a^2 - 2ab + b^2",
      "(a - b)^2 = a^2 - b^2",
      "(a - b)^2 = (a - b)(a + b)"
    ],
    correta: 1
  },
  {
    pergunta: "A equação linear ax + b = cx + d possui infinitas soluções quando:",
    alternativas: [
      "a = c e b = d",
      "a = c e b ≠ d",
      "a ≠ c e b = d",
      "a ≠ c e b ≠ d"
    ],
    correta: 0
  },
  {
    pergunta: "Qual figura plana possui exatamente um eixo de simetria?",
    alternativas: [
      "Triângulo isósceles",
      "Triângulo escaleno",
      "Retângulo",
      "Círculo"
    ],
    correta: 0
  }
];

// ----- Lógica do jogo (inalterada) -----
let indicePergunta = 0;
let pulosRestantes = 2;
let cartasRestantes = 2;
let universitariosRestantes = 2;
let podeResponder = true;
let score = 0;
let erros = 0;
const errosPermitidos = 2;

const questionNumberEl = document.getElementById('questionNumber');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const progressEl = document.getElementById('progress');
const finalMessageEl = document.getElementById('finalMessage');
const btnPular = document.getElementById('btnPular');
const btnCartas = document.getElementById('btnCartas');
const btnUniversitarios = document.getElementById('btnUniversitarios');

function renderPergunta() {
  podeResponder = true;
  finalMessageEl.textContent = "";

  if (indicePergunta >= perguntas.length) {
    finalMessageEl.textContent = `Parabéns! Você completou o Show de Matemática!`;
    answersEl.innerHTML = "";
    questionEl.textContent = "";
    questionNumberEl.textContent = "";
    progressEl.textContent = `Pontuação: ${score} / ${perguntas.length} | Erros: ${erros} / ${errosPermitidos}`;
    btnPular.disabled = true;
    btnCartas.disabled = true;
    btnUniversitarios.disabled = true;
    return;
  }
  if (erros >= errosPermitidos) {
    finalMessageEl.textContent = "Você foi desclassificado(a) por atingir o número máximo de erros!";
    answersEl.innerHTML = "";
    questionEl.textContent = "";
    questionNumberEl.textContent = "";
    progressEl.textContent = `Pontuação final: ${score} / ${perguntas.length} | Erros: ${erros} / ${errosPermitidos}`;
    btnPular.disabled = true;
    btnCartas.disabled = true;
    btnUniversitarios.disabled = true;
    return;
  }

  const q = perguntas[indicePergunta];
  questionNumberEl.textContent = `Pergunta ${indicePergunta + 1} de ${perguntas.length}`;
  questionEl.textContent = q.pergunta;

  answersEl.innerHTML = "";
  q.alternativas.forEach((alt, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.innerHTML = `<span class="answer-number">${i + 1}</span> ${alt}`;
    btn.onclick = () => confirmarResposta(i);
    answersEl.appendChild(btn);
  });

  progressEl.textContent = `Pontuação: ${score} / ${perguntas.length} | Erros: ${erros} / ${errosPermitidos}`;
  btnPular.disabled = pulosRestantes <= 0;
  btnCartas.disabled = cartasRestantes <= 0;
  btnUniversitarios.disabled = universitariosRestantes <= 0;
  btnPular.textContent = `Pular (${pulosRestantes})`;
  btnCartas.textContent = `Cartas (${cartasRestantes})`;
  btnUniversitarios.textContent = `Universitários (${universitariosRestantes})`;
}

function confirmarResposta(escolhida) {
  if (!podeResponder) return;
  podeResponder = false;

  const correta = perguntas[indicePergunta].correta;
  const botoes = document.querySelectorAll('.answer-btn');

  // piscar a correta
  botoes[correta].classList.add('piscar');
  botoes.forEach(btn => (btn.disabled = true));

  setTimeout(() => {
    botoes[correta].classList.remove('piscar');
    botoes[correta].style.background = '#26c700';

    if (escolhida === correta) {
      score++;
      setTimeout(() => {
        indicePergunta++;
        renderPergunta();
      }, 700);
    } else {
      botoes[escolhida].style.background = '#e32527';
      erros++;
      if (erros >= errosPermitidos) {
        renderPergunta(); // mostra desclassificação
      } else {
        setTimeout(() => {
          indicePergunta++;
          renderPergunta();
        }, 900);
      }
    }
  }, 1200);
}

function useHelp(tipo) {
  if (!podeResponder) return;
  const botoes = document.querySelectorAll('.answer-btn');

  if (tipo === 'pular' && pulosRestantes > 0) {
    pulosRestantes--;
    indicePergunta++;
    renderPergunta();
  } else if (tipo === 'cartas' && cartasRestantes > 0) {
    cartasRestantes--;
    const correta = perguntas[indicePergunta].correta;
    let indicesErrados = [0, 1, 2, 3].filter(i => i !== correta);
    indicesErrados = shuffle(indicesErrados).slice(0, 2);
    indicesErrados.forEach(i => {
      botoes[i].style.visibility = 'hidden';
    });
  } else if (tipo === 'universitarios' && universitariosRestantes > 0) {
    universitariosRestantes--;
    const correta = perguntas[indicePergunta].correta;
    finalMessageEl.textContent = `Universitários sugerem: Alternativa ${correta + 1}`;
    setTimeout(() => (finalMessageEl.textContent = ""), 1800);
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

renderPergunta();
