const paisesDisponibles = ["Colombia", "Peru", "Argentina", "Brasil","Mexico", "Venezuela"]
const ciudadesDisponible = new Array("Bogota", "Lima", "La plata", "Brasilia","Ciudad de Mexico", "Caracas")

const cantidadCiudades = ciudadesDisponible.length;

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} ciudades`);
console.log(`En la lista de ciudades tenemos ${paisesDisponibles.length} paises`);

//Eliminar elementos al principio de una lista

ciudadesDisponible.shift();

//Eliminar elementos al final de una lista
ciudadesDisponible.pop();
console.log(`En la lista de ciudades tenemos ${ciudadesDisponible.length} ciudades`);
console.log(ciudadesDisponible);

//Comprobar si un dato esta dentro de una lista o filtrar datos

const paisesFiltrados = paisesDisponibles.filter((pais)=> pais == "Colombia")
console.log(paisesFiltrados); 

const ciudadesFiltradas = ciudadesDisponible.filter((ciudad)=> ciudad.length > 6)
console.log(ciudadesFiltradas); 

//Convertir una lista en una cadena de texto con la funcion join

console.log(paisesDisponibles.join('-'));

//Ordenar una listas
console.log(paisesDisponibles.sort());
//Conocer la pocision de un elemento en la lista con la funcion indexOf
console.log(`Peru esta en la pocision ${paisesDisponibles.indexOf('Peru')}`);
//Unificar dos listas 

const listaPaisesYciudades = paisesDisponibles.concat(ciudadesDisponible);
console.log(listaPaisesYciudades);
