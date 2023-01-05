const ciudadDestino = "Lima";
const ciudadesDisponible = new Array("Bogota", "Lima", "La plata", "Brasilia", "Ciudad de Mexico", "Caracas")


valorPasaje = 1100
const edadPasajero = 17;
const estaAcompanado = false
console.log(`Verificando pasajes para la ciudad de ${ciudadDestino}...`);
if (edadPasajero >= 18 || estaAcompanado) {

    if (ciudadesDisponible.indexOf(ciudadDestino) >= 0) {
        console.log("Ciudad disponible para viajar");
    } else {
        console.log("Ciudad no disponible para viajar");
    }
} else {
    if (edadPasajero >= 16 && ciudadDestino === "Lima") {
        console.log("El vuelo a Lima esta disponible para viajar");
    } else {
        console.log("El pasajero no cumple las reglas");
    }
    
}