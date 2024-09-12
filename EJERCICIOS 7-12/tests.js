// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup("bdd");

// Establish variables for use in all tests
const { assert, expect } = chai;

describe("Test - Condicionales I", () => {
  it("Las variables age - isUsa existen y youCanDrive", () => {
    expect(age).to.not.be.an("undefined");
    expect(isUsa).to.not.be.an("undefined");
    expect(youCanDrive).to.not.be.an("undefined");
  });

  it("La variable youCanDrive cambia su valor a true", () => {
    expect(youCanDrive).to.equal(true);
  });
});
describe("Test - Condicionales II", () => {
  it("Las variables niloLenght - tamesisLenght existen y isNiloLargest", () => {
    expect(niloLenght).to.not.be.an("undefined");
    expect(tamesisLenght).to.not.be.an("undefined");
    expect(isNiloLargest).to.not.be.an("undefined");
  });

  it("La variable isNiloLargest cambia su valor a true", () => {
    expect(isNiloLargest).to.equal(true);
  });
});
describe("Test - Condicionales III", () => {
  it("Las variables orden - mensaje existen", () => {
    expect(orden).to.be.a("string");
    expect(mensaje).to.be.a("string");
  });

  it("orden es igual a pizza", () => {
    expect(mensaje).to.be.a("string");
  });

  it("orden es igual a hamburguesa", () => {
    expect(mensaje).to.be.a("string");
  });
});
describe("Test - Bucles I", () => {
  it("La variable sumaTotal debe estar definida", () => {
    expect(sumaTotal).to.not.be.an("undefined");
  });

  it("La variable sumaTotal valdrá 190", () => {
    expect(sumaTotal).to.equal(190);
  });
});
describe("Test - Bucles II", () => {
  it("La variables soloA y soloL deben estar definida", () => {
    expect(soloA).to.not.be.an("undefined");
    expect(soloL).to.not.be.an("undefined");
  });

  it("La variable soloA vale 7 después del bucle", () => {
    expect(soloA).to.equal(7);
  });

  it("La variable soloL vale 4 después del bucle", () => {
    expect(soloL).to.equal(4);
  });
});

describe("Test - Bucles III", () => {
  it("La variables longitud debe estar definida", () => {
    expect(longitud).to.not.be.an("undefined");
  });

  it("La variable longitud vale 51 después del bucle", () => {
    expect(longitud).to.equal(51);
  });
});
