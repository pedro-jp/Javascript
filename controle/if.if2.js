function teste1(num) 
{
    if(num > 7)
    {
        console.log(num) //use chaves para atribuir mais de um comando ao mesmo if
        console.log('Final')
    }
}

//teste1(6)
//teste1(8)

function teste2(num) 
{
    if(num > 7)
    
        console.log(num) // sem as chaves ele irá interpretar como condição somente o comando depois do if
        console.log('Final') //como está de fora do if, ele será executado em qualquer condição
    
}

//teste2(6)
//teste2(8)