/*Importación de clases*/
import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuenta.js";

const cliente1 = new Cliente("Manuel", "13804050", "123224");
const cliente2 = new Cliente("Nevis", "16979808", "8989");

const cuentaDeManuel = new Cuenta("Corriente", cliente1, "1", "001", 0);
const cuentaDeNevis = new Cuenta("Corriente", cliente2, "2", "002", 0);

const cuentaAhorroManuel = new Cuenta("Ahorro", cliente1, "1515", "001", 0);

console.log(cuentaDeManuel);
cuentaDeManuel.depositoEnCuenta(5000);
console.log(cuentaDeManuel.verSaldo());
cuentaDeManuel.retirarDeCuenta(1000);
console.log(cuentaDeManuel.verSaldo());

console.log(cuentaAhorroManuel);
cuentaAhorroManuel.depositoEnCuenta(10000);
console.log(cuentaAhorroManuel.verSaldo());
cuentaAhorroManuel.retirarDeCuenta(500);
console.log(cuentaAhorroManuel.verSaldo());
