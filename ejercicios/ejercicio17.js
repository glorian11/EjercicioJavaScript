// escribe tu función acá

const capitalizar = (cadena) => {
    if (cadena !== "") {
        const palabras = cadena.split(" ");
        const palabrasCapitalizadas = palabras.map((palabra) => {
            return palabra.charAt(0).toUpperCase() + palabra.slice(1);
        });
        return palabrasCapitalizadas.join(" ");
    } else {
        return "";
    }
};


// código de prueba
console.log(capitalizar("hola mundo")) // "Hola Mundo"
console.log(capitalizar("make it real")) // "Make It Real"
console.log(capitalizar("")) // ""