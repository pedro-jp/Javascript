// Função em js é  First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() {}

// Armazenar em uma variável
const fun2 = function () {}

// Armazenar em um array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar uma função num atributo de objeto 

const obje = {}
obje.soma = function (a, b) {return a + b}
console.log(obje.soma(10, 5))
console.log(obje)

// Passar função como parâmetro

function run(fun) {
    fun()
}
run(function(){console.log('Executando...')})

//Uma função pode retornar/conter uma função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
 soma(2, 5)(3)

 const varTres = soma(2, 5)
 varTres(3)