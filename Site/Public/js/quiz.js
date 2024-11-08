
    const listaDeQuestoes = [

        {
            pergunta: "Qual o ano de fundação do Corinthians?",
            alternativaA: "1912",
            alternativaB: "1914",
            alternativaC: "1920",
            alternativaD: "1910",
            alternativaCorreta: "alternativaD"
        },

        {
            pergunta: "Quem é o maior artilheiro da história do Corinthians?",
            alternativaA: "Cláudio Christóvam",
            alternativaB: "Paolo Guerrero",
            alternativaC: "Sócrates",
            alternativaD: "Jô",
            alternativaCorreta: "alternativaA"
        },

        {
            pergunta: "Qual o ano da famosa Democracia Corinthiana?",
            alternativaA: "1977",
            alternativaB: "1982",
            alternativaC: "1980",
            alternativaD: "1990",
            alternativaCorreta: "alternativaB"
        },
        {
            pergunta: "Quantos gols Ronaldo Fênomeno tem com a camisa do Corinthians?",
            alternativaA: "35",
            alternativaB: "50",
            alternativaC: "45",
            alternativaD: "62",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Quem foi o principal jogador da Democracia Corinthiana?",
            alternativaA: "Biro-Biro",
            alternativaB: "Craque Neto",
            alternativaC: "Wladimir",
            alternativaD: "Sócrates",
            alternativaCorreta: "alternativaD"
        },
        {
            pergunta: "Quem fez o gol em 1977 que tirou o Corinthians da fila de 23 anos sem título?",
            alternativaA: "Sócrates",
            alternativaB: "Basílio",
            alternativaC: "Casagrande",
            alternativaD: "Cláudio Christóvam",
            alternativaCorreta: "alternativaB"
        },
        {
            pergunta: "Quem é o jogador que fez os dois gols na final da libertadores em 2012 no Pacaembu?",
            alternativaA: "Emerson Sheik",
            alternativaB: "Romarinho",
            alternativaC: "Danilo",
            alternativaD: "Paolo Guerrero",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Qual o dia de fundação do Corinthians?",
            alternativaA: "23 de maio",
            alternativaB: "04 de abril",
            alternativaC: "01 de setembro",
            alternativaD: "23 de outubro",
            alternativaCorreta: "alternativaC"
        },
        {
            pergunta: "Em que ano o Corinthians ganhou seu primeiro mundial de clubes?",
            alternativaA: "2000",
            alternativaB: "2012",
            alternativaC: "1977",
            alternativaD: "1990",
            alternativaCorreta: "alternativaA"
        },
        {
            pergunta: "Quem é o jogador que tem mais jogos disputados com a camisa do Corinthians?",
            alternativaA: "Cássio Ramos",
            alternativaB: "Fagner",
            alternativaC: "Sócrates",
            alternativaD: "Wladimir",
            alternativaCorreta: "alternativaD"
        }


    ]

    // variáveis globais    
    let numeroDaQuestaoAtual = 0
    let pontuacaoFinal = 0
    let tentativaIncorreta = 0
    let certas = 0
    let erradas = 0
    let quantidadeDeQuestoes = listaDeQuestoes.length
    // let isUltima = numeroDaQuestaoAtual == quantidadeDeQuestoes-1 ? true : false

    function onloadEsconder() {
        document.getElementById('pontuacao').style.display = "none"
        document.getElementById('jogo').style.display = "none"
    }

    function iniciarQuiz() {
        document.getElementById('pontuacao').style.display = "flex"
        document.getElementById('jogo').style.display = "flex"
        document.getElementById('btnIniciarQuiz').style.display = "none"

        document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes

        preencherHTMLcomQuestaoAtual(0)

        btnSubmeter.disabled = false
        btnProx.disabled = true
        // btnConcluir.disabled = true
        btnTentarNovamente.disabled = true
    }

    function preencherHTMLcomQuestaoAtual(index) {
        habilitarAlternativas(true)
        const questaoAtual = listaDeQuestoes[index]
        numeroDaQuestaoAtual = index
        console.log("questaoAtual")
        console.log(questaoAtual)
        document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1 // ajustando porque o index começa em 0
        document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
        document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
        document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
        document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
        document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
    }

    function submeter() {
        const options = document.getElementsByName("option"); // recupera alternativas no html

        let hasChecked = false
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                hasChecked = true
                break
            }
        }

        if (!hasChecked) {
            alert("Não há alternativas escolhidas. Escolha uma opção.")
        } else {
            btnSubmeter.disabled = true
            btnProx.disabled = false

            habilitarAlternativas(false)

            checarResposta()
        }
    }

    function habilitarAlternativas(trueOrFalse) {
        let opcaoEscolhida = trueOrFalse ? false : true

        primeiraOpcao.disabled = opcaoEscolhida
        segundaOpcao.disabled = opcaoEscolhida
        terceiraOpcao.disabled = opcaoEscolhida
        quartaOpcao.disabled = opcaoEscolhida

    }

    function avancar() {
        btnProx.disabled = true
        btnSubmeter.disabled = false

        desmarcarRadioButtons()

        if (numeroDaQuestaoAtual < quantidadeDeQuestoes - 1) {
            preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
        } else if (numeroDaQuestaoAtual == quantidadeDeQuestoes - 1) {
            alert("Atenção... a próxima é a ultima questão!")
            preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
        } else {
            finalizarJogo()
        }
        limparCoresBackgroundOpcoes()
    }

    function tentarNovamente() {
        // atualiza a página
        window.location.reload()
    }

    function checarResposta() {
        const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual] // questão atual 
        const respostaQuestaoAtual = questaoAtual.alternativaCorreta // qual é a resposta correta da questão atual

        const options = document.getElementsByName("option"); // recupera alternativas no html

        let alternativaCorreta = null // variável para armazenar a alternativa correta

        options.forEach((option) => {
            if (option.value === respostaQuestaoAtual) {
                console.log("alternativaCorreta está no componente: " + alternativaCorreta)
                alternativaCorreta = option.labels[0].id
            }
        })

        // verifica se resposta assinalada é correta
        options.forEach((option) => {
            if (option.checked === true && option.value === respostaQuestaoAtual) {
                document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
                pontuacaoFinal++
                certas++
                document.getElementById("spanCertas").innerHTML = certas
                numeroDaQuestaoAtual++
            } else if (option.checked && option.value !== respostaQuestaoAtual) {
                const wrongLabelId = option.labels[0].id

                document.getElementById(wrongLabelId).classList.add("text-danger-with-bg")
                document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
                tentativaIncorreta++
                erradas++
                document.getElementById("spanErradas").innerHTML = erradas
                numeroDaQuestaoAtual++
            }
        })
    }

    function limparCoresBackgroundOpcoes() {
        const options = document.getElementsByName("option");
        options.forEach((option) => {
            document.getElementById(option.labels[0].id).classList.remove("text-danger-with-bg")
            document.getElementById(option.labels[0].id).classList.remove("text-success-with-bg")
        })
    }

    function desmarcarRadioButtons() {
        const options = document.getElementsByName("option");
        for (let i = 0; i < options.length; i++) {
            options[i].checked = false;
        }
    }

    function finalizarJogo() {
        let textoParaMensagemFinal = null
        let classComCoresParaMensagemFinal = null
        const porcentagemFinalDeAcertos = pontuacaoFinal / quantidadeDeQuestoes

        if (porcentagemFinalDeAcertos <= 0.3) {
            textoParaMensagemFinal = "Parece que você não estudou..."
            classComCoresParaMensagemFinal = "text-danger-with-bg"
        }
        else if (porcentagemFinalDeAcertos > 0.3 && porcentagemFinalDeAcertos < 0.9) {
            textoParaMensagemFinal = "Pode melhorar na próxima, hein!"
            classComCoresParaMensagemFinal = "text-warning-with-bg"
        }
        else if (porcentagemFinalDeAcertos >= 0.9) {
            textoParaMensagemFinal = "Uau, parabéns!"
            classComCoresParaMensagemFinal = "text-success-with-bg"
        }

        textoParaMensagemFinal += "<br> Você acertou " + Math.round((porcentagemFinalDeAcertos)*100) + "% das questões."


        document.getElementById('msgFinal').innerHTML = textoParaMensagemFinal
        document.getElementById('msgFinal').classList.add(classComCoresParaMensagemFinal) 
        document.getElementById('spanPontuacaoFinal').innerHTML = pontuacaoFinal

        document.getElementById('jogo').classList.add("text-new-gray") 

        btnProx.disabled = true
        btnSubmeter.disabled = true
        // btnConcluir.disabled = true
        btnTentarNovamente.disabled = false

    }
