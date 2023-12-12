export default class Suscripciones {
  calcularMontoPara(cantidad) {
    if (cantidad <= 2) {
      return 299 * cantidad;
    }
    return 239 * cantidad;
  }
}
