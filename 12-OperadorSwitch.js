const ciudadesDisponible = new Array("Bogota", "Lima", "La plata", "Brasilia", "Ciudad de Mexico", "Caracas")
const ciudadDestino = "Brasilia";

let valorPasaje = 0;
console.log(`Verificando pasajes para la ciudad de ${ciudadDestino}...`);
switch (ciudadDestino) {
    case 'Bogota':
        valorPasaje = 500;
        break;
    case 'Lima':
        valorPasaje = 1500;
        break;
    case 'La plata':
        valorPasaje = 700;
        break;
    case 'Brasilia':
        valorPasaje = 2700;
        break;
    case 'Ciudad de Mexico':
        valorPasaje = 800;
        break;
    case 'Caracas':
        valorPasaje = 400;
        break;
    default:
        console.log('La ciudad escogida no existe en la lista');
        break;
}
if (valorPasaje != 0) {
    console.log(`El valor del pasaje a la ciudad ${ciudadDestino} es $${valorPasaje}`);
}
