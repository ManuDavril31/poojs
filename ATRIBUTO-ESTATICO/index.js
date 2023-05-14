class Persona {
  static cantidadPersona = 0;

  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    Persona.cantidadPersona++; // Ya me refiero a la clase en general y no a una instancia en particular si no a todas las instancias.
  }
}

// INSTANCIA DE LA CLASE PERSONA

const persona1 = new Persona("Manuel", "Martines");

console.log(persona1);
console.log(Persona.cantidadPersona);

const persona2 = new Persona("Victoria", "Martinez");
console.log(persona2);
console.log(Persona.cantidadPersona);
