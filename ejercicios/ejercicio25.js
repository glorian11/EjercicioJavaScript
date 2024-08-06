// Escribir una función llamada terminanConS que reciba un arreglo de strings y devuelva un nuevo arreglo 
//con todas las palabras que terminen en "s" (mayúscula o minúscula

// escribe tu función acá

function terminanConS(arreglo){
    const nuevoArreglo = arreglo.filter((e)=>{
        if (e.charAt(e.length -1) == "s" ){
            return e
        }
    })
    return nuevoArreglo
}

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []