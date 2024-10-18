// CODIGO DE VALIDAÇÃO DE EMAIL
//===================================================

function checarEmail(){
    

    // Verifica se o campo de e-mail está vazio
    if (document.forms[0].email.value == "" ||

   // ou se não contém o caractere '@'
   document.forms[0].email.value.indexOf('@') == -1 ||

   // ou se não contém o caractere '.'
   document.forms[0].email.value.indexOf('.') == -1 ){

   // Exibe um alerta se o e-mail for inválido
    alert("Por favor, informe um e-mail válido");

    return false;
} else {

   // Exibe um alerta se o e-mail for válido
   alert("Email informado com sucesso")

   // Atualiza o conteúdo do elemento com id 'email' com o valor do e-mail informado
   document.getElementById('email').innerHTML = document.forms[0].email.value;
}
}