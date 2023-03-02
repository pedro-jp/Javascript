const pessoa = 
{
    nome: 'Ana',
    idade: 17,
    endereco:
    {
        logradouro: 'Rua São Paulo',
        numero: 29
    }
}
// Destructuring serve para acessar/pegar desestruturar um objeto {}, ou um array [], podendo pegar o conteudo e até modificá-lo
const {nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { endereco:{ logradouro, numero}} = pessoa
console.log(logradouro, numero)