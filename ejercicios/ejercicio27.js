// Escribir una función llamada numerosAPalabras que reciba un arreglo 
//de números (cada número en el rango de 0 a 0) y devolverá 
//un nuevo arreglo convirtiendo cada número a su versión en palabras.


// escribe tu función acá
function numerosAPalabras(arreglo){
    const traduccion =  arreglo.map((e)=>{
        switch (e){
            case 0:
                return("cero");
                
                case 1:
                    return("uno")
                    
                    case 2:
                return ("dos");
                
                case 3:
                return ("tres");
                
                case 4:
                return("cuatro");
                
                case 5:
                return("cinco");
                
                case 6:
                return("seis");
                
                case 7:
                return("siete");
            
                case 8:
                return("ocho");
                
                case 9:
                return("nueve");
                
        }
    }) 
    return traduccion
    
}

// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]