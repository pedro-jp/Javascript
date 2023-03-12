function calcularNota(nota){
    if (nota == undefined){
        return 'Por favor, insira sua nota!'
    }

    if (nota < 38){
        return 'Reprovado' + ' ' + '(' + nota +')'
    } 

    if (nota >100){
        return 'Insira uma nota válida'
    }
    
    else {
        return 'Aprovado' + ' ' + '(' + nota +')'
    }

    if (nota % 5 === 0){
        return nota
    }

    const diferenca = 5 - (nota % 5)

    if (diferenca <= 2){
        return nota + diferenca
    }
}
console.log(calcularNota(100))