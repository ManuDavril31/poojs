# Null y Undefined

Una buena práctica en no tener variables undefined, si todavia no se que valor va a tener la variable, javascript nos proporciona la palabrta reservada null.

## Ejemplo:

Tenemos un variable de tipo undefined y queremos acceder a una propiedad de esa variable. Esto no va a generar un error.

const valor = undefined;

console.log(valor.nombre) // -> Error: no se puede leer una propiedad 'nombre' de un tipo undefined

Lo mejor es inicializar esa variable si no sabemos que tipo de datos no va a retornar como null

## Ejemplo:

const valor = null;

console.log(valor.nombre) // -> valor.nombre: null

if(valor.nombre) // Si existe el valor.nombre muestrame su contenido
console.log(valor.cliente) // -> nos muestra el contenido de esa propiedad

else // si no existe muestrame todo el contenido de la varible valor.
console.log(valor) // -> nos muestra todo el contenido de ese objeto.

-------------------///--------------------------------------------------

# CHAT GPT

En JavaScript, null y undefined son valores especiales que se utilizan para representar la ausencia de un valor. Aunque pueden parecer similares, tienen algunas diferencias importantes:

null se utiliza para indicar que una variable o propiedad no tiene valor o que debe establecerse en un valor nulo intencionalmente. Es decir, se asigna a una variable o propiedad para indicar que no hay ningún valor presente.

undefined se utiliza para indicar que una variable o propiedad no ha sido declarada o inicializada con ningún valor. Es decir, una variable o propiedad que no se ha inicializado se considera undefined.

Es importante entender la diferencia entre null y undefined, ya que puede afectar el comportamiento de su código. En general, null se utiliza cuando se espera un valor que no está presente, mientras que undefined se utiliza cuando se espera que una variable o propiedad tenga un valor pero aún no se ha definido.

Para verificar si una variable o propiedad es null o undefined, puede utilizar el operador de comparación estricta (===), que compara tanto el valor como el tipo de datos:

## Ejemplo

var x = null;
var y;

console.log(x === null); // true
console.log(y === undefined); // true
También puede utilizar el operador de comparación no estricta (==), que convierte los valores null y undefined a valores booleanos antes de realizar la comparación:

## Ejemplo

var x = null;
var y;

console.log(x == null); // true
console.log(y == undefined); // true
En resumen, null se utiliza para representar la ausencia intencional de un valor, mientras que undefined se utiliza para representar la ausencia no intencional de un valor.
