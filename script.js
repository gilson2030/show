const perguntas = [
    {
        pergunta: "Qual das opções é uma operação matemática fundamental?",
        alternativas: ["Derivada", "Multiplicação", "Logaritmo", "Interseção"],
        correta: 1
    },
    {
        pergunta: "Qual é o resultado de uma soma?",
        alternativas: ["Produto", "Diferença", "Total", "Quociente"],
        correta: 2
    },
    {
        pergunta: "Qual expressão é um exemplo de produto notável?",
        alternativas: ["a + b", "(a + b)²", "ab - c", "a² + b²"],
        correta: 1
    },
    {
        pergunta: "Uma equação do 1º grau pode ter:",
        alternativas: [
            "Duas raízes reais distintas",
            "Uma única solução",
            "Três soluções",
            "Nenhuma solução"
        ],
        correta: 1
    },
    {
        pergunta: "O que define uma equação do 2º grau?",
        alternativas: [
            "Ter apenas incógnita",
            "Ter a incógnita elevada ao quadrado",
            "Ter incógnita elevada ao cubo",
            "Não possuir incógnita"
        ],
        correta: 1
    },
    {
        pergunta: "O Teorema de Pitágoras relaciona:",
        alternativas: [
            "O raio e o diâmetro de um círculo",
            "Os lados de um triângulo retângulo",
            "O perímetro de um quadrado",
            "O volume de um cubo"
        ],
        correta: 1
    },
    {
        pergunta: "Qual destas figuras possui todos os lados iguais e todos os ângulos retos?",
        alternativas: [
            "Triângulo isósceles",
            "Retângulo",
            "Quadrado",
            "Trapézio"
        ],
        correta: 2
    },
    {
        pergunta: "O gráfico de uma função do 1º grau é sempre:",
        alternativas: [
            "Uma parábola",
            "Uma reta",
            "Uma curva fechada",
            "Um círculo"
        ],
        correta: 1
    },
    {
        pergunta: "O Teorema de Tales é utilizado principalmente para:",
        alternativas: [
            "Calcular áreas de figuras planas",
            "Dividir segmentos proporcionais",
            "Determinar volume de sólidos",
            "Somar ângulos"
        ],
        correta: 1
    },
    {
        pergunta: "A fatoração de um número ou expressão consiste em:",
        alternativas: [
            "Somar os fatores",
            "Multiplicar todos os termos",
            "Escrever como produto de fatores menores",
            "Dividir pelo maior divisor"
        ],
        correta: 2
    },
    {
        pergunta: "O símbolo √ representa:",
        alternativas: [
            "Potenciação",
            "Radiciação",
            "Fatoração",
            "Multiplicação"
        ],
        correta: 1
    },
    {
        pergunta: "O discriminante (Δ) de uma equação do 2º grau serve para:",
        alternativas: [
            "Indicar o número de soluções reais",
            "Determinar o coeficiente angular",
            "Identificar as raízes cúbicas",
            "Calcular o perímetro"
        ],
        correta: 0
    },
    {
        pergunta: "Na função do 1º grau f(x) = ax + b, o termo 'a' representa:",
        alternativas: [
            "O intercepto no eixo y",
            "A inclinação da reta",
            "O valor mínimo da função",
            "O ponto de máximo"
        ],
        correta: 1
    },
    {
        pergunta: "O quadrado da soma (a + b)² é igual a:",
        alternativas: [
            "a² + 2ab + b²",
            "a² - 2ab + b²",
            "a² + ab + b²",
            "a² + b²"
        ],
        correta: 0
    },
    {
        pergunta: "Em um triângulo retângulo, o lado oposto ao ângulo reto é chamado de:",
        alternativas: [
            "Altura",
            "Cateto",
            "Base",
            "Hipotenusa"
        ],
        correta: 3
    },
    {
        pergunta: "Segundo o Teorema de Tales, se retas paralelas cortam duas transversais, os segmentos formados são:",
        alternativas: [
            "Equivalentes",
            "Proporcionais",
            "Inexistentes",
            "Igualmente inclinados"
        ],
        correta: 1
    },
    {
        pergunta: "A fatoração de a² - b² resulta em:",
        alternativas: [
            "(a + b)",
            "(a + b)²",
            "(a + b)(a - b)",
            "(a - b)²"
        ],
        correta: 2
    },
    {
        pergunta: "A raiz quadrada de um número só existe nos reais se:",
        alternativas: [
            "O número for negativo",
            "O número for inteiro",
            "O número for positivo ou zero",
            "O número for decimal"
        ],
        correta: 2
    },
    {
        pergunta: "Um trapézio é uma figura que possui:",
        alternativas: [
            "Todos os lados iguais",
            "Apenas um par de lados paralelos",
            "Todos os ângulos retos",
            "Dois pares de lados paralelos"
        ],
        correta: 1
    },
    {
        pergunta: "O produto (a + b)(a - b) resulta em:",
        alternativas: [
            "a² + b²",
            "a² - b²",
            "a² + 2ab + b²",
            "a² - 2ab + b²"
        ],
        correta: 1
    }
];

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
        progressEl.textContent = `Pontuação: ${score} / 20 | Erros: ${erros} / 2`;
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
        progressEl.textContent = `Pontuação final: ${score} / ${perguntas.length} | Erros: ${erros} / 2`;
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
        btn.onclick = () => confirmarResposta(i, btn);
        answersEl.appendChild(btn);
    });

    progressEl.textContent = `Pontuação: ${score} / ${perguntas.length} | Erros: ${erros} / 2`;
    btnPular.disabled = pulosRestantes <= 0;
    btnCartas.disabled = cartasRestantes <= 0;
    btnUniversitarios.disabled = universitariosRestantes <= 0;
    btnPular.textContent = `Pular (${pulosRestantes})`;
    btnCartas.textContent = `Cartas (${cartasRestantes})`;
    btnUniversitarios.textContent = `Universitários (${universitariosRestantes})`;
}

function confirmarResposta(escolhida, botao) {
    if (!podeResponder) return;
    podeResponder = false;
    const correta = perguntas[indicePergunta].correta;
    const botoes = document.querySelectorAll('.answer-btn');

    // Pisca a correta!
    botoes[correta].classList.add("piscar");

    botoes.forEach(btn => btn.disabled = true);

    setTimeout(() => {
        botoes[correta].classList.remove("piscar");
        botoes[correta].style.background = "#26c700";
        if (escolhida === correta) {
            score++;
            setTimeout(() => {
                indicePergunta++;
                renderPergunta();
            }, 700);
        } else {
            botoes[escolhida].style.background = "#e32527";
            erros++;
            if (erros >= errosPermitidos) {
                renderPergunta(); // Mostra desclassificado
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
        // Elimina duas alternativas erradas aleatórias
        let indicesErrados = [0,1,2,3].filter(i => i !== correta);
        indicesErrados = shuffle(indicesErrados).slice(0, 2);
        indicesErrados.forEach(i => {
            botoes[i].style.visibility = "hidden";
        });
    } else if (tipo === 'universitarios' && universitariosRestantes > 0) {
        universitariosRestantes--;
        const correta = perguntas[indicePergunta].correta;
        finalMessageEl.textContent = `Universitários sugerem: Alternativa ${correta + 1}`;
        setTimeout(() => {
            finalMessageEl.textContent = "";
        }, 1800);
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
