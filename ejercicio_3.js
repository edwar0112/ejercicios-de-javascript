//ahora dame otro codgio a base de esta informacion:3.Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si el divisor es cero el programa debe mostrar un error, se debe manejar mediante excepciones y el mensaje debe ser personalizado.

export function dividirNumeros(dividendo, divisor) {
    try {
      if (divisor === 0) {
        throw new Error("No se puede dividir por cero vuelve a intentarlo.");
      }
      const resultado = dividendo / divisor;
      console.log(`La división de ${dividendo} entre ${divisor} es: ${resultado}`);
    } catch (error) {
      console.error("¡Error!", error.message);
    }
  }
  
  
  const numero1 = parseFloat(prompt("Ingrese el primer número:"));
  const numero2 = parseFloat(prompt("Ingrese el segundo número 1  (divisor):"));
  
  
  dividirNumeros(numero1, numero2);
  