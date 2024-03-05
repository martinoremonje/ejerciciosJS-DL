//Solucion del ejercicio 2 

let num1 = prompt("Ingrese primer numero");
let num2 = prompt("Ingrese segundo numero");
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
let modulo = num1 % num2;

// Solucion del ejercicio 3

const transformCelsius = (temp) =>{
    let kelvin = parseInt(temp) + 273.15;
    let fahrenheit = (parseInt(temp) * 9 / 5) + 32;
}

//Solucion del ejercicio 4

const convertirDias = (param) => {
    let años = Math.floor(param / 365);
    let semanas = Math.floor((param % 365) / 7);
    let dias = (param % 365) % 7;
    return `${años}, ${semanas} y ${dias}`;
};

// Solucion del ejercicio 5

const fiveNumbers = (num1, num2, num3, num4, num5) => {
    let suma = num1 + num2 + num3 + num4 + num5;
    let promedio = (num1 + num2 + num3 + num4 + num5) / 5;
}