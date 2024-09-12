// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup("bdd");

// Establish variables for use in all tests
const { assert, expect } = chai;

describe("Test - Arrays I", () => {
  it('La variable alimentos debe contener "Lentejas", "Aguacate", "Tomate", "Hummus" y "Cebolla"', () => {
    expect(alimentos).to.deep.equal([
      "Lentejas",
      "Aguacate",
      "Tomate",
      "Hummus",
      "Cebolla",
    ]);
  });
});
describe("Test - Arrays II", () => {
  it("La variable numeros debe contener números del 0 al 8", () => {
    expect(numeros).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
describe("Test - Arrays III", () => {
  it("La variable mentores debe valer 3 después del bucle", () => {
    expect(mentores).to.equal(3);
  });

  it("La variable estudiantes debe valer 5 después del bucle", () => {
    expect(estudiantes).to.equal(5);
  });
});
describe("Test - Mix I", () => {
  it("La variable texto es igual a marvel mola!", () => {
    expect(texto).to.equal("marvel mola!");
  });

  it("La variable textoTransform no ", () => {
    expect(textoTransform).to.equal("m-a-r-v-e-l- -m-o-l-a-!");
  });
});

describe("Test - Funciones I", () => {
  it("La función saluda existe", () => {
    expect(saluda).to.not.be.an("undefined");
  });

  it("La función saluda funciona correctamente", () => {
    const result = saluda("Upgrade Hub");
    expect(result).to.equal("Te damos la bienvenida, Upgrade Hub");
  });

  it('La variable mensajeSaludo es el resultado de invocar a saluda con el string "Upgrade"', () => {
    expect(mensajeSaludo).to.equal("Te damos la bienvenida, Upgrade");
  });

  it("La función sumaTextos existe", () => {
    expect(sumaTextos).to.not.be.an("undefined");
  });

  it("La función sumaTextos funciona correctamente", () => {
    const result = sumaTextos("Vamos a", "programar en Upgrade Hub");
    expect(result).to.equal("Vamos a programar en Upgrade Hub");
  });

  it('La variable textoFinal es el resultado de invocar a sumaTextos con los argumentos "Estoy sumando" y "dos cadenas de texto"', () => {
    expect(textoFinal).to.equal("Estoy sumando dos cadenas de texto");
  });
});
describe("Test - Funciones II", () => {
  it("La función multiplicaDosNumeros existe", () => {
    expect(multiplicaDosNumeros).to.not.be.an("undefined");
  });

  it("La función multiplicaDosNumeros funciona correctamente", () => {
    const result = multiplicaDosNumeros(3, 4);
    expect(result).to.equal(12);
  });

  it("La variable primerMulti es el resultado de invocar a multiplicaDosNumeros con los números 4 y 5", () => {
    expect(primerMulti).to.equal(20);
  });

  it("La función restaDos existe", () => {
    expect(restaDos).to.not.be.an("undefined");
  });

  it("La función restaDos funciona correctamente", () => {
    const result = restaDos(10, 4);
    expect(result).to.equal(6);
  });

  it("La variable resultadoFinal es el resultado de invocar a restaDos con los números 50 y primerMulti", () => {
    const result = restaDos(50, primerMulti);
    expect(resultadoFinal).to.equal(result);
  });
});
describe("Test - Funciones III", () => {
  it("La función empujarHeroe existe", () => {
    expect(empujarHeroe).to.not.be.an("undefined");
  });

  it("La función empujarHeroe funciona correctamente", () => {
    const arr = [];
    empujarHeroe(arr, "Superman");
    expect(arr).to.deep.equal(["Superman"]);
  });

  it("La función sacarHeroe existe", () => {
    expect(sacarHeroe).to.not.be.an("undefined");
  });

  it("La función sacarHeroe funciona correctamente", () => {
    const arr = ["Batman", "Superman"];
    sacarHeroe(arr);
    expect(arr).to.deep.equal(["Batman"]);
  });

  it('La variable superheroes vale ["Spiderman", "Hulk", "Thor"] después de lanzar todo el código', () => {
    expect(superheroes).to.deep.equal(["Spiderman", "Hulk", "Thor"]);
  });
});
describe("Test - Piramide III", () => {
  it("La variable piramide es igual a la del enunciado", () => {
    expect(piramide).to.equal(
      `1\n22\n333\n4444\n55555\n666666\n7777777\n88888888\n999999999\n`
    );
  });
});
