'use strict'; //ativa o modo restrito
// Este modo faz com que o javascript opera de forma mais segura e rigorosa, ajudando a evitar erros comuns de programação.
/* consumo de API - https://viacep.com.br/ */
 
//função para limpar campos preenchidos

const limparFormulario = () => {
    document.getElementById ('logradouro').value = '';
    document.getElementById ('bairro').value = '';
    document.getElementById ('localidade').value = '';
    document.getElementById ('uf').value = '';
    document.getElementById ('complemento').value = '';
    document.getElementById ('numero').value = '';
}

// Verifica se o CEP é válido

const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.lenght == 8 && eNumero(cep);

// essa parte faz o preenchimento dos campos de acordo com o CEP digitado, pegando as informações da API

const preencherFormulario = (endereco) => {
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('uf').value = endereco.uf;

}