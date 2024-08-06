function distancia(cadena1, cadena2){
    const arreglo1 = Array.from(cadena1)
    const arreglo2 = Array.from(cadena2)
    let total = 0
    for ( i=0; i< arreglo1.length; i++){
        if (arreglo1[i] !== arreglo2[i]){
            total += 1
        }
    }
    return total
}

// escribe tu función acá

// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3