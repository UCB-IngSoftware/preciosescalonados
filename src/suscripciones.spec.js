import Suscripciones from "./suscripciones";

describe("Suscripciones", () => {
  it("calcula el monto de 1 suscripcion", () => {
    const suscripciones = new Suscripciones();
    expect(suscripciones.calcularMontoPara(1)).toEqual(299);
  });
});
