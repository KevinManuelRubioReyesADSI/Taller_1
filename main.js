const pi = 3.14;
let a = Number(prompt("Digite el valor de a"));
let b = Number(prompt("Digite el valor de b"));
let c = Number(prompt("Digite el valor de c"));

let radio = Number(prompt("Digite el radio de la circunferencia"));
let resultado = (a+7*c)/(b+2-a)+2*b ;

let volumen = (4/3)*pi*radio**3;

alert ("El volumen de la esfera es " + volumen);
alert("El resultado de la expresion es  " + resultado);