import { Cliente } from "./Cliente.js";

export class Cuenta {
  // PROPIEDADES PRIVADAS DECLARAMOS ARRIBA DE CONSTRUCTOR

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

  set cliente(valor) {
    if (valor instanceof Cliente) this.#cliente = valor;
  }

  get cliente() {
    return this.#cliente;
  }

  // METODOS DE LA CLASE

  depositoEnCuenta(valor) {
    if (valor > 0) this.#saldo += valor;
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

  prueba() {
    console.log("Método padre");
  }

  retirarDeCuenta(valor) {
    _retirarDeCuenta(valor, 0);
  }

  // Métodos privados: le ponermos una barra baja _ para identificar que sea un método privado

  _retirarDeCuenta(valor, comision) {
    valor = valor * (1 + comision / 100);
    if (valor <= this.#saldo) this.#saldo -= valor;
    return this.#saldo;
  }
}
