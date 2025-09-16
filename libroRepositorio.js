function obtenerLibros(){
    const libro = [
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

    return libro
}

module.exports = {obtenerLibros}