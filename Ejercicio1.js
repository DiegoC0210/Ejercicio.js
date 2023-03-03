
function funcion_pi(){
    var valor = Math.PI
    var valor2 = (Math.PI).toFixed(2)
    return{valor, valor2}
}
var {valor, valor2} = funcion_pi()

document.write( "El valor de pi es: "+ valor +  "<br>")
document.write('El valor de pi con dos seminales es ----> '+ valor2+ "<br>")