//? PRIMER DESAFIO

class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre,
      this.apellido = apellido,
      this.libros = libros || [],
      this.mascotas = mascotas || [];
    }
  
    getFullName() {
      return `${this.nombre} ${this.apellido}`;
    }
  
    addMascota(mascota) {
      this.mascotas.push(mascota);
    }
  
    countMascotas() {
      return this.mascotas.length;
    }
  
    addBook(nombre, autor) {
      this.libros.push({ nombre, autor });
    }
  
    getBookNames() {
      return this.libros.map(({ nombre }) => nombre).join(", ");
    }
    getBookAutor() {
      return this.libros.map(({ autor }) => autor).join(".");
    }
  }
  
  usuario = new Usuario("Nicolas", "Roude");
  console.log(`El nombre de usuario es: ${usuario.getFullName()}.`);
  usuario.addMascota("Perra");
  usuario.addMascota("Gato");
  console.log(`Este usuario tiene ${usuario.countMascotas()} mascotas.`);
  usuario.addBook("El faro del fin del mundo", "Julio Verne");
  console.log(`Libros del usuario: ${usuario.getBookNames()} de ${usuario.getBookAutor()}`);
  usuario.addBook("El principito", "Antoine de Saint-Exupery");
  console.log(`Libros del usuario: ${usuario.getBookNames()}`);