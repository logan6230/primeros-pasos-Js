const ciudadesDisponible = new Array("Bogota", "Lima", "La plata", "Brasilia", "Ciudad de Mexico", "Caracas")
const precios = new Array(600, 550, 300, 400, 500, 450);
const presupuestoDisponible = 300
let i = 0
while (precios[i] > presupuestoDisponible && i < ciudadesDisponible.length) {    
    i++  
    console.log(i);   
}

if (i == ciudadesDisponible.length) {
    console.log("No tenemos ciudades disponibles");
}else{
    console.log(`Puedes comprar pasaje para ${ciudadesDisponible[i]}`);
}
