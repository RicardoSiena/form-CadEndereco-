'use strict'; // ativa o modo restrito
// esse modo faz com o que o JavaScript opere dde forma mais segura e rigorosa, ajudando a evitar erros comuns de programação
/* Consumo de API https://viacep.com.br/ */
 
// FUNÇÃO PARA LIMPAR OS CAMPOS PREENCHIDOS
const limparFormulario = () => {
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('localidade').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('complemento').value = '';
}
 
// verifica se o cep é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);  //verifica se a quantidade de caracteres dentro de CEP é igual á 8
 
// função responsável por preencher o formulário com as informações da API
const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}
 
// Função para consumo de API ViaCEP
const pesquisarCep = async() => {   //principal função que será executada quando for preencher o formúlario
    limparFormulario();   //função para deixar o formúlario em branco para ser preenchido
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
 
    if(cepValido(cep.value)){
        const dados = await fetch(url);  //fetch requisição do viacep e await garante que o feitch responda corretamente no formúlario
        const addres = await dados.json(); //garante que o formato seja json
 
        if(addres.hasOwnProperty('erro')){ //verifica se tem erro no CEP
            alert('CEP não encontrado ')
        }else{
            preencherFormulario(addres);
        }
    }else{
        alert('CEP Incorreto');
    }
}
 
// chama escutador para disparar ação de preenchimento
document.getElementById('cep').addEventListener('focusout', pesquisarCep); //adiciona escutador de eventos