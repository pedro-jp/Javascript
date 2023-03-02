{
    {
        {
            {
                var sera = 'Será???' // Variável fora de uma função, poderá ser usada globalmente
            }
        }
    }
}

console.log(sera)

function teste()
{
    var local = 123 // Variável dentro de uma função, só poderá ser utilizada dentro da função
    console.log(local)
}

teste()


