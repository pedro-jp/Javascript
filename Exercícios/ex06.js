const precoDoCodigo = 
 {
    Hamburguer: 3.00,
    Filé: 4.00,
    Chocolate: 5.50,
    Macarrão: 7.50,
    Feijão: 3.50,
    Fritas: 2.80


}

function valores(codigo, quant) {
    const soma = precoDoCodigo[codigo] * quant
    return soma
}

const resultado = valores('Hamburguer', 4)
console.log('R$',resultado, 'reais')