function aleatorio(min, max){
    let numero = Math.round(Math.random()* (min,max));
    return{numero};
}

let numeros = Array() // Array para introducir los numeros que no se repitan 
let NumerosAleatorios = 0 // variable para los numeros aleatorios 
j = 0
copia = true

let control = 0
for(i=1; i<100 + 1 ; i++){
    do{
        j=0;
        copia = true
        NumerosAleatorios = aleatorio(1,1000);

        for(j=0; j < numeros.length;j++){
            if (NumerosAleatorios  == numeros[j])
            copia = false
            }   
            

        }
    while (copia == false){
        numeros[i] = NumerosAleatorios
    }
}
for(i = 0; i < numeros.length; i++){
    document.write(JSON.stringify(numeros[i]) + "<br>")
}


