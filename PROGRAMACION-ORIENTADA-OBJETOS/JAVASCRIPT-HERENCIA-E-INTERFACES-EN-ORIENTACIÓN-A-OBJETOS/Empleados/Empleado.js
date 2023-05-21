export class Empleado {
  #nombre = "";
  #dni = "";
  #salario = 0;
  #clave = "";

  constructor(nombre, dni, salario) {
    this.#nombre = nombre;
    this.#dni = dni;
    this.#salario = salario;
    this.#clave = "";
  }

  //ASIGNAR CLAVE
  set asignarClave(clave) {
    this.#clave = clave;
  }

  //RETORNAR CLAVE
  get clave() {
    return this.#clave;
  }
  verBonificacion() {
    return this.#salario;
  }

  //Para llamar un metodo privado y sobreescribirlo hay que llamar a super
  _verBonificacion(bono) {
    return this.#salario + (this.#salario * bono) / 100;
  }
}
