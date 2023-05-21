export class Cliente {
  nombreCliente;
  dniCliente;
  rutCliente;
  #clave;

  constructor(nombreCliente, dniCliente, rutCliente) {
    this.nombreCliente = nombreCliente;
    this.dniCliente = dniCliente;
    this.rutCliente = rutCliente;
    this.#clave = "";
  }

  set asignarClave(clave) {
    this.#clave = clave;
  }

  get clave() {
    return this.#clave;
  }
}
