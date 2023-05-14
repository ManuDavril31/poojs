# CONSTRUCTO DE CLASE

El constructor es una función que se ejecuta automaticamente cada que se crea una instancia de esa clase

----------////--------

# CHAT GPT

Los constructores son funciones especiales en JavaScript que se utilizan en las clases para inicializar los objetos creados a partir de esa clase. El constructor se invoca automáticamente cuando se crea una nueva instancia de la clase utilizando el operador new.

En una clase de JavaScript, el constructor se define utilizando el método especial constructor(). Este método se ejecuta automáticamente cuando se crea una nueva instancia de la clase y se utiliza para inicializar las propiedades del objeto.

Por ejemplo, en la siguiente clase Persona, se define un constructor que toma dos parámetros (nombre y edad) y los utiliza para inicializar las propiedades \_nombre y \_edad del objeto:

# Ejemplo

class Persona {
constructor(nombre, edad) {
this.\_nombre = nombre;
this.\_edad = edad;
}

get nombre() {
return this.\_nombre;
}

get edad() {
return this.\_edad;
}
}

Cuando se crea una nueva instancia de esta clase utilizando el operador new, el constructor se ejecuta automáticamente y se utiliza para inicializar las propiedades \_nombre y \_edad del objeto creado:

const persona1 = new Persona("Juan", 25);
console.log(persona1.nombre); // "Juan"
console.log(persona1.edad); // 25

## En resumen

los constructores en las clases de JavaScript se utilizan para inicializar los objetos creados a partir de esa clase. El constructor se define utilizando el método constructor() y se ejecuta automáticamente cuando se crea una nueva instancia de la clase utilizando el operador new. El constructor se utiliza para inicializar las propiedades del objeto.
