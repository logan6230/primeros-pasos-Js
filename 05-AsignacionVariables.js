//Variable que no va cambiar su valor en la ejecucion en el tiempo
//const

const valorPasaje = 1650;
console.log(valorPasaje);
const nombrePasajero = "Segundo";
const apellidoPasajero = "Pantoja";

//Variables que puede cambiar su valor en el tiempo y puede ser ascedida desde cualquier parte del codigo
//var


var nombreCompleto = nombrePasajero + " " + apellidoPasajero
console.log(nombreCompleto);

//Variable local y no puede ser usada desde cualquier parte del programa
//let
//Bloque
{
    // Esta variable solo puede ser usada dentro del bloque definido
    let nombreCompleto2 = nombrePasajero + " " + apellidoPasajero
    console.log("Variable con let como local " + nombreCompleto2)
}

