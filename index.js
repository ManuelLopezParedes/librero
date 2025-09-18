const express = require("express");
const app = express();
const port = 3000;
const libroRepositorio = require("./libroRepositorio");
const autorRepositorio = require("./autorRepositorio");
const editorialRepositorio = require("./editorialRepositorio");


app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("hola");
});

//------Ruta para la colección de Libros---------------------
// Buscar libros
app.get("/libro", (req, res) => {
  const libros = libroRepositorio.obtenerLibros();
  res.status(200).json(libros);
});

// Buscar libro por ID
app.get("/libro/:libroID", (req,res) =>{
  const libroID = parseInt(req.params.libroID);
  const libro = libroRepositorio.obtenerPorID(libroID);
  res.status(200).json(libro)
})

// Agregar libro
app.post("/libro", (req,res) =>{
  libroRepositorio.agregarLibro(req.body)
  res.status(201).json({id: 1,
    encodedkey: "",
    mensaje: "Dato registrado",
  })
})

// Actualizar libro
app.put("/libro/:libroID", (req,res) =>{
  const libroID = parseInt(req.params.libroID)
  const libro = req.body
  libroRepositorio.actualizarLibro(libroID,libro)
  res.status(200).json({
    id: 1,
    encodedkey: "",
    mensaje: "Dato actualizado",
  });
})

// Borrar libro
app.delete("/libro/:libroID", (req,res) =>{
  const libroID = parseInt(req.params.libroID)
  libroRepositorio.borrarLibro(libroID)
  res.status(200).json({
    id: 1,
    encodedkey: "",
    mensaje: "Dato eliminado",
  });
})

//------Ruta para la colección de Autores---------------------
// Buscar autores
app.get("/autor", (req, res) => {
  const autor = autorRepositorio.obtenerAutores();
  res.status(200).json(autor);
});

// Buscar Autor por ID
app.get("/autor/:autorID", (req, res) => {
  const autorID = parseInt(req.params.autorID);
  const autor = autorRepositorio.obtenerPorID(autorID);
  console.log(req.params);
  console.log(autor);
  res.status(200).json(autor);
});

// Agregar Autor
app.post("/autor", (req, res) => {
    autorRepositorio.agregarAutor(req.body)
    console.log(req.body)
  res.status(201).json({
    id: 1,
    encodedkey: "",
    mensaje: "Dato registrado",
  });
});

// Actualizar Autor
app.put("/autor/:autorID", (req,res) => {
    const autorID = parseInt(req.params.autorID)
    const autor = req.body
    autorRepositorio.actualizarAutor(autorID,autor)
    res.status(200).json({
      id: 1,
      encodedkey: "",
      mensaje: "Dato actualizado",
    });
})

// Borrar autor
app.delete("/autor/:autorID", (req,res) =>{
  const autorID = parseInt(req.params.autorID)
  autorRepositorio.borrarAutor(autorID)
  res.status(200).json({
    id: 1,
    encodedkey: "",
    mensaje: "Dato eliminado",
  });
})

//------Ruta para la colección de Editoriales---------------------
// Obtener editoriales
app.get("/editorial", (req, res) => {
  const editorial = editorialRepositorio.obtenerEditoriales();
  res.status(200).json(editorial);
});

// Obtener editorial por ID
app.get("/editorial/:editorialID", (req,res) =>{
  const editorialID = parseInt(req.params.editorialID)
  const editorial = editorialRepositorio.obtenerPorId(editorialID)
  res.status(200).json(editorial)
})

// Agregar editorial
app.post("/editorial", (req,res) =>{
  editorialRepositorio.agregarEditorial(req.body)
  res.status(201).json({
    id: 1,
    encodedkey: "",
    mensaje: "Dato registrado",
  });
})

// Actualizar editorial
app.put("/editorial/:editorialID", (req,res) =>{
  const editorialID = parseInt(req.params.editorialID)
  const editorial = req.body
  editorialRepositorio.actualizarEditorial(editorialID,editorial)
  res.status(200).json({
    id: 1,
    encodedkey: "",
    mensaje: "Dato actualizado",
  });
})

// Borrar editorial
app.delete("/editorial/:editorialID", (req,res)=> {
  const editorialID = parseInt(req.params.editorialID)
  editorialRepositorio.borrarEditorial(editorialID)
  res.status(200).json({
    id: 1,
    encodedkey: "",
    mensaje: "Dato eliminado",
  });
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
