// Escribir una función llamada fizzBuzzque reciba un número y devuelva una cadena de acuerdo a lo siguiente:

//"fizz" si el número es múltiplo de 3.
//"buzz" si el número es múltiplo de 5.
//"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
//Si no cumple ninguna de las condiciones anteriores deberá volver al mismo número.

function fizzBuzz(numero) {
    if (numero % 3 == 0 && numero % 5 == 0){
        return "fizzbuzz";
        
    }
    if (numero % 3 == 0) {
        return "fizz";
    

    }
    if (numero % 5 == 0){
        return "buzz";
    
    }
    else {
        return numero;
    }

}

// escribe tu respuesta acá

// código de prueba
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8