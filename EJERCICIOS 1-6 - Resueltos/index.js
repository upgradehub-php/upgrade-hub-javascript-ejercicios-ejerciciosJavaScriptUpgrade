//-----------------------------------------EJERCICIOS VARIABLES-----------------------------------------------------\\
//
//
//
//
//
//-----------------------------------------EJERICIO 1----------------------------------------------------------------------\\

// Declara dos variables llamadas 'tengoDinero' y 'meDaMiedoVolar' y asignales cualquier valor.

let tengoDinero = "no";
let meDaMiedoVolar = "no";

// Declara una variable llamada 'puedoIrAMexico' sin ningún valor

let puedoIrAMexico;

// Cambia el valor de la variable 'puedoIrAMexico' a true

puedoIrAMexico = true;

//
//
//
//
//

//-----------------------------------------EJERCICIO 2----------------------------------------------------------------------\\

// Declara dos variables name y surname que representen el nombre y apellidos de una persona. No les asignes ningún valor, es decir, deben ser variables NO inicializadas.

let name;
let surname;

// Cambia el valor de la variable name para que sea 'Upgrade'

name = "Upgrade";

// Cambia el valor de la variable surname para que sea 'Hub''

surname = "Hub";

//
//
//
//
//

//-----------------------------------------EJERCICIOS OPERADORES-------------------------------------------------------\\
//
//
//
//

//-----------------------------------------EJERICIO 1----------------------------------------------------------------------\\

// Declara dos variables numeroA y numeroB con los valores 5 y 7 respectivamente.

let numeroA = 5;
let numeroB = 7;

// Declara una variable sumaTotal que sea igual a la suma de numeroA y numeroB

let sumaTotal = numeroA + numeroB;

// Declara una variable restaTotal que sea igual a la resta de numeroB menos numeroA

let restaTotal = numeroB - numeroA;

// Declara una variable multiTotal que sea igual a la multiplicación de sumaTotal por restaTotal

let multiTotal = sumaTotal * restaTotal;

// Declara una variable divisionTotal que sea igual a la división de multiTotal entre restaTotal

let divisionTotal = multiTotal / restaTotal;
//
//
//
//
//
//

//-----------------------------------------EJERCICIO 2----------------------------------------------------------------------\\

// Declara dos variables llamadas 'nombre' y 'apellido' con los valores "Juan" y "Upgrader" respectivamente.

let nombre = "Juan";
let apellido = "Upgrader";

// Declara una variable llamada 'nombreCompleto' que sea igual a la suma de nombre y apellido. ¡Sepáralas con un espacio!

let nombreCompleto = nombre + " " + apellido;

// Declara ahora una variable llamada 'edad' que valga 28 (número).

let edad = 28;

// Declara finalmente una variable llamada 'mensaje' que diga "Mi nombre es NOMBRE COMPLETO y tengo X años" donde NOMBRE COMPLETO será la variable nombreCompleto y X será la variable edad.

let mensaje = "Mi nombre es " + nombreCompleto + " y tengo " + edad + " años";

//
//
//
//
//
//

//-------------------------------EJERCICIOS OPERADORES - LOGICOS-------------------\\

//
//
//

//-----------------------------------------EJERICIO 1----------------------------------------------------------------------\\

// Punto 1:
// Declara una variable llamada edad que representará la edad de una persona y que valga 18 años (con un valor de tipo número).

let edadPersona = 18;

// Declara una variable llamada edadParaCarnet que valdrá el string "18"

let edadParaCarnet = "18";

// Ahora crea una variable llamada puedeTenerCarnet que sea igual a una comprobación en la que veremos si edad es igual que edadParaCarnet. ¡Comprueba con cuidado! Debemos comprobar que realmente es igual utilizando los comparadores más estrictos.

let puedeTenerCarnet = edadPersona === edadParaCarnet;

// 🚨 ¡Comprueba ahora si has conseguido el primer punto de la prueba! 🎉

// Punto 2:
// Ahora vamos a cambiar el valor de la variable edadParaCarnet para que sea 18 como número. Tras esto, vamos a cambiar la variable edad para que sea 24 años como número.

edadParaCarnet = 18;
edadPersona = 24;

// 🚨 ¡Comprueba ahora si has conseguido el segundo punto de la prueba! 🎉

// Punto 3:
// Por último, vamos a hacer una comprobación mejor que la anterior. Crearemos una variable puedoSacarmeElCarnet que valga el resultado de comparar si la variable age es mayor o igual que la variable edadParaCarnet.

let puedoSacarmeElCarnet = edadPersona >= edadParaCarnet;

// 🚨 ¡Comprueba ahora si has conseguido el tercer punto de la prueba! 🎉

//
//
//
//
//
//

//-----------------------------------------EJERICIO 2----------------------------------------------------------------------\\

// Punto 1:
// Declara una variable llamada tengoDinero que valga true.
tengoDinero = true;

// Declara una variable llamada meDaMiedoVolar que valga false.
meDaMiedoVolar = false;

// Declara una variable edad que valga 30.
let edadVolar = 30;

// 🚨 ¡Comprueba ahora si has conseguido el primer punto de la prueba! 🎉

// Punto 2:
// Declara una variable puedoVolar que debe pasar el test. Para ello, tendrás que hacer que esta variable sea igual a la comprobación que diga:
// 1. SI tengoDinero (comprobaremos que es true)
// 2. NO meDaMiedoVolar (negaremos esta variable que era true)
// 3. edad debe ser MAYOR O IGUAL de 18 años (en números)

let puedoVolar = tengoDinero && !meDaMiedoVolar && edadVolar >= 18;

// 🚨 ¡Comprueba ahora si has conseguido el segundo punto de la prueba! 🎉

//
//
//
//
//
//------------------------------------EJERCICIO 3 ---------------------//

// Estamos en un juicio y esperamos la sentencia del Juez para ello tendremos que declarar una variable culpable con el valor 'si', 'no' u 'otro'- y otra variable sentencia asignando un string vacío

let culpable = "si";
let sentencia = "";

// Si culpable es = 'si' -> sentencia será 'a la carcel'
// Si culpable es = 'no' -> sentencia será 'vas a casa'
// En caso de no ser 'si' o 'no' -> sentencia será 'realizar trabajos para la comunidad'

if (culpable === "si") {
  sentencia = "a la carcel";
} else if (culpable === "no") {
  sentencia = "vas a casa";
} else {
  sentencia = "realizar trabajos para la comunidad";
}
