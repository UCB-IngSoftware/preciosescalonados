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

  it("calcula el monto de 4 suscripciones", () => {
    const suscripciones = new Suscripciones();
    expect(suscripciones.calcularMontoPara(4)).toEqual(4 * 239);
  });

  it("calcula el monto de 5 suscripciones", () => {
    const suscripciones = new Suscripciones();
    expect(suscripciones.calcularMontoPara(5)).toEqual(5 * 239);
  });

  it("calcula el monto de 11 suscripciones", () => {
    const suscripciones = new Suscripciones();
    expect(suscripciones.calcularMontoPara(11)).toEqual(2409);
  });
});
