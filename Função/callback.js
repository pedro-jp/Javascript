const fabrincantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(indice + 1, '.', nome)//adiciona +1 ao indice cada vez que executa o codigo, mostrando o indice e a marca de carro.
}

fabrincantes.forEach(imprimir)
fabrincantes.forEach(fabrincante => console.log(fabrincante))