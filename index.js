import { Cliente } from "./modulos-javascrip/Cliente.js";
import { CuentaCorriente } from "./modulos-javascrip/CuentaCorriente.js";

// const nombreCliente = "Manuel";
// const dniCliente = "1231561";
// const numeroCuenta = "1564881";
// const saldoCuenta = 1000;

//DEFINICION DE CLASE

// class Cliente {
//   //DEFINIENDO LOS VALORES POR DEFECTO, PARA ESO NOS VA A SERVIR EL CONSTRUCTOR, QUE SE EJECUTA AL MOMENTO DE CREAR UNA INSTANCIA
//   constructor() {
//     this.nombreCliente = "";
//     this.dniCliente = "";
//     this.numeroCuenta = "";
//     this.#saldoCuenta = 0;
//   }
//   //PROPIEDADES DE LA CLASE
//   nombreCliente;
//   dniCliente;
//   numeroCuenta;
//   #saldoCuenta; //con el numeral # indicamos que la propiedad va a ser privada
//   //METODOS DE LA CLASE
//   depositoEnCuenta(valor) {
//     if (valor > 0)
//       //para esta cuenta corriente this.
//       this.#saldoCuenta += valor;
//     return this.#saldoCuenta; //retornando el valor de el saldo de la cuenta
//   }
//   retirarDeCuenta(valor) {
//     if (valor <= this.#saldoCuenta) this.#saldoCuenta -= valor;
//     return this.#saldoCuenta;
//   }
// }

// INSTANCIAS CLASE CLIENTE

//CREANDO INSTANCIA DE CLIENTE #1

const cliente1 = new Cliente();
cliente1.nombreCliente = "Manuel";
cliente1.dniCliente = 12345;
cliente1.rutCliente = 1234587;

//CREANDO INSTANCIA DE LA CLASE CUENTACORRIENTE #1

const cuenta1 = new CuentaCorriente();
cuenta1.cliente = cliente1;
cuenta1.numeroCuenta = 151561;

//
const deposito = cuenta1.depositoEnCuenta(100);
console.log(`El saldo actual de la cuenta es ${deposito}`);
// console.log(cuenta1);

//
// const retiro = cuenta1.retirarDeCuenta(60);
// console.log(`El saldo actual de la cuenta es ${retiro}`);
// console.log(cuenta1);

//CREANDO INSTANCIA DE LA CLASE CLIENTE #2
const cliente2 = new Cliente();
cliente2.nombreCliente = "Nevis";
cliente2.dniCliente = 141414;
cliente2.rutCliente = 12524;

//CREANDO INSTANCIA DE LA CLASE CUENTACORRIENTE #2

const cuenta2 = new CuentaCorriente();
cuenta2.cliente = cliente2;
cuenta2.numeroCuenta = "54784";

// TRANFERIR DINERO DE LA CUENTA DE MANUEL A LA CUENTA DE NEVIS
cuenta1.transferirParaCuenta(20, cuenta2);

//VERIFICANDO SALDO DE LAS CUENTAS
const saldoCuenta1 = cuenta1.verSaldo();
console.log(`El saldo de la cuenta1 (Manuel) es de: ${saldoCuenta1}`);

const saldoCuenta2 = cuenta2.verSaldo();
console.log(`El saldo de la cuenta2 (Nevis) es de: ${saldoCuenta2}`);
