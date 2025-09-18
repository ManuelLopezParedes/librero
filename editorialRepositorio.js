editoriales = [
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

function obtenerEditoriales(){
  return editoriales
}

function obtenerPorId(editorialID){
  const editorialOriginal = editoriales.find(x => x.ID == editorialID)
  return editorialOriginal
}

function agregarEditorial(editorial){
  editoriales.push(editorial)
}

function actualizarEditorial(editorialID,editorial){
  const editorialOriginal = editoriales.find(x => x.ID == editorialID)
  editorialOriginal.Nombre = editorial.Nombre
  editorialOriginal.LugarFundacion = editorial.LugarFundacion
  editorialOriginal.AñoFundacion = editorial.AñoFundacion
}

function borrarEditorial(editorialID){
  const editorialOriginal = editoriales.find(x => x.ID == editorialID)
  const indice = editoriales.indexOf(editorialOriginal)
  editoriales.splice(indice,1)
}

module.exports = {obtenerEditoriales, obtenerPorId, agregarEditorial, actualizarEditorial, borrarEditorial}