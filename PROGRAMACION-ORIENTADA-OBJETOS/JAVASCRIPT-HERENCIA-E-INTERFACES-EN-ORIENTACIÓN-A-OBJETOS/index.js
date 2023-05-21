/*Importación de clases*/
import { Cliente } from "./Cliente.js";
import { CuentaAhorro } from "./Cuentas/CuentaAhorro.js";
import { CuentaCorriente } from "./Cuentas/CuentaCorriente.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Director } from "./Empleados/Director.js";
import { Gerente } from "./Empleados/Gerente.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

const cliente1 = new Cliente("Manuel", "13804050", "123224");
cliente1.asignarClave = "123";
console.log("--->", SistemaAutenticacion.login(cliente1, "123"));
const cliente2 = new Cliente("Nevis", "16979808", "8989");

const cuentaDeManuel = new CuentaCorriente(cliente1, "1", "001");
const cuentaDeNevis = new CuentaCorriente(cliente2, "2", "002");

const cuentaAhorroManuel = new CuentaAhorro(cliente1, "1515", "001", 0);

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

//

cuentaDeManuel.prueba();

//

console.log("//////////////////////////////////////");

const empleado = new Empleado("Manuel Martinez", "1", 1000);
empleado.asignarClave = "123";
const director = new Director("Victoria Marinez", "3", 2000);
const gerente = new Gerente("Nevis Polo", "2", 3000);

console.log(
  empleado.verBonificacion(),
  "\n",
  gerente.verBonificacion(),
  "\n",
  director.verBonificacion()
);

console.log("-------------------------------- \n");

// CLAVE

console.log(SistemaAutenticacion.login(empleado, "123"));
