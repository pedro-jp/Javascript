const notas = [ 6.7, 4.7, 2.3, 9.2]
 for( let i in notas){
    console.log(i, notas[i])
 }

 const pessoa = {
    nome: 'ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 56
 }
 for(let atributo in pessoa){
    console.log( atributo + ' = ' + pessoa[atributo])
 }