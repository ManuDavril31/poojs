// const nombreCliente = "Manuel";
// const dniCliente = "1231561";
// const numeroCuenta = "1564881";
// const saldoCuenta = 1000;

//DEFINICION DE CLASE

class Cliente {
  //DEFINIENDO LOS VALORES POR DEFECTO, PARA ESO NOS VA A SERVIR EL CONSTRUCTOR, LO CUAL SE EJECUTA AL MOMENTO DE CREAR UNA INSTANCIA
  constructor() {
    this.nombreCliente = "";
    this.dniCliente = "";
    this.numeroCuenta = "";
    this.saldoCuenta = 0;
  }
  //PROPIEDADES DE LA CLASE
  nombreCliente;
  dniCliente;
  numeroCuenta;
  saldoCuenta;
  //METODOS DE LA CLASE
  depositoEnCuenta(valor) {
    //para esta cuenta corriente this.
    this.saldoCuenta += valor;
  }
  retirarDeCuenta(valor) {
    this.saldoCuenta -= valor;
  }
}

// INSTANCIAS CLASE CLIENTE

const cliente1 = new Cliente();

cliente1.nombreCliente = "Manuel";
cliente1.dniCliente = 1561;
cliente1.numeroCuenta = 151561;
cliente1.saldoCuenta = 151;
cliente1.depositoEnCuenta(15);

console.log(cliente1);
