//Escribir una función llamada 
//pares que reciba un arreglo de números y devuelva un nuevo arreglo con los números pares únicamente






// escribe tu función acá

function pares(arreglo){
    const numerosPares = arreglo.filter((e)=>{
        return e % 2 == 0;
    })
    return numerosPares
}

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []