function tratarErroELancar(erro)
{
    throw new Error('Algo inesperado aconteceu')
}

function imprimirNomeGritado(obj) 
{

   try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { name: 'Mariaaaaa'}
imprimirNomeGritado(obj)
