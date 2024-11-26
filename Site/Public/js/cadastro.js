function cadastrar() {
    const nome = document.getElementById("input_nome");
    console.log(nome);
    const email = document.getElementById("input_email");
    const senha = document.getElementById("input_senha");
    const confirmarSenha = document.getElementById("input_confirma_senha");

    if (nome === "") {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = `Informe seu nome para continuar`;
        return;
    }

    if (email === "") {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = `Preencha o email para continuar`;
        return;
    }

    if (senha === "") {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = `Insira sua senha para continuar`;
        return;
    }

    if (confirmarSenha === "") {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = `Confirme sua senha para continuar`;
        return;
    }

    if (nome.length < 2) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = `O nome deve ter mais de um caractere`;
        return;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = `Preencha o email corretamente para continuar`;
        return;
    }

    if (senha.length < 8) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = `Sua senha deve conter no mínimo 8 caracteres`;
        return;
    }

    if (confirmarSenha !== senha) {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = `As senhas não coincidem`;
        return;
    }
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}