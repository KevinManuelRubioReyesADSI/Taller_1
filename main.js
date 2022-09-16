const pi = 3.14;
let espacio = Number (prompt("Digite el espacio en km recorido de  la bala" ));
let tiempo = Number (prompt("Digite el tiempo recorrido de la bala"));

let radio = Number (prompt("Ingrese el radio del circulo"));
let velocidad = (espacio*1000) / (tiempo*60);

let long = 2*pi*radio;

let area = pi*radio*2;

alert ("La longitud de la circuferencia es " + long);
alert ("El area de la circuferencia es " + area);
alert ("La velocidad recorrida del proyectil es " + velocidad + "'m/s'");