var autores = [
  {
    ID: 1,
    Nombre: "John",
    Apellido: "Tolkien",
    FechaNacimiento: "3/1/1892",
  },
  {
    ID: 2,
    Nombre: "Brandon",
    Apellido: "Mull",
    FechaNacimiento: "8/11/1974",
  },
  {
    ID: 3,
    Nombre: "Paulo",
    Apellido: "Coelho",
    FechaNacimiento: "24/8/1947",
  },
  {
    ID: 4,
    Nombre: "Carmen",
    Apellido: "Laforet",
    FechaNacimiento: "6/9/1921",
  },
];

function obtenerAutores() {
  return autores;
}

function agregarAutor(autor) {
  autores.push(autor)
}

function actualizarAutor(autorID,autor){
  let autorOriginal = autores.find(x => x.ID == autorID)
  console.log("autorOriginal",autorOriginal)
  autorOriginal.Apellido = autor.Apellido
  autorOriginal.Nombre = autor.Nombre
  autorOriginal.FechaNacimiento = autor.FechaNacimiento
}

function obtenerPorID(autorID){
  let autorOriginal = autores.find(x => x.ID == autorID);
  console.log(autorOriginal)
  console.log(autorID)
  return autorOriginal
}

function borrarAutor(autorID){
  let autorOriginal = autores.find(x => x.ID == autorID);
  const indice = autores.indexOf(autorOriginal)
  autores.splice(autorOriginal,1)
}

module.exports = { obtenerAutores, agregarAutor, actualizarAutor, obtenerPorID, borrarAutor };
