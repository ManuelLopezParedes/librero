const libros = [
      {
        ID: 1,
        Nombre: "El señor de los anillos",
        Autor: "J. R. R. Tolkien",
        Editorial: "Minotauro",
      },
      { ID: 2,
        Nombre: "Fablehaven",
        Autor: "Brandon Mull",
        Editorial: "Roca" },
      {
        ID: 3,
        Nombre: "Nada",
        Autor: "Carmen Laforet",
        Editorial: "Planeta",
      },
      {
        ID: 4,
        Nombre: "El alquimista",
        Autor: "Paulo Coelho",
        Editorial: "Debolsillo",
      }
    ];

function obtenerLibros(){
  return libros
}

function obtenerPorID(libroID){
  let libroOriginal = libros.find(x => x.ID == libroID)
  return libroOriginal
}

function agregarLibro(libro){
  libros.push(libro)
}

function actualizarLibro(libroID,libro){
  libroOriginal = libros.find(x => x.ID == libroID)
  libroOriginal.Nombre = libro.Nombre
  libroOriginal.Autor = libro.Autor 
  libroOriginal.Editorial = libro.Editorial
}

function borrarLibro(libroID){
  libroOriginal = libros.find(x => x.ID == libroID)
  const indice = libros.indexOf(libroOriginal)
  libros.splice(indice,1)
}

module.exports = {obtenerLibros, obtenerPorID, agregarLibro, actualizarLibro, borrarLibro}