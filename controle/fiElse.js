 const imprimirResultado = function(nota)//nota é um parâmetro, só será utilizada nessa função
 {
    if (nota >= 7){
        console.log('Aprovado, sua média final de: ' + nota)
    }
    else{
        console.log('Reprovado')
    }
 }

 imprimirResultado(6)
 //imprimirResultado('ei')//Cuidado!!!