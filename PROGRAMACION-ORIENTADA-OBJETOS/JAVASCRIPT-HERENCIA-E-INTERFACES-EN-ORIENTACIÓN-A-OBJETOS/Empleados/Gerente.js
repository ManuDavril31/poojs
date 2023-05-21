import { Empleado } from "./Empleado.js";

export class Gerente extends Empleado {
  constructor(nombre, dni, salario) {
    super(nombre, dni, salario);
  }

  verBonificacion() {
    const bono = 5;
    //Para llamar un metodo privado y sobreescribirlo hay que llamar a super
    return super._verBonificacion(bono);
  }
}
