const ciudadDestino = "Lima";
const ciudadesDisponible = new Array("Bogota", "Lima", "La plata", "Brasilia", "Ciudad de Mexico", "Caracas")


let valorPasaje = 1100;
const edadPasajero = 18;
const estaAcompanado = false;
let tienePasaporte = true;
let estaCasado = false
console.log(`Verificando pasajes para la ciudad de ${ciudadDestino}...`);

// if (edadPasajero >= 18 || estaAcompanado) {

    if (ciudadesDisponible.indexOf(ciudadDestino) >= 0 && 
        edadPasajero >= 18 && 
        !estaCasado &&
        tienePasaporte) {
        console.log("Pasaje disponible para la venta");
    } else {
        console.log("Pasaje no disponible para viajar");
    }
// } else {
//     if (edadPasajero >= 16 && ciudadDestino === "Lima") {
//         console.log("El vuelo a Lima esta disponible para viajar");
//     } else {
//         console.log("El pasajero no cumple las reglas");
//     }
    
// }