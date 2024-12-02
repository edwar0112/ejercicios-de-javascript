//1.Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o menor de edad, el programa debe validar que solo se puedan ingresar números positivos.

export function verificarEdad() {
  let edad = parseInt(prompt("Ingrese su edad:"));

  // Validar que la edad sea un número positivo
  while (isNaN(edad) || edad <= 0) {
    edad = parseInt(prompt("Edad inválida. Ingrese un número positivo:"));
  }

  
  if (edad >= 18) {
    console.log("Eres mayor de edad.");
  } else {
    console.log("Eres menor de edad.");
  }
}

verificarEdad();

  