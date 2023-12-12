const TARIFA_HASTA_2 = 299;
const TARIFA_3_10 = 239;
const TARIFA_11_25 = 219;
const TARIFA_26_50 = 199;
export default class Suscripciones {
  calcularMontoPara(cantidad) {
    if (cantidad <= 2) {
      return TARIFA_HASTA_2 * cantidad;
    }
    if (cantidad <= 10) {
      return TARIFA_3_10 * cantidad;
    }
    if (cantidad <= 25) {
      return TARIFA_11_25 * cantidad;
    }
    return TARIFA_26_50 * cantidad;
  }
}
