const precioXhora = 15300;
let nombre = prompt('Ingrese el nombre del empleado ');
let horas = Number(prompt('Ingrese las horas trabajadas '));
let pagoTotal= horas*precioXhora;
alert ('El total a pagar por el empleado'+ nombre +  'es de ' + pagoTotal);