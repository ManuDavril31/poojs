export class Cuenta {
  // PROPIEDADES PRIVADAS DECLARAMOS ARRIBA DE CONSTRUCTOR

  #cliente = null;
  #saldo;

  // CONSTRUCTO CON PARAMETROS

  constructor(tipo, cliente, numero, agencia, saldo) {
    // PROPIEDADES E INICIALIZANDOLAS CUANDO SE CREA UNA INSTANCIAS DE LA CLASE EN EL CONSTRUCTOR
    this.tipo = tipo;
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
    if (this.tipo === "Corriente") valor = valor * 1.05;
    if (this.tipo === "Ahorro") valor = valor * 1.02;
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
