//-----------------------------------------EJERCICIOS CONDICIONALES------------------------\\

//-----------------------------------------EJERCICIO 1----------------------------------------------------------------------\\

// Crea una variable llamada 'age' y asignale el valor 17 (número)

let age = 17;

// Crea una variable llamada 'isUsa' y asignale el valor booleano true

let isUsa = true;

// Crea una variable llamada 'youCanDrive' y asignale el valor booleano false

let youCanDrive = false;

// Crea una condición que nos diga si una persona con 17 años puede conducir ->
// Tendrás que asignar el valor true a 'youCanDrive' si la variable 'age' es mayor a 18 años, pero si está en USA y es mayor de 16 años también asigna el valor true a 'youCanDrive'.

if (age > 18 || (isUsa && age > 16)) {
  youCanDrive = true;
} else {
  youCanDrive = false;
}

//-----------------------------------------EJERCICIO 2--------------------------------------------------------------------\\

// Crea 3 varaibles niloLenght con valor 175, tamesisLenght con valor 55 y isNiloLargest con valor false

let niloLenght = 175;
let tamesisLenght = 55;
let isNiloLargest = false;

// Si el nilo es más largo cambia el valor de isNiloLargest

if (niloLenght > tamesisLenght) {
  isNiloLargest = true;
} else {
  isNiloLargest = false;
}

//---------------------------------------EJERCICIO 3--------------------------------------------------------------------\\

// Estamos en un restaurante y esperamos la orden del cliente para ello tendremos que declarar una variable orden con el valor 'pizza', 'hamburguesa' u 'otro'- y otra variable mensaje asignando un string vacío

let orden = "pizza";
let mensaje1 = "";

// Si orden es = 'pizza' -> mensaje será 'Preparando una pizza'
// Si orden es = 'hamburguesa' -> mensaje será 'Preparando una hamburguesa'
// En caso de no ser 'pizza' o 'hamburguesa' -> mensaje será 'Preparando otro tipo de comida'

if (orden === "pizza") {
  mensaje1 = "Preparando una pizza";
} else if (orden === "hamburguesa") {
  mensaje1 = "Preparando una hamburguesa";
} else {
  mensaje1 = "Preparando otro tipo de comida";
}

//--------------------------------EJERCICIOS BUCLES-----------------------------------------------------------------\\

//-----------------------------------------EJERCICIO 1----------------------------------------------------------------------\\

// Crea una variable sumaTotal que empiece valiendo 0.

let sumaTotal = 0;

// Ahora, crea un bucle for que recorra los números desde 0 hasta 20 (SIN INCLUIR EL 20) y sume todos los números a sumaTotal.

for (let i = 0; i < 20; i++) {
  sumaTotal += i;
}

//-----------------------------------------EJERCICIO 2----------------------------------------------------------------------\\

// Crea una variable soloA que empiece valiendo 0.

let soloA = 0;

// Crea una variable soloL que empiece valiendo 0.

let soloL = 0;

// Utilizando la propiedad .length de los strings, podemos obtener un número con la longitud total de una cadena de texto.
// Si usamos mensaje.length obtendremos el número 51, que es el número de letras y espacios dentro del mensaje.
var mensaje = "Una langosta azul es un animal difícil de encontrar";

// Ahora crea un bucle for que empiece en 0 y llegue hasta el final de la longitud de la cadena de texto contenida en la variable mensaje.
// Vamos a combinar bucles y condicionales añadiendo dentro del bucle las condiciones:
// => Si la letra para esa posición es igual a la letra 'a', sumamos +1 a la variable soloA
// => Si la letra para esa posición es igual a la letra 'l', sumamos +1 a la variable soloL

for (var i = 0; i < mensaje.length; i++) {
  if (mensaje[i] === "a") {
    soloA += 1;
  } else if (mensaje[i] === "l") {
    soloL += 1;
  }
}

//-----------------------------------------EJERCICIO 3----------------------------------------------------------------------\\

// Vamos a simular el comportamiento de la función .length que usamos para las cadenas de texto.
// Para ello, vamos a crear una variable longitud que empiece valiendo 0.

let longitud = 0;

// Ahora, recorre el siguiente mensaje empezando en 0, y sumando +1 en cada iteración o vuelta a la variable longitud siempre que la i sea menor a la longitud del mensaje.
var mensaje = "¡En Upgrade Hub aprendemos a programar como cracks!";

for (var i = 0; i < mensaje.length; i++) {
  longitud += 1;
}
