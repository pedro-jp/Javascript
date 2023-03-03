let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global)
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)// o this não é mais this é obj, eu posso escrever this, mas as caracteristicas dele é a do obj agora

let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(obj)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)// a arrow function tem prioridade, mesmo se eu usar o bind, this continuará sendo this nesse caso
comparaComThisArrow(this)