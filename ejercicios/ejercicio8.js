function sumarRango (x,y){

    let acumulador = 0

    for (i=x;i<=y;i++){
        acumulador += i;
    }
    return acumulador
    
}


// escribe tu respuesta acá

// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0
