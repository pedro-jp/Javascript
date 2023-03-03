Number.prototype.entre = function (inicio, fim)
{
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) 
{
    if (nota.entre(9, 10))
    {
        console.log('Aprovado com honras')
    } else if (nota.entre(7, 8.99))
    {
        console.log('Aprovado')
    } else if (nota.entre(5, 6.99))
    {
        console.log('Recuperação')
    } else if (nota.entre(0, 4.99)) 
    {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }

}

imprimirResultado(9.5)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(4.9)
imprimirResultado(0)
imprimirResultado(-1)
imprimirResultado(11)