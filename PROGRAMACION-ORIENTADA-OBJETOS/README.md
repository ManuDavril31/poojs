# poojs

En JavaScript, una clase es un molde o plantilla que se utiliza para crear objetos con propiedades y métodos específicos. Es decir, una clase es como un plano para construir objetos con características similares.

Por ejemplo, si queremos crear un objeto "Perro" con propiedades como "nombre", "raza" y "edad", y métodos como "ladrar" y "correr", podemos definir una clase "Perro" que contenga estas propiedades y métodos. Luego, podemos utilizar esta clase para crear varios objetos "Perro" con diferentes valores para sus propiedades.

La sintaxis para crear una clase en JavaScript es la siguiente:

`class Perro {
constructor(nombre, raza, edad) {
this.nombre = nombre;
this.raza = raza;
this.edad = edad;
}

ladrar() {
console.log("¡Guau!");
}

correr() {
console.log(`${this.nombre} está corriendo`);
}
}`

En este ejemplo, la clase "Perro" tiene un constructor que define las propiedades "nombre", "raza" y "edad", y dos métodos "ladrar" y "correr". Para crear un objeto "Perro", podemos utilizar el constructor de la clase de la siguiente manera:

`const miPerro = new Perro("Fido", "Labrador", 5);`

En este caso, se crea un objeto "Perro" llamado "miPerro" con el nombre "Fido", la raza "Labrador" y la edad "5". Podemos llamar a los métodos de este objeto de la siguiente manera:

`miPerro.ladrar(); // Output: ¡Guau!
miPerro.correr(); // Output: Fido está corriendo `

https://github.com/alura-es-cursos/1772-javaScript-introduccion-a-la-orientacion-a-objetos/tree/Aula2

https://github.com/alura-es-cursos/1772-javaScript-introduccion-a-la-orientacion-a-objetos/tree/Aula4
