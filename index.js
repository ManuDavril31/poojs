const nombreCliente = "Manuel";
const dniCliente = "1231561";
const numeroCuenta = "1564881";
const saldoCuenta = 1000;

//UNA CLASE ES UN MOLDE

class Cliente {
  nombreCliente;
  dniCliente;
  numeroCuenta;
  saldoCuenta;
}

// INSTANCIAS CLASE CLIENTE

const cliente1 = new Cliente();

cliente1.nombreCliente = "Manuel";
cliente1.dniCliente = 1561;
cliente1.numeroCuenta = 151561;
cliente1.saldoCuenta = 58181;

console.log(cliente1);
