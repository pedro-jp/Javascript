function getPreco(imposto = 0.10, moeda = 'R$') {
    return moeda +' ' + this.preco * (1 - this.desc) * (1 + imposto)
}
const produto = {
    nome: 'Notebook',
    preco: 3580,
    desc: 0.50,
    getPreco
}

console.log(getPreco()) //Chamando a função diretamente
console.log(produto.getPreco()) //Chamando a função a partir de um objeto

const carro = { preco: 49990, desc: 0.20}
console.log(getPreco.call(carro)) // Chamando a partir do call, passando o objeto
console.log(getPreco.apply(carro)) // Apartir do Apply, passando os parân,etros dentro de um array