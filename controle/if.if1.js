function soBoaNoticia(nota)
{
    if (nota>= 7){
        console.log('Aprovado com ' + nota)
    }
    if (nota < 7) {
        console.log('Você ficou de recuperação, sua média foi ' + nota)
    }
    
} 

//soBoaNoticia(6)

function seForVerdade(valor)
{
    if(valor) {
        console.log('Não faz sentido iso aí ' + valor)
    }
    else {
        console.log('Tem nada aí')
    }
}
seForVerdade()