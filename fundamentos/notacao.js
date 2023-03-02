//console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'bola' //A tal da notação ponto, o recomendado

/*Notação não recomendada*/
obj1['Carro favorito'] = 'Audi RS6' //Não recomendado, porém pode-se utilizar de espaços e demais bereguedets
console.log(obj1)

function Obj(nome)
{
    this.nome = nome
    this.exec = function()
    {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()