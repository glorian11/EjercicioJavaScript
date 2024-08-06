// Escribir una función de llamada max que reciba 
//un arreglo de números y devuelva el número máximo:



// escribe tu función acá

function max(arreglo){
    const numeroMax = arreglo.reduce((x,y)=>{
        if (x> y){
            return x
        }else{
            let x = y
            return x
        }
    }
    )
    return numeroMax
    }



// código de prueba
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9