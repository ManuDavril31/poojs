## Vamos a crear un archivo para cada Clase

Donde cada clase o archivo va hacer un modulo, con esto el archivo index queda más libre solo con lo que necesitamos.

## Importando y exportando los mudulos

Debemos en nuestro archivo index.js hacer las importaciones necesarias

para importar, utilizamos la palabra reservada import {} from '....'

para importar y exportar por modulos debemos emplear la configuraciones, entonces para eso vamos a ejecutar el comando:

### npm init o yarn init

Donde este nos va a generar las configuraciones con tadas la definiciones necesarias.

# ¿Para que me va a servir la MODULARIZACIÓN?

La modularización en JavaScript se utiliza para dividir un programa grande en módulos más pequeños y manejables, lo que facilita la comprensión, el mantenimiento y la reutilización del código. Los módulos son unidades de código independientes que se pueden importar y exportar en otros módulos según sea necesario.

Al dividir el código en módulos, se pueden identificar mejor las dependencias entre diferentes partes del programa y se pueden gestionar de manera más eficiente. Además, la modularización permite ocultar detalles de implementación y limitar el alcance de las variables y funciones a solo las partes relevantes del programa, lo que puede mejorar la seguridad y la estabilidad del código.

En resumen, la modularización en JavaScript se utiliza para:

Dividir un programa grande en partes más pequeñas y manejables.
Facilitar la comprensión y el mantenimiento del código.
Mejorar la reutilización del código.
Identificar y gestionar las dependencias entre diferentes partes del programa.
Ocultar detalles de implementación y mejorar la seguridad y la estabilidad del código.

https://github.com/alura-es-cursos/1772-javaScript-introduccion-a-la-orientacion-a-objetos/tree/Aula3

--------------------- ///---------------------------

# CHAT GPT

Las palabras clave set y get se utilizan en las clases de JavaScript para definir propiedades de objeto que se comportan como métodos y permiten controlar el acceso y la modificación de dichas propiedades.

La palabra clave get se utiliza para definir un método que se invoca automáticamente cuando se accede a una propiedad de un objeto. Este método debe devolver el valor de la propiedad. Por ejemplo, en el siguiente código se define una clase Persona con una propiedad nombre que se define usando la palabra clave get:

## Ejemplo

class Persona {
constructor(nombre) {
this.\_nombre = nombre;
}

get nombre() {
return this.\_nombre;
}

}

En este caso, la propiedad nombre se define con la palabra clave get, lo que significa que cuando se accede a ella a través de una instancia de la clase Persona, se invoca automáticamente el método get nombre() y devuelve el valor de la propiedad \_nombre.

La palabra clave set se utiliza para definir un método que se invoca automáticamente cuando se establece un valor en una propiedad de un objeto. Este método toma un parámetro que representa el nuevo valor de la propiedad y se utiliza para asignar ese valor a una propiedad interna del objeto. Por ejemplo, en el siguiente código se define una clase Persona con una propiedad nombre que se define usando las palabras clave get y set:

## Ejemplo

class Persona {
constructor(nombre) {
this.\_nombre = nombre;
}

get nombre() {
return this.\_nombre;
}

set nombre(nuevoNombre) {
this.\_nombre = nuevoNombre;
}
}

En este caso, la propiedad nombre se define con las palabras clave get y set, lo que significa que cuando se accede a ella a través de una instancia de la clase Persona, se invoca automáticamente el método get nombre() y cuando se establece un valor en ella se invoca el método set nombre(nuevoNombre). Este último método se utiliza para asignar el valor del parámetro nuevoNombre a la propiedad \_nombre.

En resumen, las palabras clave set y get se utilizan en las clases de JavaScript para definir propiedades de objeto que se comportan como métodos y permiten controlar el acceso y la modificación de dichas propiedades.
