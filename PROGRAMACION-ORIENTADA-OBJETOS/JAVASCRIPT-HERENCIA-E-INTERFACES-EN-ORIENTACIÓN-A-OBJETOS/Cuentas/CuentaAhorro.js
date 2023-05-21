import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta {
  constructor(cliente, numero, agencia, saldo) {
    super(cliente, numero, agencia, saldo);
  }

  // Sobreescribe el método retirarDeCuenta de la clase padre
  retirarDeCuenta(valor) {
    // valor = valor * 1.02;
    // No se puede acceder a la propiiedad '#saldo' fuera de la clase padre Cuenta porque tiene un identificador privado
    /* 
    NO PUEDO HACER ESTO
    if (valor <= this.#saldo) this.#saldo -= valor;
     return this.#saldo;     
    */
    // Simplemente modifico el valor de la variable valor y llamo al super.retirarDeCuenta(valor) y le paso ya el valor modificado.

    super._retirarDeCuenta(valor, 2);
  }
}
