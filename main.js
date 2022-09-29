let precioProducto = Number(prompt('Digite el precio del producto'));
let iva = Number(prompt('digite el iva sin %'));
let TotalIva = Iva/100;
let IvaProducto = precioProducto* TotalIva;
let pagoTotal =precioProducto + IvaProducto;
alert ('El iva del producto es de ' + IvaProducto);
alert ('El total a pagar del producto es de ' + pagoTotal);

