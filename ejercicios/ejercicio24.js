// Escribir una función llamada empiezanConA que reciba un arreglo de strings
// y devuelva un nuevo arreglo con 
//todas las palabras que empiecen por "a" (mayúscula o minúscula).




// escribe tu función acá

function empiezanConA(arreglo){
    const nuevoArreglo = arreglo.filter((e)=>{
        if (e.charAt(0) == "a" || e.charAt(0) == "A"){
            return e
        }
    })
    return nuevoArreglo
}

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []