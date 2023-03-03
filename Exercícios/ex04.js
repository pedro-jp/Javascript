function calc(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado1 === lado3) {
      console.log("Triângulo Equilátero");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      console.log("Triângulo Isósceles");
    } else {
      console.log("Triângulo Escaleno");
    }
  }

  const resultado = calc(2, 1, 3);
