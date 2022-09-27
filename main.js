let numeo1 = number(prompt('Ingree el primer numeor'));
let numeo2 = number(prompt('Ingree el segundo numeor'));
let valor = number(prompt('Ingrese el valor de la compra'));
let tipMembresia = prompt('Ingrese el tipo de membresia que tiene, tipo A, tipo B o tipo C');
if (numero1>numero2){
    resta = numero1 - numero2
    document.write('El resultado de la resta es' + resta)
if (tipMembresia == "tipo A"){
    totPago1 = (valor) - (valor*0.10)
    alert("El valor a pagar por poseer la membresia tipo A  es de" + totPago1);
}else if (tipMembresia == "tipo B"){
    totPago2 = (valor) - (valor*0.15)
    alert("El valor a pagar por poseer la membresia tipo B es de" + totPago2);
}else{
    alert("La operacion no es posible")
    alert("El valor a pagar por no poseer ningun tipo de membresia es de " + valor);
}
}
