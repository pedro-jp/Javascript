let dobro = function (a){
    return 2 * a 
}
//utilizando função arrow
dobro = (a) => {
    return 2 * a
}
//Mais reduzida ainda
dobro = a => 2 * a//return implícito
console.log(dobro(2))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'//Essa reduziu muito, curti
console.log(ola())

ola = _ => 'Olá'
console.log(ola())//Não reduz muita coisa, faz nem diferença essa para a última