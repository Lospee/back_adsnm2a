const Contato = require('./modelo')
const contatos = [];

function adicionarContato(nome, email, telefone){
   
    const novoContato = new Contato(nome, email, telefone);
    contatos.push(novoContato);
}

function listarContatos(){
return contatos;
};

function buscarContato(nome){
    const buscarContato = contatos.find(contato => contato.nome === nome);
  
    return buscarContato

};

function atualizarContato(nome, email, telefone){
   const contato = buscarContato(nome)
   if (contato){
    contato.email= email
    contato.telefone= telefone
   }
};

function removerContato(nome){
   const posicao = contatos.findIndex(contato => contato.nome === nome);
   if (posicao>=0) {
    contatos.splice(posicao,1);
   }
};
module.exports = {adicionarContato, listarContatos, buscarContato, atualizarContato, removerContato};