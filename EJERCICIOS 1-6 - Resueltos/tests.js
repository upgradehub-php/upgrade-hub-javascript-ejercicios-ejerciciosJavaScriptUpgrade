// ¡NO TOCAR ESTE ARCHIVO! MODIFICARLO HARÁ QUE LOS RESULTADOS SEAN ERRÓNEOS Y EL EJERCICIO NO ESTÉ CORRECTAMENTE RESUELTO

// Set up mocha
mocha.setup("bdd");

// Establish variables for use in all tests
const { assert, expect } = chai;

describe("Test - Variables I", () => {
  it("Las variables tengoDinero y meDaMiedoVolar existen", () => {
    expect(tengoDinero).to.not.be.an("undefined");
    expect(meDaMiedoVolar).to.not.be.an("undefined");
  });

  it("La variable puedoIrAMexico existe", () => {
    expect(puedoIrAMexico).to.not.be.an("undefined");
  });

  it("La variable puedoIrAMexico cambia su valor a true", () => {
    expect(puedoIrAMexico).to.equal(true);
  });
});
describe("Test - Variables II", () => {
  it("Las variables name y surname existen", () => {
    expect(name).to.not.be.an("undefined");
    expect(surname).to.not.be.an("undefined");
  });

  it('La variable name debe valer "Upgrade"', () => {
    expect(name).to.equal("Upgrade");
  });

  it('La variable surname debe valer "Hub"', () => {
    expect(surname).to.equal("Hub");
  });
});

describe("Test - Operadores I", () => {
  it("Las variables numeroA y numeroB existen y valen 5 y 7", () => {
    expect(numeroA).to.equal(5);
    expect(numeroB).to.equal(7);
  });

  it("La variable sumaTotal es la suma de numeroA y numeroB", () => {
    expect(sumaTotal).to.equal(12);
  });

  it("La variable restaTotal es la resta de numeroB menos numeroA", () => {
    expect(restaTotal).to.equal(2);
  });

  it("La variable multiTotal es la multiplicación de sumaTotal por restaTotal", () => {
    expect(multiTotal).to.equal(24);
  });

  it("La variable divisionTotal es la división multiTotal entre restaTotal", () => {
    expect(divisionTotal).to.equal(12);
  });
});
describe("Test - Operadores II", () => {
  it("Las variables nombre y apellido existen y valen Juan y Upgrader", () => {
    expect(nombre).to.equal("Juan");
    expect(apellido).to.equal("Upgrader");
  });

  it("La variable nombreCompleto es la suma de nombre y apellido separados por un espacio", () => {
    expect(nombreCompleto).to.equal("Juan Upgrader");
  });

  it("La variable edad vale 28 años", () => {
    expect(edad).to.equal(28);
  });

  it("La variable mensaje vale Mi nombre es Juan Upgrader y tengo 28 años", () => {
    expect(mensaje).to.equal("Mi nombre es Juan Upgrader y tengo 28 años");
  });
});

describe("Test - Operadores Lógicos I", () => {
  it('Las variables edadPersona y edadParaCarnet existen y puedeTenerCarnet es "false"', () => {
    expect(edadPersona).to.not.be.an("undefined");
    expect(edadParaCarnet).to.not.be.an("undefined");
    expect(puedeTenerCarnet).to.be.false;
  });

  it("Las variables edadPersona y edadParaCarnet valen ahora 24 y 18 años", () => {
    expect(edadPersona).to.equal(24);
    expect(edadParaCarnet).to.equal(18);
  });

  it('Las variable puedoSacarmeElCarnet es ahora "true"', () => {
    expect(puedoSacarmeElCarnet).to.be.true;
  });
});
describe("Test - Operadores Lógicos II", () => {
  it("Las variables tengoDinero, meDaMiedoVolar y edad existen y tiene el valor correcto", () => {
    expect(tengoDinero).to.be.true;
    expect(meDaMiedoVolar).to.be.false;
    expect(edadVolar).to.equal(30);
  });

  it("Las variable puedoVolar está comprobada correctamente", () => {
    expect(puedoVolar).to.be.true;
  });
});
describe("Test - Operadores III", () => {
  it("Las variables culpable - sentencia existen", () => {
    expect(culpable).to.be.a("string");
    expect(sentencia).to.be.a("string");
  });

  it("culpable es igual a si", () => {
    expect(sentencia).to.be.a("string");
  });

  it("culpable es igual a no", () => {
    expect(sentencia).to.be.a("string");
  });

  it("culpable es otro", () => {
    expect(sentencia).to.be.a("string");
  });
});
