export class constructorCliente {
  // PROPIEDADES
  nombreClient;
  dniCliente;
  rutCliente;
  #saldo;

  // CONSTRUCTOR
  constructor(nombre, dni, rut) {
    // PASANDO PARAMETROS AL CONSTRUCTOR
    this.nombreClient = nombre;
    this.dniCliente = dni;
    this.rutCliente = rut;
  }

  // SET
  set saldo(valor) {
    this.#saldo = valor;
  }

  // GET

  get saldo() {
    return this.#saldo;
  }
}

// INSTANCIA DE constructorCliente

const cliente1 = new constructorCliente("Manuel", 1231, 1212, 10);
console.log(cliente1);
