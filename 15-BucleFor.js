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

let ciudadSeleccionada = '';
for (let i = 0; i < datos.length; i++) {
    if (datos[i].precio < presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad
        break;
    }
    
}

if (ciudadSeleccionada == '') {
    console.log("No tenemos pasajes disponibles");
} else {
    console.log(`Puedes comprar pasaje para ${ciudadSeleccionada}`);
}
