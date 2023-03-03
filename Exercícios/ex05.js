function numb1(captInicial, taxaDJuros, tempoDAplicacao) {
  const jurosSimples = captInicial * taxaDJuros * tempoDAplicacao
  console.log('O valor ganho será de: R$', jurosSimples, 'reais')
  return jurosSimples
}
//O valor de taxaDJuros deverá ser o de juros mensal
numb1(1000, 0.01, 3)

function numb2(captInicial, taxaDJuros, tempoDAplicacao){

  const jurosSimples = captInicial * taxaDJuros++ * tempoDAplicacao
  console.log('O valor ganho será de: R$', jurosSimples, 'reais')
  return jurosSimples
}

numb2(1000, 0.01, 3)