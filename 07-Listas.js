//Forma extendida de declarar un arreglo
const ciudades = new Array("Bogota", "Lima", "Argentina", "Brasil")
console.log(ciudades);
//Definicion de un arreglo de forma abreviada

const paisesDisponibles = ["Colombia", "Peru", "Argentina", "Brasil"]
console.log(paisesDisponibles);

//Forma de agregar datos a la lista
//Agregar datos al final de la lista 
paisesDisponibles.push("Chile")
console.log(paisesDisponibles);
//Agregar datos al inicio de la lista
paisesDisponibles.unshift("Paraguay")
console.log(paisesDisponibles);

//Mostrar datos en una pocision indicada
console.log(paisesDisponibles[0]);
console.log(ciudades[1]);

//Borrar elementos de la lista y agregar otros elementos
//El primer numero me indica a partir de la posicion que voy a borrar y el segundo cuantos elementos se borraran

paisesDisponibles.splice(0,2,"Venezuela",'Mexico')
console.log(paisesDisponibles);
