import { Cliente } from "./Cliente.js";

export class CuentaCorriente {
  //PROPIEDADES DE LA CLASE
  #cliente;
  numeroCuenta;
  #saldoCuenta; //con el numeral # indicamos que la propiedad va a ser privada

  //DEFINIENDO LOS VALORES POR DEFECTO, PARA ESO NOS VA A SERVIR EL CONSTRUCTOR, QUE SE EJECUTA AL MOMENTO DE CREAR UNA INSTANCIA
  constructor() {
    this.cliente = null; //Se pone como null, por que este tipo de dato no va a ser de tipo primitivo [string, number, boolean, etc] en este caso va a ser un dato de tipo Cliente.
    this.numeroCuenta = "";
    this.#saldoCuenta = 0;
  }

  // SET

  set cliente(valor) {
    // Si el valor que estoy recibiendo es una instancia de la clase Cliente atribuye el contenido de la propiedad this.#cliente al valor que estor recibiendo
    if (valor instanceof Cliente) this.#cliente = valor;
  }

  // GET

  get cliente() {
    return this.#cliente;
  }

  //METODOS DE LA CLASE

  verSaldo() {
    return this.#saldoCuenta;
  }

  depositoEnCuenta(valor) {
    if (valor > 0)
      //para esta cuenta corriente this.
      this.#saldoCuenta += valor;
    return this.#saldoCuenta; //retornando el valor de el saldo de la cuenta
  }
  retirarDeCuenta(valor) {
    if (valor <= this.#saldoCuenta) this.#saldoCuenta -= valor;
    return this.#saldoCuenta;
  }

  transferirParaCuenta(valor, cuentaDestino) {
    this.retirarDeCuenta(valor);
    cuentaDestino.depositoEnCuenta(valor);
  }
}
