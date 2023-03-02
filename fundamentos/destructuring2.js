//Todos são destructuring, pois estão á esquerda expressão, se estivessem sem as crases á esquerda seriam apenas as variáveis das arrays

const [a] = [10]
console.log(a)//Tem nem o que falar

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //É só ler, cara
console.log(n1, n3, n5, n6)

const [[, nota1], [, nota2]] = [[, 8, 8], [9, 6, 8]] //É difícil de ler mas dá para entender
console.log(nota1)
console.log(nota2)
