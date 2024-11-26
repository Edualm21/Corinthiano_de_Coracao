var maiuscula = /[A-Z]/
var minuscula = /[a-z]/
var simbolo = /[!@#$]/
var numerico = /[0-9]/
var senhaForte = false

function cadastrar() {

//Recupere o valor da nova input pelo nome do id
// Agora vá para o método fetch logo abaixo
var nomeVar = input_nome.value;
var emailVar = input_email.value;
var senhaVar = input_senha.value;
var confirmacaoSenhaVar = input_confirmar_senha.value;
var idUsuarioVincular

var temMaiuscula = maiuscula.test(senhaVar)
var temMinuscula = minuscula.test(senhaVar)
var temSimbolo = simbolo.test(senhaVar)
var temNumerico = numerico.test(senhaVar)
var temTamanho = senhaVar.length >= 8

senhaForte = temMaiuscula &&
             temMinuscula &&
             temSimbolo   &&
             temNumerico  &&
             temTamanho

// Verificando se há algum campo em branco
if (nomeVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confirmacaoSenhaVar == ""){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Preencha todos campos para prosseguir!", 
        color: "#50080b"
      });
} else if (senhaVar != confirmacaoSenhaVar) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Senhas digitadas não conferem!",
    color: "#50080b"
  });
  
} else if (senhaForte == false){
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Senha fraca, necessita de 8 caracteres, 1 maiúscula, 1 minuscula, um número e um caracter especial!",
    color: "#50080b"
  });
} else {
    Swal.fire({
    title: "Sucesso!",
    text: "Usuário cadastrado!!",
    icon: "success"
    });

     window.location.href = "login.html"

fetch("/usuarios/cadastrar", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    // crie um atributo que recebe o valor recuperado aqui
    // Agora vá para o arquivo routes/usuario.js
    nomeServer: nomeVar,
    emailServer: emailVar,
    senhaServer: senhaVar,
    idUsuarioServer: idUsuarioVincular
  }),
})
}   
}