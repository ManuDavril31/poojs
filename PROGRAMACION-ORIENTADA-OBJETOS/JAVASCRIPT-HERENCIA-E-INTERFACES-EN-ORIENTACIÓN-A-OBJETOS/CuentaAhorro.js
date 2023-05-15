export class CuentaAhorro {
  // PROPIEDADES PRIVADAS

  #cliente = null;
  #saldo;

  // CONSTRUCTO CON PARAMETROS

  constructor(cliente, numero, agencia, saldo) {
    // PROPIEDADES E INICIALIZANDOLAS CUANDO SE CREA UNA INSTANCIAS DE LA CLASE EN EL CONSTRUCTOR
    this.numero = numero;
    this.agencia = agencia;
    this.#cliente = cliente;
    this.#saldo = saldo;
  }

  // METODOS DE LA CLASE

  depositoEnCuenta(valor) {
    if (valor > 0) this.#saldo += valor;
    return this.#saldo;
  }

  retirarDeCuenta(valor) {
    if (valor <= this.#saldo) this.#saldo -= valor;
    return this.#saldo;
  }

  verSaldo() {
    return this.#saldo;
  }

  transferirParaCuenta(valor, cuentaDestino) {
    this.retirarDeCuenta(valor);
    cuentaDestino.depositoEnCuenta(valor);
    valor = 200;
    valor = valor * 1000;
  }
}
