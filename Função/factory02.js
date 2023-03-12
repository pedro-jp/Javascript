function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2999))
console.log(criarProduto('Ipad', 2500))
console.log(criarProduto('Celular', 500))
console.log(criarProduto('Placa de Vídeo', 9500))