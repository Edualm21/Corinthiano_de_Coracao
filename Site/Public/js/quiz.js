const startGameButton = document.querySelector(".start-quiz")
const questoes = document.querySelector(".questoes")
const resposta = document.querySelector(".respostas")
const perguntas = document.querySelector(".pergunta")
const proximaPergunta = document.querySelector(".next-question")

startGameButton.addEventListener("click", startGame)
proximaPergunta.addEventListener("click", nextQuestion)

var perguntaAtual = 0
var pontos = 0

function startGame() {
    startGameButton.classList.add("hide")
    questoes.classList.remove("hide")
    nextQuestion()
}



function nextQuestion() {
    resetImgs()

    if(listaDeQuestoes.length == perguntaAtual) {
        return finalizarQuiz()
    }

    perguntas.textContent = listaDeQuestoes[perguntaAtual].pergunta
    listaDeQuestoes[perguntaAtual].respostas.forEach(answer => {
        const novaResposta = document.createElement("button")
        novaResposta.classList.add("button", "answer")
        novaResposta.textContent = answer.text
        if(answer.correct) {
            novaResposta.dataset.correct = answer.correct 
        }
        resposta.appendChild(novaResposta)

        novaResposta.addEventListener("click", selecionarResposta)
    });
}

function resetImgs() {
    while(resposta.firstChild) {
        resposta.removeChild(resposta.firstChild)
    }

    document.getElementById("imagem").innerHTML = ""
    document.getElementById("info-usuario").innerHTML = ""
    proximaPergunta.classList.add("hide")
}

function selecionarResposta(event) {
    const respostaClicada = event.target

    if(respostaClicada.dataset.correct) {
        pontos++
        document.getElementById("imagem").innerHTML = `<img src="assets/imgs/Paulinho_contra_o_vasco2012.png">`
          document.getElementById("info-usuario").innerHTML = "Tá sabendo em!"
        } else {
          document.getElementById("imagem").innerHTML = `<img src="assets/imgs/yuri_triste.jpg">`
          document.getElementById("info-usuario").innerHTML = "Essa você errou!"
        }
      
        document.querySelectorAll(".answer").forEach(button => {
            if(button.dataset.correct) {
                button.classList.add("correct")
            } else {
                button.classList.add("incorrect")
            }

            button.disabled = true
        })

        proximaPergunta.classList.remove("hide")
        perguntaAtual++
}

function finalizarQuiz() {
    const qtdPerguntas = listaDeQuestoes.length
    const acertos = pontos 
    var mensagemFinal = ""

    switch(true) {
        case (acertos == 10):
            mensagemFinal = "Corinthiano Fanático!"
            break
        case (acertos >= 7 && acertos <= 9):
            mensagemFinal = "Sabe muito de Corinthians!"
            break
        case (acertos >= 4 && acertos <=6):
            mensagemFinal = "Precisando estudar mais Corinthians em!"
            break
        default:
        mensagemFinal = "Sabe nada de Corinthians"
    }

    questoes.innerHTML = `
        <p class = "msgFinal"> Você acertou ${acertos} de ${qtdPerguntas} perguntas! 
        <span>Restultado: ${mensagemFinal}</span></p> 
        <button onclick = window.location.reload() class = "button">
            Tentar Novamente        
        </button>
        <button onclick = cadastrarPontos(pontos) class = "button" id = "button_insert">
            Ver dashboards
        </button>    
    `
}

function cadastrarPontos(pontos) {
    const idUsuario = sessionStorage.getItem("ID_USUARIO"); // Usando o getItem corretamente
    sessionStorage.setItem("Pontos", pontos); // Armazenando pontos no sessionStorage
    
    if (!idUsuario) {
      console.error("ID do usuário não encontrado.");
      return;
    }
    
    fetch("/quiz/cadastrarPontos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({pontos: pontos, idUsuario: idUsuario}),
    })
    .then((response) => response.json()) 
    .then((data) => {
      console.log("Resposta do servidor:", data);
      if (data.error) {
        console.error("Erro ao cadastrar pontos:", data.error);
      } else {
        console.log("Pontos cadastrados com sucesso:", data);
      }
    })
    .catch((error) => {
      console.error("Erro ao cadastrar pontos:", error);
    });
    window.location.href = `dashboard.html`
  }   

  



const listaDeQuestoes = [

        {
            pergunta: "Qual o ano de fundação do Corinthians?",
            respostas: [
                { text: "1912", correct: false },
                { text: "1914", correct: false },
                { text: "1920", correct: false },
                { text: "1910", correct: true },
            ]
        },
        {
            pergunta: "Quem é o maior artilheiro da história do Corinthians?",
            respostas: [
                { text: "Cláudio Christóvam", correct: true },
                { text: "Paolo Guerrero", correct: false },
                { text: "Sócrates", correct: false },
                { text: "Jô", correct: false },
            ]
        },
        {
            pergunta: "Qual o ano da famosa Democracia Corinthiana?",
            respostas: [
                { text: "1977", correct: false },
                { text: "1982", correct: true },
                { text: "1980", correct: false },
                { text: "1990", correct: false },
            ]
        },
        {
            pergunta: "Quantos gols Ronaldo Fenômeno tem com a camisa do Corinthians?",
            respostas: [
                { text: "35", correct: true },
                { text: "50", correct: false },
                { text: "45", correct: false },
                { text: "62", correct: false },
            ]
        },
        {
            pergunta: "Quem foi o principal jogador da Democracia Corinthiana?",
            respostas: [
                { text: "Biro-Biro", correct: false },
                { text: "Craque Neto", correct: false },
                { text: "Wladimir", correct: false },
                { text: "Sócrates", correct: true },
            ]
        },
        {
            pergunta: "Quem fez o gol em 1977 que tirou o Corinthians da fila de 23 anos sem títulos?",
            respostas: [
                { text: "Sócrates", correct: false },
                { text: "Basílio", correct: true },
                { text: "Casagrande", correct: false },
                { text: "Cláudio Christóvam", correct: false },
            ]
        },
        {
            pergunta: "Quem é o jogador que fez os dois gols na final da Libertadores em 2012 no Pacaembu?",
            respostas: [
                { text: "Emerson Sheik", correct: true },
                { text: "Romarinho", correct: false },
                { text: "Danilo", correct: false },
                { text: "Paolo Guerrero", correct: false },
            ]
        },
        {
            pergunta: "Qual o dia de fundação do Corinthians?",
            respostas: [
                { text: "23 de maio", correct: false },
                { text: "04 de abril", correct: false },
                { text: "01 de setembro", correct: true },
                { text: "23 de outubro", correct: false },
            ]
        },
        {
            pergunta: "Em que ano o Corinthians ganhou seu primeiro mundial de clubes?",
            respostas: [
                { text: "2000", correct: true },
                { text: "2012", correct: false },
                { text: "1977", correct: false },
                { text: "1990", correct: false },
            ]
        },
        {
            pergunta: "Quem é o jogador que tem mais jogos disputados com a camisa do Corinthians?",
            respostas: [
                { text: "Cássio Ramos", correct: false },
                { text: "Fagner", correct: false },
                { text: "Sócrates", correct: false },
                { text: "Wladimir", correct: true },
            ]
        }
]

function irParaDash(){
    window.location.href = "dashboard.html"
}