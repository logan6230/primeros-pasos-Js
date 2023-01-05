const ciudadesDisponible = new Array("Bogota", "Lima", "La plata", "Brasilia", "Ciudad de Mexico", "Caracas")
const precios = new Array(600, 550, 300, 400, 500, 450);
const datos = [
    {
        'ciudad': 'Bogota',
        'precio': 600
    },
    {
        'ciudad': 'Lima',
        'precio': 400,
    },
    {
        'ciudad': 'Quito',
        'precio': 650
    },
    {
        'ciudad': 'Montevideo',
        'precio': 800,
    },
]
const presupuestoDisponible = 500
let i = 0
// while (i < datos.length && datos[i].precio > presupuestoDisponible ) {
//     i++
//     console.log(i);
// }
let ciudadSeleccionada = '';
do {
    if (datos[i].precio < presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad
        break;
    }
    i++
} while (i < datos.length && ciudadSeleccionada == '' )

if (ciudadSeleccionada == '') {
    console.log("No tenemos pasajes disponibles");
} else {
    console.log(`Puedes comprar pasaje para ${ciudadSeleccionada}`);
}
