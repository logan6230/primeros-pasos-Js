//Tipos de datos
//Alfanumericos
let nombrePasajero = "Pedro Silva"
console.log(nombrePasajero);
//Numerico
let valorBoleto = 1650;
console.log(valorBoleto);
//Logicos (true, false)
let boletoActivo= true;
console.log(boletoActivo);
//Operaciones aritmeticas 
//Suma 
let totalBoletos = valorBoleto + 64.5 + 100
console.log(totalBoletos);
//Orden en la precedencia de las operaciones aritmeticas
//1-> ()
//2-> * y /
//3-> + y -
totalBoletos = valorBoleto + 64.5 * (100 + 20);
console.log(totalBoletos);
//Concatenacion de texto
let nombrePasajero2 = "Leonardo";
let apellidoPasajero = "Diaz";
let pasaporte = "1000" + "10"
let nombreCompleto = nombrePasajero2 + apellidoPasajero

console.log(nombreCompleto);
console.log(pasaporte);

//Cuando usamos un simblo diferente a la division y usamos string JS realiza la operacion matematica
let multiplicacion = "10" * "2"

console.log(multiplicacion);

//Cuando parseamos los datos cambiamos su tipo y se realiza la operacion correspondiente
pasaporte = parseInt("200") + parseFloat(20.5)
console.log(pasaporte);

let noEsUnNumero= parseInt('aaaaa')
console.log(noEsUnNumero);