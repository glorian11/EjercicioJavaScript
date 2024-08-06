//Escribe una función llamada imprimirArregloque recibirá un arreglo 
//e imprime cada elemento en una línea a parte:
const arreglo = [1,"Hola",2, "Mundo"];
const otroarreglo = [8, 8];
function imprimirArreglo (array) {
    for (i = 0; i < array.length; i ++) {
        const element = array[i];
        console.log(element)
    }

}
imprimirArreglo(arreglo);

imprimirArreglo(otroarreglo);