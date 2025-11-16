import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// 🧠 Middleware para permitir CORS
const corsOptions = {                 // Configuración avanzada: Permitir dominios específicos
    // origin: 'http://localhost:5500',  //Dominios permitidos, solo frontend desde ese puerto puede acceder   
    // methods: ['GET', 'POST', 'PUT', 'DELETE'],   // Métodos HTTP permitidos
    // allowedHeaders: ['Content-Type', 'Authorization'],    // Encabezados permitidos
    // exposedHeaders: ['Content-Length'],         //Encabezados visibles al cliente
    // credentials: true,                  // Permitir cookies o credenciales
    // maxAge: 600,                       //cache preflight
    // optionsSuccessStatus: 204        //respuesta preflight exitosa

};
app.use(cors(corsOptions));

// Middleware para leer JSON
app.use(express.json());

let items = [
  { id: 1, nombre: "Manzana" },
  { id: 2, nombre: "Banana" }
];

app.get("/items", (req, res) => {
  res.json(items);
});

app.post("/items", (req, res) => {
  console.log(req.body) //p' ver como viaja el body
  const nuevoItem = req.body;
  nuevoItem.id = items.length + 1;
  items.push(nuevoItem);
  res.status(201).json(nuevoItem);
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
