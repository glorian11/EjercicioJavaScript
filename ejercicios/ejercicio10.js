//Escribir una función llamada 
//numeroDeCaracteres que reciba una cadena y un carácter 
//(una cadena de un carácter). La función debe regresar el número de veces que aparece el carácter en la cadena.


function numeroDeCaracteres(cadena,caracter){
    const arreglo = Array.from(cadena)
    let acumulador = 0

    for (i = 0; i <= arreglo.length; i++){
        if (arreglo[i] == caracter) {
            acumulador += 1
        }
    }
    return acumulador
}








// escribe tu respuesta acá

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4