const readline = require("readline-sync");

const contatoControlador = require('./controlador');

function menu(){
    console.log('1. Adicionar contato')
    console.log('2. Listar contatos')
    console.log('3. Buscar contato')
    console.log('4. Atualizar contato')
    console.log('5. Remover contato')
    console.log('6. Sair')
}

function escolherOpcao(opcao){
    switch(opcao){
        case '1': 
        const nome = readline.question('Entre com o nome do Contato: ')
        const email = readline.question('Entre com o email do Contato: ')
        const telefone = readline.question('Entre com o numero do Contato: ')
        contatoControlador.adicionarContato(nome, email, telefone)

        break;
        case '2': const contatos = contatoControlador.listarContatos();
        contatos.forEach(contato => console.log (contato))
        break;
        case '3':{ 
        const nome = readline.question('Entre com o nome do Contato: ')
        const buscarContato = contatoControlador.buscarContato(nome)
        if(buscarContato) {
            console.log(buscarContato);
        }else{
            console.log('Contato nao localizado')
        
        }
        contatoControlador.buscarContato(nome);
        
        break;
        }
        case '4':{
            const nome = readline.question('Entre com o nome do Contato: ')
            const email = readline.question('Entre com o email do Contato: ')
            const telefone = readline.question('Entre com o numero do Contato: ')
            contatoControlador.atualizarContato(nome, email, telefone);
            


        };
        
        break;
        case '5':{
            const nome = readline.question('Entre com o nome do Contato: ')
            contatoControlador.removerContato(nome);

    

        };
        
        break;
        case '6': ProcessingInstruction.exit(0);
        default: console.log('Opcao invalida');
        }
}
function main(){
    while (true){
        menu ()
        const opcao = readline.question('Entre com uma opcao: ')
        escolherOpcao(opcao)
    }
}
main ()

//const nome = readline.question('Entre com o nome do Contato:');
//const email = readline.question('Entre com o email do contato:');
//const telefone = readline.question('Entre com o telefone do contato:');