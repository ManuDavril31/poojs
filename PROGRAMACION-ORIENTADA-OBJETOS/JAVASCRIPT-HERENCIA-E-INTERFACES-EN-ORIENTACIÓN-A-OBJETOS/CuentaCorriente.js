import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta {
  static cantidadCuentas = 0;

  constructor(cliente, numero, agencia) {
    super(cliente, numero, agencia, 0); // cero es el valor de saldo, no se lo pasamos por parametro porque siempre lo iniciaremos en cero
    CuentaCorriente.cantidadCuentas++;
  }
  // Aqui llame al método padre desde el hijo
  prueba() {
    super.prueba();
  }

  //Aqui sobre escribi el método prueba del padre en el hijo
  prueba() {
    console.log("Método hijo");
  }

  // Sobreescribe el método retirarDeCuenta de la clase padre
  retirarDeCuenta(valor) {
    // valor = valor * 1.05;

    // No se puede acceder a la propiiedad '#saldo' fuera de la clase padre Cuenta porque tiene un identificador privado
    /* 
    NO PUEDO HACER ESTO
    if (valor <= this.#saldo) this.#saldo -= valor;
     return this.#saldo;     
    */
    // Simplemente modifico el valor de la variable valor y llamo al super.retirarDeCuenta(valor) y le paso ya el valor modificado.

    super._retirarDeCuenta(valor, 5);
  }
}
