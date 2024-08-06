// Escribir una función llamada duplicar que reciba un arreglo de números y devuelva un nuevo 
//arreglo donde cada número esté multiplicado por dos (2


// escribe tu función acá
function duplicar(arreglo){
    const nuevoArreglo = arreglo.map((e)=>{
        return e = e*2;
    })
    return nuevoArreglo

}



// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []



// ejercicio 2 duplicar de verdad

function duplicarDeVerdad(arreglo){
    let arregloPush = [];
    const nuevoArreglo = arreglo.map((e)=>{
        return arregloPush.push(e,e)
    })
    return arregloPush
    }


    console.log(duplicarDeVerdad([1, 2, 3])) // [2, 4, 6]
    console.log(duplicarDeVerdad([])) // []
