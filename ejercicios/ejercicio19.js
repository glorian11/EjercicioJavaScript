// Escribir una función de llamada min que 
//reciba un arreglo de números y devuelva el número mínimo:

//Nota: Intentarlo hacer sin el método Math.minde JavaScript


// escribe tu función acá
function min(arreglo){
    const numeroMinimo = arreglo.reduce((x,y)=>{
       if (x<y){
        return x
       } else{
        x = y
       return x
       }
    })
    return numeroMinimo
}


// código de prueba
console.log(min([3, 9, 6])) // 3
console.log(min([67, 35, 54, 26])) // 26
console.log(min([5, 9, 2, 4, 5, 7])) // 2