// Escribir una función llamada capitalizar que reciba una cadena y capitalice 
//la primera letra de cada palabra :

function capitalizar(cadena){
    if (cadena !== ""){
    let arreglo = Array.from(cadena);
    arreglo[0] = arreglo[0].toUpperCase();
    const arregloCapitalizado = arreglo.reduce((x,y)=>
    {
        return x + y;
    })


    return arregloCapitalizado
}else{
    return "";
    }
}





// escribe tu función acá

// código de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""