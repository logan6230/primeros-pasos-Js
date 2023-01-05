//Operadores de comparacion
const ciudadDestino = "Bogota";
const ciudadesDisponible = new Array("Bogota", "Lima", "La plata", "Brasilia", "Ciudad de Mexico", "Caracas")

//Al usar el operador === nos obliga a que la comparacion se exactamente igual
let valorPasaje = '1000'

if (valorPasaje === 1000) {
    console.log(`El pasaje  vale ${valorPasaje}`);
} else {
    console.log(`El pasaje debe ser un numero`);
}

if (valorPasaje == 1000) {
    console.log(`El pasaje  vale ${valorPasaje}`);
} else {
    console.log(`El pasaje debe ser un numero`);
}
//Palabra reservada if, evalua una condicion
valorPasaje = 1100
const edadPasajero = 19;
const estaAcompanado = false
if (edadPasajero >= 18 || estaAcompanado) {

    if (ciudadesDisponible.indexOf(ciudadDestino) >= 0 && valorPasaje > 1000) {
        console.log("Vendo el pasaje");
    } else {
        console.log("Ciudad no disponible");

    }
}else{
    console.log("El pasajero es menor edad y no esta acompañado");
}

if (!estaAcompanado) {
    console.log("Pasajero viaja solo");
}

