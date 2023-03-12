//const prod1 = {
//    nome: 'Chocolate',
//    preco: 15,
//
//
//}
//
//const prod2 = {
//    nome: 'Vinho caro',
//    preco: 152,
//
//
//}

//Factory simples

function criarPessoa() {
    return {
        nome: 'Ana',
        sobremome: 'Silva'
    }
}

console.log(criarPessoa())