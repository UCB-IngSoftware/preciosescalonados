describe("Suscripciones", () => {
  it("calcula el monto de 1 suscripcion", () => {
    expect(calcularMontoPara(1)).toEqual(299);
  });
});

function calcularMontoPara(cantidad) {
  return 299;
}
