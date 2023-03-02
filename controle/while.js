function getInteiroAleatorioEntre(min, max)
{
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)

}
let opcao = -1 
while (opcao != 0) {
    opcao = getInteiroAleatorioEntre(0, 10)
    console.log('Opção escolhida foi ' + opcao + '.')
}
console.log('Até a próxima')