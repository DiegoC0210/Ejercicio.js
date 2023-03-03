function aleatorio(min, max){
    let numero = Math.round(Math.random() * (min, max) );
    return numero;
}

let minimo = prompt('Escribe el numero minimo: ');
let maximo = prompt('Escribe el numero maximo: ');

let resultado = aleatorio(minimo,maximo);

document.write(`El Numero aleatorio es: ${resultado}`);