function palabrasAnumeros(arreglo){
    const traduccion =  arreglo.map((e)=>{
        switch (e){
            case "cero":
                return(0)
                
                case "uno":
                    return(1)
                    
                    case "dos":
                return (2)
                
                case "tres":
                return (3)
                
                case "cuatro":
                return(4)
                
                case "cinco":
                return(5)
                
                case "seis":
                return(6)
                
                case "siete":
                return(7)
            
                case "ocho":
                return(8)
                
                case "nueve":
                return(9)
                default:
            
                return(-1)
                
        }
    }) 
    return traduccion
    
}

// escribe tu función acá

// código de prueba
console.log(palabrasAnumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"])) // [0, 1, 2, 3, -1, 4]
console.log(palabrasAnumeros(["cinco", "seis", "siete", "ocho", "nueve"])) // [5, 6, 7, 8, 9]