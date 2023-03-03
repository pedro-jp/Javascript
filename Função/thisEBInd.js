const pessoa =  { // Nesse caso o this fica com o valor de pessoa(objeto)
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar//Só sei que deu ruim porque o this não é mais pessoa 
falar() // conflito entre paradigmas: funcional e oo

const falarDePessoa = pessoa.falar.bind(pessoa) // a função bind direciona o this para o objeto certo
falarDePessoa()
