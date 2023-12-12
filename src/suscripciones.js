const TARIFA_HASTA_2 = 299;
const TARIFA_3_10 = 239;
export default class Suscripciones {
  calcularMontoPara(cantidad) {
    if (cantidad <= 2) {
      return TARIFA_HASTA_2 * cantidad;
    }
    return TARIFA_3_10 * cantidad;
  }
}
