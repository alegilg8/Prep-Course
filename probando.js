function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
    // Escribe tu código aquí:
    var numeros = Array.from(arguments);
    var multiplicacion = 1;
  
    for (let i = 0; i < numeros.length; i++) {
      multiplicacion = multiplicacion * numeros[i];
    }
    return multiplicacion;
}

console.log(multiplicarArgumentos(5, 5, 5));