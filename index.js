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

// Ruta para la colección de libros
app.get("/libro", (req, res) => {
  const libros = libroRepositorio.obtenerLibros();
  res.status(200).json(libros);
});

// Ruta para la colección de Autores
app.get("/autor", (req, res) => {
  const autor = autorRepositorio.obtenerAutores();
  res.status(200).json(autor);
});

app.post("/autor", (req, res) => {
    autorRepositorio.agregarAutor(req.body)
    console.log(req.body)
  res.status(201).json({
    id: 1,
    encodedkey: "",
    mensaje: "Dato registrado",
  });
});

app.put("/autor", (req,res) => {
    const autorID = parseInt(req.query.autorID)
    const autor = req.body
    console.log(autorID)
    console.log(autor)
    autorRepositorio.actualizarAutor(autorID,autor)
    res.status(202).json({
      id: 1,
      encodedkey: "",
      mensaje: "Dato actualizado",
    });
})

app.get("/autor/:autorID", (req,res) =>{
    const autorID = parseInt(req.params.autorID);
    const autor = autorRepositorio.obtenerID(autorID)
    console.log(req.params)
    console.log(autor)
    res.status(200).json(autor);
})

// Ruta para la colección de Editoriales
app.get("/editorial", (req, res) => {
  const editorial = editorialRepositorio.obtenerEditoriales();
  res.status(200).json(editorial);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
