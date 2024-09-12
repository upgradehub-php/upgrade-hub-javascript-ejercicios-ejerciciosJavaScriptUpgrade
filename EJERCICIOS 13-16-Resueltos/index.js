//---------------------------------EJERCICIOS ARRAYS----------------------------------------------//

//---------------------------------EJERCICIO 1-------------------------------------------------------//

// Crea una variable de tipo array llamada alimentos que contenga las siguientes cadenas de texto: "Lentejas", "Aguacate", "Tomate"

let alimentos = ["Lentejas", "Aguacate", "Tomate"];

// Ahora empuja un nuevo valor "Hummus" al final de la variable alimentos.

alimentos.push("Hummus");

// Empuja ahora dos valores de una sola vez en la variable. "Cebolla" y "Bacon"

alimentos.push("Cebolla", "Bacon");

// ¡Ya tenemos nuestra ensalada de lentejas! Pero viene a comer a casa un amigo vegetariano y no puede comer Bacon. Vamos a sacar el últimos elemento del array antes de terminar.

alimentos.pop();

//---------------------------------EJERCICIO 2-------------------------------------------------------//

// Crea una variable llamada numeros que sea un array vacío

let numeros = [];

// Crea un bucle for que recorra los números empezando en 0 y llegando hasta 10 (INCLUYENDO EL 10). En cada iteración, empuja ese número i dentro del array numeros

for (let i = 0; i <= 10; i++) {
  numeros.push(i);
}

// Para terminar, vamos a quitar los dos últimos números del array.

numeros.pop();
numeros.pop();

//-------------------------------EJERCICIO 3-------------------------------------------------------//

// Tenemos un array de personas que están en Upgrade Hub clasificados por su rol como Estudiante o Mentor.
var personas = [
  "Estudiante",
  "Mentor",
  "Mentor",
  "Estudiante",
  "Estudiante",
  "Estudiante",
  "Estudiante",
  "Mentor",
];

// Sabiendo que podemos acceder a los elementos de un array a través de su posición, y que con .length podemos saber la longitud que tiene el array...

// Crea una variable mentores que valga 0.

let mentores = 0;

// Crea un bucle que empiece en 0 e itere hasta el final del array. Para cada elemento en comprueba con un condicional si el valor del array en dicha posición es "Mentor". De ser así, suma +1 a la variable mentores.

for (let i = 0; i < personas.length; i++) {
  if (personas[i] === "Mentor") {
    mentores += 1;
  }
}

// Ahora crea una variable estudiantes que valga 0.

let estudiantes = 0;

// Repite el proceso anterior sumando +1 a estudiantes cada vez que un elemento del array sea igual a "Estudiante"

for (let i = 0; i < personas.length; i++) {
  if (personas[i] === "Estudiante") {
    estudiantes += 1;
  }
}

//---------------------------------EJERCICIO 4-------------------------------------------------------

// Crea una variable llamada texto con el valor 'marvel mola!'

let texto = "marvel mola!";

// Crea una variable llamada 'textoTransform', la cual recorriendo la variable texto vaya añadiendo carácteres a la variable textoTransform hasta conseguir el valor '-m-a-r-v-e-l -m-o-l-a-!'

let textoTransform = "";

for (var i = 0; i < texto.length; i++) {
  if (i !== texto.length - 1) {
    textoTransform = textoTransform + texto[i] + "-";
  } else {
    textoTransform = textoTransform + texto[i];
  }
}
//-------------------------------EJERCICIO FUNCIONES ------------------------//

//
//
//
//
//-------------------------------EJERCICIO 1 -------------------------//

// Crea una función que se llame saluda y que reciba un argumento llamado nombre. Esta función devolverá (hará return) de la suma del string "Te damos la bienvenida, " junto con el argumento nombre.

function saluda(nombre) {
  return "Te damos la bienvenida, " + nombre;
}

// Crea una variable mensajeSaludo que sea igual a invocar a la función saluda usando como argumento el string "Upgrade".

let mensajeSaludo = saluda("Upgrade");

// Crea ahora una función que se llame, sumaTextos que reciba dos argumentos, textoA y textoB. Esta función devolverá por medio de return la suma de los dos strings separados por espacios.

function sumaTextos(textoA, textoB) {
  return textoA + " " + textoB;
}

// Crea una variable textoFinal que sea igual a invocar la función sumaTextos con los argumentos "Estoy sumando" y "dos cadenas de texto".

let textoFinal = sumaTextos("Estoy sumando", "dos cadenas de texto");

//
//
//
//
//
//
//----------------------------------------EJERCICIO 2---------------------------------------------\\

// Vamos a crear una función llamada multiplicaDosNumeros. Esta función se encargará de multiplicar DOS números diferentes entre sí y devolverá el resultado. Debe poder recibir por tanto, dos argumentos, a los que podemos llamar numA y numB, que representarán el primer y el segundo número utilizado.

function multiplicaDosNumeros(numA, numB) {
  return numA * numB;
}

// Usando la función, crea una nueva variable primerMulti que sea igual al resultado de invocar la función con los números 4 y 5.

let primerMulti = multiplicaDosNumeros(4, 5);

// Ahora crea una función llamada restaDos que reciba DOS argumentos, primerNum y segundoNum, y reste al primer número el segundo número enviado.

function restaDos(primerNum, segundoNum) {
  return primerNum - segundoNum;
}

// Por último, crea una nueva variable resultadoFinal que sea igual al resultado de invocar la función restaDos con los números 50 y la variable primerMulti.

let resultadoFinal = restaDos(50, primerMulti);

//

//

//

//--------------------------------EJERCICIO 3---------------------//
//------------------------------------------EJERCICIO 3---------------------------------------------\\
// Dada una variable superheroes que sea un array con algunos heroes dentro.
var superheroes = ["Spiderman", "Hulk"];

// Crea ahora una función empujarHeroe que reciba un argumento arrayHeroes (será un array) y otro argumento nuevoHeroe (será un string) y empuje dentro de arrayHeroes el argumento nuevoHeroe.

function empujarHeroe(arrayHeroes, nuevoHeroe) {
  return arrayHeroes.push(nuevoHeroe);
}

// Invoca a la función empujarHeroe enviando el array superheroes y el string "Thor".

empujarHeroe(superheroes, "Thor");

// Invoca a la función empujarHeroe enviando el array superheroes y el string "Iron-Man".

empujarHeroe(superheroes, "Iron-Man");

// Crea ahora una función sacarHeroe que reciba un argumento arrayHeroes (será un array) y saque de este array el último elemento (¡recuerda la sección de arrays del prework!).

function sacarHeroe(arrayHeroes) {
  return arrayHeroes.pop();
}

// Invoca a la función sacarHeroe enviando el array superheroes

sacarHeroe(superheroes);

//--------------------------------------------EJERCICIO OPCIONAL-------------------------------------------\\

// ¿Te gustan las pirámides? Esperamos que sí, porque vas a aprender a hacer una con JavaScript!

// Crea una función defina una variable string llamada `piramide` que empiece siendo un string vacío.

let piramide = "";

// Recorre todos los números comprendidos entre 1 y el 9m, incluyendo ambos, e intenta añadir ese número tantas veces como sea posible dado su valor:

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// Recuerda, para solucionar el problema debes hacer que tu string tenga "saltos de línea" al final de cada fila, eso lo conseguimos haciendo lo siguiente al final de cada bucle:

// piramide += '\n'; // Esto añade un salto de línea en la variable.

// Debemos aprovechar la potencia de los bucles para no rellenar nuestro fichero de código repetido.

for (let i = 1; i <= 9; i++) {
  for (let j = 0; j < i; j++) {
    piramide += i;
  }
  piramide += "\n";
}
