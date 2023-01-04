const nombrePasajero = "Segundo";
const apellidoPasajero = "Pantoja";
//Plantillas de texto, se utilizan las comillas invertidas
//Template string
let nombreCompleto = ` El nombre completo es: ${nombrePasajero} ${apellidoPasajero}`
console.log(nombreCompleto);
//Mutabilidad
//La palabra reservada const no es mutable o no cambia en el tiempo
//La palabra let es mutable y cambia en el tiempo 
let segundoPasajero = "Diego Castillo";
console.log(`El nombre del segundo pasajero es: ${segundoPasajero}`);

segundoPasajero = 12345;
console.log(`El nombre del segundo pasajero es: ${segundoPasajero}`);