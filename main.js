const precioMin=355;
let cantidadMed=parseInt(prompt('Ingrese la cantidad de minutos hablados '));
let totalMed=0;
for (let i=0; i<cantidadMed;i++){
    let precioMed=parseInt(prompt('Ingrese el precio del producto ${i+1}'));
    totalMed=precioMed+totalMed:
}
let minuto = parseInt(prompt('Ingrese la cantidad'));
let pagar = minuto*precioMin+((minuto*precioMin)*0.2);
document.getElementById('pagar').innerHTML=pagar;
let descuento = totalMed*0.10;
let precioFin = totalMed-descuento;
console.log(descuento)
documento.getElementById('descuento').innerHTML= descuento;
document.getElementById('precio').innerHTML=precioFin;
