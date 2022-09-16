let espacio = Number (prompt("Digite el espacio en km recorido de  la bala" ));
let tiempo = Number (prompt("Digite el tiempo recorrido de la bala"));
const pi = 3.14;

let velocidad = (espacio*1000) / (tiempo*60);
let radio = Number(prompt("Digite el radio de la circunferencia"));

alert ("La velocidad recorrida del proyectil es " + velocidad + "'m/s'");
let volumen = (4/3)*pi*radio**3;

alert ("El volumen de la esfera es " + volumen);