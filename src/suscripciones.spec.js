import Suscripciones from "./suscripciones";

describe("Suscripciones", () => {
  it("calcula el monto de 1 suscripcion", () => {
    const suscripciones = new Suscripciones();
    expect(suscripciones.calcularMontoPara(1)).toEqual(299);
  });

  it("calcula el monto de 2 suscripciones", () => {
    const suscripciones = new Suscripciones();
    expect(suscripciones.calcularMontoPara(2)).toEqual(598);
  });

  it("calcula el monto de 3 suscripciones", () => {
    const suscripciones = new Suscripciones();
    expect(suscripciones.calcularMontoPara(3)).toEqual(717);
  });
});
