function obtenerEditoriales(){
    editorial = [
      {
        ID: 1,
        Nombre: "Roca",
        LugarFundacion: "Barcelona, España",
        AñoFundacion: "2003",
      },
      {
        ID: 2,
        Nombre: "Minutauro",
        LugarFundacion: "Buenos Aires, Argentina",
        AñoFundacion: "1995",
      },
      {
        ID: 3,
        Nombre: "Planeta",
        LugarFundacion: "Barcelona, España",
        FechaFundacion: "1949",
      },
      {
        ID: 4,
        Nombre: "Debolsillo",
        LugarFundacion: "Italia",
        FechaFundacion: "2001",
      },
    ];

    return editorial
}

module.exports = {obtenerEditoriales}