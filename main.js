let lado1 = Number(prompt("Digite el primer lado del rectangulo"));
let lado2 = Number(prompt("Digite el sengudo lado del rectangulo"));
let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let num3 = parseInt(prompt("Ingrese el tercer numero"));
let num4 = parseInt(prompt("Ingrese el cuarto numero"));

let area = lado1 * lado2;
let media = (num1+num2+num3+num4)/4;

alert("El area del rectangulo es " + area);
alert("La media de los cuatro numeros es " + media);