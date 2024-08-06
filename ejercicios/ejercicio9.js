function numeroDeAes(cadena){
    const arreglo = Array.from(cadena)
    let acumulador = 0

    for(i = 0;i <= arreglo.length; i++){
        if(arreglo[i] == "a"){
            acumulador += 1;
        }
    }
    return acumulador
}

// escribe // escribe tu respuesta acá

// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0tu respuesta acá

