let valor;//não inicializada | indefinida
console.log(valor);

valor = null; //ausência de valor | valor vazio = 0 | Usada para zerar o valor de uma variável
console.log(valor);
//console.log(valor.toString()) Erro!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // evite atribuir undefined
console.log(produto);

delete produto.preco; //Maneira correta para tirar o atributo de um objeto
console.log(produto);

produto.preco = null // sem valor
console.log(produto)