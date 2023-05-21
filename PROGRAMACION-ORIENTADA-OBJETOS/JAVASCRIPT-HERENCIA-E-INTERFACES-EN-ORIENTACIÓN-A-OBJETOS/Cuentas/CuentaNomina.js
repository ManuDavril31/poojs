import { Cuenta } from "./Cuenta.js";

export class CuentaNomina extends Cuenta {
  constructor(cliente, numero, agencia, saldo) {
    super(cliente, numero, agencia, saldo);
  }

  // Sobreescribimos retirarDeCuente()
  retirarDeCuenta(valor) {
    super._retirarDeCuenta(valor, 1);
  }
}
