//Produto e seus atributos
//prod1 é o produto, .nome, .preco são seus atributos

const prod1 = {} 
prod1.nome/*atributo*/ = 'Celular Caro'
prod1.preço = 7889.9
prod1['Desconto:'] = 0.60
prod1.precoComDesconto = prod1.preço * (1-prod1['Desconto:'])

console.log(prod1)


const prod2 = {
    nome: 'Camisa Polo',
    preco: 120.99,
    tamanho: 'M'

};

console.log(prod2)