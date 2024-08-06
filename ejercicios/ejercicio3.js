//El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina 
//la cantidad de grasa de una persona.

//El IMC se calcula con la siguiente fórmula:peso / altura^2

//Escribe una función llamada bmique reciba dos argumentos: peso y altura, 
//y devuelva una cadena con las siguientes posibilidades:
//El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

// "Bajo de peso" si el IMC < 18,5
//"Normal" si está entre 18,5 y 24,9
//"Sobrepeso" está entre 25 y 29,9
//"Obeso" si es igual o mayor a 30

function BMI(peso, altura) {
    const bmi = peso / (altura ** 2);
    let resultado;
    
    if (bmi < 18.5) {
        resultado = "bajo de peso";
    } else if (bmi < 25) {
        resultado = "normal";
    } else if (bmi < 30) {
        resultado = "sobre peso";
    } else {
        resultado = "obeso";
    }
    
    return resultado;
}
    

// escribe la función bmi acá

// código de prueba
console.log(BMI(65, 1.8)) // "Normal"
console.log(BMI(72, 1.6)) // "Sobrepeso"
console.log(BMI(52, 1.75)) //  "Bajo de peso"
console.log(BMI(135, 1.7)) // "Obeso"