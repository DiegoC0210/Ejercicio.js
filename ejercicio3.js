var Palabra = prompt("Escribe una palabra")
document.write("La palabra es: " + Palabra + "<br>")


function Palabra_reves(){
    alreves = Palabra.split("")
    alreves.reverse()
    document.write("La palabra al reves es: " + alreves.join("") + "<br>")
}
document.write(Palabra_reves())
