// Banco de Perguntas por Categoria e Dificuldade
const allQuestions = {
    geral: {
        facil: [
            {
                question: "Quantos jogadores tem em cada time de futebol?",
                answers: [
                    {id: 1, text: "10 jogadores", correct: false},
                    {id: 2, text: "11 jogadores", correct: true},
                    {id: 3, text: "12 jogadores", correct: false},
                    {id: 4, text: "9 jogadores", correct: false},
                ],
                category: "Geral"
            },
            {
                question: "Qual é a cor tradicional do cartão que expulsa um jogador?",
                answers: [
                    {id: 1, text: "Amarelo", correct: false},
                    {id: 2, text: "Vermelho", correct: true},
                    {id: 3, text: "Azul", correct: false},
                    {id: 4, text: "Verde", correct: false},
                ],
                category: "Geral"
            },
            {
                question: "Quantos minutos tem um jogo de futebol oficial?",
                answers: [
                    {id: 1, text: "80 minutos", correct: false},
                    {id: 2, text: "90 minutos", correct: true},
                    {id: 3, text: "100 minutos", correct: false},
                    {id: 4, text: "70 minutos", correct: false},
                ],
                category: "Geral"
            }
        ],
        medio: [
            {
                question: "Qual é o maior artilheiro da história do futebol?",
                answers: [
                    {id: 1, text: "Neymar", correct: false},
                    {id: 2, text: "Pelé", correct: true},
                    {id: 3, text: "Cristiano Ronaldo", correct: false},
                    {id: 4, text: "Messi", correct: false},
                ],
                category: "Geral"
            },
            {
                question: "Qual foi o primeiro brasileiro a ganhar a Bola de Ouro?",
                answers: [
                    {id: 1, text: "Ronaldinho", correct: false},
                    {id: 2, text: "Ronaldo", correct: true},
                    {id: 3, text: "Romário", correct: false},
                    {id: 4, text: "Kaká", correct: false},
                ],
                category: "Geral"
            },
            {
                question: "Em que ano foi realizada a primeira Copa do Mundo?",
                answers: [
                    {id: 1, text: "1920", correct: false},
                    {id: 2, text: "1930", correct: true},
                    {id: 3, text: "1940", correct: false},
                    {id: 4, text: "1950", correct: false},
                ],
                category: "Geral"
            }
        ],
        dificil: [
            {
                question: "Qual técnico tem mais cartões vermelhos na história?",
                answers: [
                    {id: 1, text: "Carlo Ancelotti", correct: false},
                    {id: 2, text: "Pep Guardiola", correct: false},
                    {id: 3, text: "Abel Ferreira", correct: false},
                    {id: 4, text: "Luis Zubeldía", correct: true},
                ],
                category: "Geral"
            },
            {
                question: "Quem é o jogador mais jovem a fazer 400 gols na carreira?",
                answers: [
                    {id: 1, text: "Kylian Mbappé", correct: true},
                    {id: 2, text: "Gareth Bale", correct: false},
                    {id: 3, text: "Endrick Felipe", correct: false},
                    {id: 4, text: "Phil Foden", correct: false},
                ],
                category: "Geral"
            },
            {
                question: "Qual jogador tem mais assistências na história da Champions League?",
                answers: [
                    {id: 1, text: "Lionel Messi", correct: false},
                    {id: 2, text: "Cristiano Ronaldo", correct: true},
                    {id: 3, text: "Xavi Hernández", correct: false},
                    {id: 4, text: "Ryan Giggs", correct: false},
                ],
                category: "Geral"
            }
        ]
    },
    copas: {
        facil: [
            {
                question: "Qual país ganhou mais Copas do Mundo?",
                answers: [
                    {id: 1, text: "Argentina", correct: false},
                    {id: 2, text: "Brasil", correct: true},
                    {id: 3, text: "Alemanha", correct: false},
                    {id: 4, text: "Itália", correct: false},
                ],
                category: "Copas do Mundo"
            },
            {
                question: "Em que país foi realizada a Copa do Mundo de 2014?",
                answers: [
                    {id: 1, text: "Argentina", correct: false},
                    {id: 2, text: "Brasil", correct: true},
                    {id: 3, text: "África do Sul", correct: false},
                    {id: 4, text: "Rússia", correct: false},
                ],
                category: "Copas do Mundo"
            },
            {
                question: "Quantas Copas do Mundo o Brasil já venceu?",
                answers: [
                    {id: 1, text: "4", correct: false},
                    {id: 2, text: "5", correct: true},
                    {id: 3, text: "6", correct: false},
                    {id: 4, text: "3", correct: false},
                ],
                category: "Copas do Mundo"
            }
        ],
        medio: [
            {
                question: "Quem foi o artilheiro da Copa do Mundo de 2018?",
                answers: [
                    {id: 1, text: "Cristiano Ronaldo", correct: false},
                    {id: 2, text: "Harry Kane", correct: true},
                    {id: 3, text: "Romelu Lukaku", correct: false},
                    {id: 4, text: "Antoine Griezmann", correct: false},
                ],
                category: "Copas do Mundo"
            },
            {
                question: "Qual jogador fez o gol mais rápido em Copas do Mundo?",
                answers: [
                    {id: 1, text: "Hakan Şükür", correct: true},
                    {id: 2, text: "Clint Dempsey", correct: false},
                    {id: 3, text: "Emilio Butragueno", correct: false},
                    {id: 4, text: "Bryan Robson", correct: false},
                ],
                category: "Copas do Mundo"
            },
            {
                question: "Em que ano a França venceu sua primeira Copa do Mundo?",
                answers: [
                    {id: 1, text: "1994", correct: false},
                    {id: 2, text: "1998", correct: true},
                    {id: 3, text: "2002", correct: false},
                    {id: 4, text: "2006", correct: false},
                ],
                category: "Copas do Mundo"
            }
        ],
        dificil: [
            {
                question: "Qual foi o placar da final da Copa de 1950 no Maracanã?",
                answers: [
                    {id: 1, text: "Brasil 1 x 2 Uruguai", correct: true},
                    {id: 2, text: "Brasil 2 x 1 Uruguai", correct: false},
                    {id: 3, text: "Brasil 0 x 1 Uruguai", correct: false},
                    {id: 4, text: "Brasil 1 x 1 Uruguai", correct: false},
                ],
                category: "Copas do Mundo"
            },
            {
                question: "Quem foi o técnico da Alemanha na Copa de 2014?",
                answers: [
                    {id: 1, text: "Joachim Löw", correct: true},
                    {id: 2, text: "Jürgen Klinsmann", correct: false},
                    {id: 3, text: "Franz Beckenbauer", correct: false},
                    {id: 4, text: "Rudi Völler", correct: false},
                ],
                category: "Copas do Mundo"
            },
            {
                question: "Quantos jogos Pelé disputou em Copas do Mundo?",
                answers: [
                    {id: 1, text: "12", correct: false},
                    {id: 2, text: "14", correct: true},
                    {id: 3, text: "16", correct: false},
                    {id: 4, text: "18", correct: false},
                ],
                category: "Copas do Mundo"
            }
        ]
    },
    times: {
        facil: [
            {
                question: "Qual time brasileiro tem mais títulos da Libertadores?",
                answers: [
                    {id: 1, text: "São Paulo", correct: false},
                    {id: 2, text: "Flamengo", correct: true},
                    {id: 3, text: "Palmeiras", correct: false},
                    {id: 4, text: "Santos", correct: false},
                ],
                category: "Times"
            },
            {
                question: "Qual é o estádio do Barcelona?",
                answers: [
                    {id: 1, text: "Santiago Bernabéu", correct: false},
                    {id: 2, text: "Camp Nou", correct: true},
                    {id: 3, text: "Wanda Metropolitano", correct: false},
                    {id: 4, text: "Mestalla", correct: false},
                ],
                category: "Times"
            },
            {
                question: "Qual time inglês é conhecido como 'Red Devils'?",
                answers: [
                    {id: 1, text: "Liverpool", correct: false},
                    {id: 2, text: "Manchester United", correct: true},
                    {id: 3, text: "Arsenal", correct: false},
                    {id: 4, text: "Chelsea", correct: false},
                ],
                category: "Times"
            }
        ],
        medio: [
            {
                question: "Quantas Champions League o Real Madrid conquistou?",
                answers: [
                    {id: 1, text: "13", correct: false},
                    {id: 2, text: "15", correct: true},
                    {id: 3, text: "12", correct: false},
                    {id: 4, text: "10", correct: false},
                ],
                category: "Times"
            },
            {
                question: "Qual time brasileiro é conhecido como 'Timão'?",
                answers: [
                    {id: 1, text: "Palmeiras", correct: false},
                    {id: 2, text: "Corinthians", correct: true},
                    {id: 3, text: "São Paulo", correct: false},
                    {id: 4, text: "Santos", correct: false},
                ],
                category: "Times"
            },
            {
                question: "Em que ano o Leicester City ganhou a Premier League?",
                answers: [
                    {id: 1, text: "2014", correct: false},
                    {id: 2, text: "2016", correct: true},
                    {id: 3, text: "2018", correct: false},
                    {id: 4, text: "2012", correct: false},
                ],
                category: "Times"
            }
        ],
        dificil: [
            {
                question: "Qual time tem o recorde de vitórias consecutivas no Brasileirão?",
                answers: [
                    {id: 1, text: "Flamengo", correct: true},
                    {id: 2, text: "Palmeiras", correct: false},
                    {id: 3, text: "São Paulo", correct: false},
                    {id: 4, text: "Santos", correct: false},
                ],
                category: "Times"
            },
            {
                question: "Quantos títulos da Serie A italiana a Juventus possui?",
                answers: [
                    {id: 1, text: "34", correct: false},
                    {id: 2, text: "36", correct: true},
                    {id: 3, text: "32", correct: false},
                    {id: 4, text: "38", correct: false},
                ],
                category: "Times"
            },
            {
                question: "Qual foi o primeiro time brasileiro campeão da Libertadores?",
                answers: [
                    {id: 1, text: "Santos", correct: true},
                    {id: 2, text: "Palmeiras", correct: false},
                    {id: 3, text: "Flamengo", correct: false},
                    {id: 4, text: "São Paulo", correct: false},
                ],
                category: "Times"
            }
        ]
    },
    jogadores: {
        facil: [
            {
                question: "Qual jogador é conhecido como 'CR7'?",
                answers: [
                    {id: 1, text: "Neymar", correct: false},
                    {id: 2, text: "Cristiano Ronaldo", correct: true},
                    {id: 3, text: "Messi", correct: false},
                    {id: 4, text: "Mbappé", correct: false},
                ],
                category: "Jogadores"
            },
            {
                question: "Qual é a nacionalidade de Lionel Messi?",
                answers: [
                    {id: 1, text: "Brasileira", correct: false},
                    {id: 2, text: "Argentina", correct: true},
                    {id: 3, text: "Uruguaia", correct: false},
                    {id: 4, text: "Espanhola", correct: false},
                ],
                category: "Jogadores"
            },
            {
                question: "Em qual time Neymar começou sua carreira?",
                answers: [
                    {id: 1, text: "Flamengo", correct: false},
                    {id: 2, text: "Santos", correct: true},
                    {id: 3, text: "São Paulo", correct: false},
                    {id: 4, text: "Corinthians", correct: false},
                ],
                category: "Jogadores"
            }
        ],
        medio: [
            {
                question: "Quantas Bolas de Ouro Lionel Messi tem?",
                answers: [
                    {id: 1, text: "6", correct: false},
                    {id: 2, text: "8", correct: true},
                    {id: 3, text: "7", correct: false},
                    {id: 4, text: "5", correct: false},
                ],
                category: "Jogadores"
            },
            {
                question: "Qual jogador é conhecido como 'O Fenômeno'?",
                answers: [
                    {id: 1, text: "Romário", correct: false},
                    {id: 2, text: "Ronaldo", correct: true},
                    {id: 3, text: "Ronaldinho", correct: false},
                    {id: 4, text: "Rivaldo", correct: false},
                ],
                category: "Jogadores"
            },
            {
                question: "Qual jogador marcou o gol mais rápido da história das Copas?",
                answers: [
                    {id: 1, text: "Hakan Şükür", correct: true},
                    {id: 2, text: "Miroslav Klose", correct: false},
                    {id: 3, text: "Ronaldo", correct: false},
                    {id: 4, text: "Pelé", correct: false},
                ],
                category: "Jogadores"
            }
        ],
        dificil: [
            {
                question: "Quantos gols Pelé marcou oficialmente na carreira?",
                answers: [
                    {id: 1, text: "1281", correct: false},
                    {id: 2, text: "767", correct: true},
                    {id: 3, text: "1000", correct: false},
                    {id: 4, text: "850", correct: false},
                ],
                category: "Jogadores"
            },
            {
                question: "Qual jogador tem mais partidas pela seleção brasileira?",
                answers: [
                    {id: 1, text: "Cafu", correct: true},
                    {id: 2, text: "Pelé", correct: false},
                    {id: 3, text: "Roberto Carlos", correct: false},
                    {id: 4, text: "Dani Alves", correct: false},
                ],
                category: "Jogadores"
            },
            {
                question: "Em que ano Ronaldinho Gaúcho ganhou sua Bola de Ouro?",
                answers: [
                    {id: 1, text: "2004", correct: false},
                    {id: 2, text: "2005", correct: true},
                    {id: 3, text: "2006", correct: false},
                    {id: 4, text: "2003", correct: false},
                ],
                category: "Jogadores"
            }
        ]
    }
};

// Variáveis globais
const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerText = document.getElementById("timer-text");
const timerProgress = document.getElementById("timer-progress");
const livesDisplay = document.getElementById("lives-display");
const progressFill = document.getElementById("progress-fill");
const questionCounter = document.getElementById("question-counter");

let currentQuestionIndex = 0;
let score = 0;
let lives = 3;
let currentUser = "";
let selectedDifficulty = "facil";
let selectedCategory = "todas";
let questions = [];
let timerInterval;
let timeLeft;
let correctAnswers = 0;
let wrongAnswers = 0;

// Configurações de tempo por dificuldade
const timeSettings = {
    facil: 30,
    medio: 25,
    dificil: 20
};

// Tema escuro
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Carregar preferência de tema
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Funções de Banco de Dados (LocalStorage)
function saveScore(username, score, difficulty, correct, wrong) {
    let rankings = getRankings();
    
    const existingUserIndex = rankings.findIndex(
        r => r.username === username && r.difficulty === difficulty
    );
    
    if (existingUserIndex !== -1) {
        if (score > rankings[existingUserIndex].score) {
            rankings[existingUserIndex].score = score;
            rankings[existingUserIndex].correct = correct;
            rankings[existingUserIndex].wrong = wrong;
            rankings[existingUserIndex].date = new Date().toISOString();
        }
    } else {
        rankings.push({
            username: username,
            score: score,
            difficulty: difficulty,
            correct: correct,
            wrong: wrong,
            date: new Date().toISOString()
        });
    }
    
    localStorage.setItem('quizRankings', JSON.stringify(rankings));
}

function getRankings() {
    const rankings = localStorage.getItem('quizRankings');
    return rankings ? JSON.parse(rankings) : [];
}

function displayRankings(filter = 'all') {
    let rankings = getRankings();
    
    if (filter !== 'all') {
        rankings = rankings.filter(r => r.difficulty === filter);
    }
    
    rankings.sort((a, b) => b.score - a.score);
    
    const rankingList = document.getElementById('ranking-list');
    rankingList.innerHTML = '';
    
    if (rankings.length === 0) {
        rankingList.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">Nenhum registro ainda. Seja o primeiro!</p>';
        return;
    }
    
    rankings.forEach((rank, index) => {
        const item = document.createElement('div');
        item.className = 'ranking-item';
        
        if (index === 0) item.classList.add('top-1');
        if (index === 1) item.classList.add('top-2');
        if (index === 2) item.classList.add('top-3');
        
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';
        const difficultyText = rank.difficulty === 'facil' ? 'Fácil' : 
                               rank.difficulty === 'medio' ? 'Médio' : 'Difícil';
        
        item.innerHTML = `
            <span class="ranking-position">${medal} ${index + 1}º</span>
            <span class="ranking-name">${rank.username}</span>
            <span class="ranking-difficulty">${difficultyText}</span>
            <span class="ranking-score">${rank.score} pts</span>
        `;
        
        rankingList.appendChild(item);
    });
}

function filterRanking(filter) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    displayRankings(filter);
}

function clearRanking() {
    if (confirm('Tem certeza que deseja limpar todo o ranking? Esta ação não pode ser desfeita!')) {
        localStorage.removeItem('quizRankings');
        displayRankings();
        alert('Ranking limpo com sucesso!');
    }
}

// Seletor de dificuldade
document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        selectedDifficulty = this.dataset.difficulty;
    });
});

// Função de Login
function login() {
    const username = document.getElementById('username').value.trim();
    selectedCategory = document.getElementById('category-select').value;
    
    if (username === '') {
        alert('Por favor, digite um nome de usuário!');
        return;
    }
    
    currentUser = username;
    document.getElementById('current-user').textContent = `Jogador: ${currentUser}`;
    
    const diffText = selectedDifficulty === 'facil' ? 'Fácil' : 
                     selectedDifficulty === 'medio' ? 'Médio' : 'Difícil';
    document.getElementById('current-difficulty').textContent = diffText;
    
    showScreen('quiz-screen');
    startQuiz();
}

// Função de Logout
function logout() {
    currentUser = '';
    lives = 3;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    document.getElementById('username').value = '';
    showScreen('login-screen');
}

// Controle de Telas
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Função para mostrar instruções
function showInstructions() {
    showScreen('instructions-screen');
}

// Função para mostrar estatísticas
function showStats() {
    showScreen('stats-screen');
    displayGeneralStats();
}

function displayGeneralStats() {
    const rankings = getRankings();
    const statsDiv = document.getElementById('general-stats');
    
    if (rankings.length === 0) {
        statsDiv.innerHTML = '<p style="text-align: center; color: #666; padding: 40px;">Nenhum dado disponível ainda.</p>';
        return;
    }
    
    const totalGames = rankings.length;
    const totalScore = rankings.reduce((sum, r) => sum + r.score, 0);
    const avgScore = (totalScore / totalGames).toFixed(1);
    const bestScore = Math.max(...rankings.map(r => r.score));
    
    const difficultyCount = {
        facil: rankings.filter(r => r.difficulty === 'facil').length,
        medio: rankings.filter(r => r.difficulty === 'medio').length,
        dificil: rankings.filter(r => r.difficulty === 'dificil').length
    };
    
    statsDiv.innerHTML = `
        <div class="result-stats" style="margin: 30px 0;">
            <div class="stat-box">
                <span class="stat-value">${totalGames}</span>
                <span class="stat-label">Partidas Jogadas</span>
            </div>
            <div class="stat-box">
                <span class="stat-value">${avgScore}</span>
                <span class="stat-label">Pontuação Média</span>
            </div>
            <div class="stat-box">
                <span class="stat-value">${bestScore}</span>
                <span class="stat-label">Melhor Pontuação</span>
            </div>
        </div>
        <h2>📈 Jogos por Dificuldade</h2>
        <div class="result-stats" style="margin: 20px 0;">
            <div class="stat-box">
                <span class="stat-value">${difficultyCount.facil}</span>
                <span class="stat-label">😊 Fácil</span>
            </div>
            <div class="stat-box">
                <span class="stat-value">${difficultyCount.medio}</span>
                <span class="stat-label">🤔 Médio</span>
            </div>
            <div class="stat-box">
                <span class="stat-value">${difficultyCount.dificil}</span>
                <span class="stat-label">🔥 Difícil</span>
            </div>
        </div>
    `;
}

// Funções do Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    lives = 3;
    correctAnswers = 0;
    wrongAnswers = 0;
    nextButton.innerHTML = "Próxima";
    
    questions = getQuestionsByCategory();
    
    if (questions.length === 0) {
        alert('Nenhuma pergunta disponível para esta categoria e dificuldade.');
        logout();
        return;
    }
    
    updateLivesDisplay();
    showQuestion();
}

function getQuestionsByCategory() {
    let selectedQuestions = [];
    
    if (selectedCategory === 'todas') {
        Object.keys(allQuestions).forEach(cat => {
            selectedQuestions = selectedQuestions.concat(
                allQuestions[cat][selectedDifficulty] || []
            );
        });
    } else {
        selectedQuestions = allQuestions[selectedCategory][selectedDifficulty] || [];
    }
    
    return shuffleArray(selectedQuestions).slice(0, 10);
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function resetState() {
    nextButton.style.display = "none";
    clearInterval(timerInterval);
    while (answersButtons.firstChild) {
        answersButtons.removeChild(answersButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    
    questionElement.innerHTML = currentQuestion.question;
    document.getElementById('question-category').textContent = currentQuestion.category;
    
    questionCounter.textContent = `${questionNo}/${questions.length}`;
    progressFill.style.width = `${(questionNo / questions.length) * 100}%`;
    
    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answersButtons.appendChild(button);
    });
    
    startTimer();
}

function startTimer() {
    timeLeft = timeSettings[selectedDifficulty];
    timerText.textContent = timeLeft;
    
    const circumference = 2 * Math.PI * 35;
    timerProgress.style.strokeDasharray = circumference;
    timerProgress.style.strokeDashoffset = 0;
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerText.textContent = timeLeft;
        
        const offset = circumference - (timeLeft / timeSettings[selectedDifficulty]) * circumference;
        timerProgress.style.strokeDashoffset = offset;
        
        if (timeLeft <= 5) {
            timerProgress.style.stroke = '#dc3545';
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    wrongAnswers++;
    lives--;
    updateLivesDisplay();
    
    const correctAnswer = questions[currentQuestionIndex].answers.find(a => a.correct);
    
    Array.from(answersButtons.children).forEach((button) => {
        button.disabled = true;
        if (button.dataset.id == correctAnswer.id) {
            button.classList.add("correct");
        }
    });
    
    if (lives <= 0) {
        setTimeout(() => showScore(), 1500);
    } else {
        nextButton.style.display = "block";
    }
}

function selectAnswer(e) {
    clearInterval(timerInterval);
    
    const answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.find(answer => answer.correct);
    
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
    
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        correctAnswers++;
        
        const timeBonus = Math.floor(timeLeft / 2);
        const difficultyMultiplier = selectedDifficulty === 'facil' ? 1 : 
                                     selectedDifficulty === 'medio' ? 1.5 : 2;
        score += Math.floor((10 + timeBonus) * difficultyMultiplier);
    } else {
        selectedBtn.classList.add("incorrect");
        wrongAnswers++;
        lives--;
        updateLivesDisplay();
    }
    
    Array.from(answersButtons.children).forEach((button) => {
        button.disabled = true;
        if (button.dataset.id == correctAnswer.id) {
            button.classList.add("correct");
        }
    });
    
    if (lives <= 0) {
        setTimeout(() => showScore(), 1500);
    } else {
        nextButton.style.display = "block";
    }
}

function updateLivesDisplay() {
    const hearts = '❤️'.repeat(lives) + '🖤'.repeat(3 - lives);
    livesDisplay.textContent = hearts;
}

function showScore() {
    saveScore(currentUser, score, selectedDifficulty, correctAnswers, wrongAnswers);
    
    showScreen('result-screen');
    
    const totalQuestions = correctAnswers + wrongAnswers;
    const accuracy = totalQuestions > 0 ? ((correctAnswers / totalQuestions) * 100).toFixed(1) : 0;
    
    const scoreDisplay = document.getElementById('score-display');
    let message = '';
    
    if (accuracy >= 80) {
        message = '🎉 Excelente! Você é um expert em futebol!';
    } else if (accuracy >= 60) {
        message = '👏 Muito bem! Bom conhecimento sobre futebol!';
    } else if (accuracy >= 40) {
        message = '👍 Bom trabalho! Continue estudando!';
    } else {
        message = '💪 Continue tentando! A prática leva à perfeição!';
    }
    
    scoreDisplay.innerHTML = `
        ${message}<br><br>
        <strong>${currentUser}</strong><br>
        Você acertou ${correctAnswers} de ${totalQuestions} questões!<br>
        <span style="font-size: 18px; color: #666;">Pontuação: ${score} pontos</span>
    `;
    
    document.getElementById('correct-answers').textContent = correctAnswers;
    document.getElementById('wrong-answers').textContent = wrongAnswers;
    document.getElementById('accuracy').textContent = accuracy + '%';
    
    displayRankings();
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function restartQuiz() {
    showScreen('quiz-screen');
    startQuiz();
}

// Event Listener do botão Next
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
});

// Permite login com Enter
document.getElementById('username').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        login();
    }
});