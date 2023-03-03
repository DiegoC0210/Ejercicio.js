function precioIva(precio, iva){
    iva= iva || 19;
    var ivaincluido = (parseInt(precio) + precio *iva /100);
    return ivaincluido;
}

var precio = prompt('Digita el precio: ');
var iva = prompt('Digita el iva: ');

if (iva > 0){
    var resultado = precioIva(precio,iva);
}
else{
    var resultado = precioIva(precio);
}

document.write('Precio sin iva: '+ precio + "<br>");

document.write('Precio con iva: ' + resultado + "<br>");
