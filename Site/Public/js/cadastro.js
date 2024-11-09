function cadastrar() {
    var nome = document.getElementById("input_nome")
    var email = document.getElementById("input_email")
    var senha = document.getElementById("input_senha")
    var confirmaSenha = document.getElementById("input_confirmar_senha")
    var telefone = document.getElementById("input_telefone")

    if(
        nome == "" ||
        email == "" ||
        senha == "" ||
        confirmaSenha == "" ||
        telefone == ""
    ) {
        cardErro.style.display = "block";
      mensagem_erro.innerHTML =
        "(Mensagem de erro para todos os campos em branco)";

      finalizarAguardar();
      return false;
    } else {
      setInterval(sumirMensagem, 5000);
    }
}

function sumirMensagem() {
    cardErro.style.display = "none";
}
