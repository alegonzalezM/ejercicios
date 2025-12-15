import express from "express"
import cors from 'cors';
import productsRouter from "./src/routes/products.routes.js"
import authRouter from './src/routes/auth.routes.js'
import rutasLog from './src/routes/auth.routes.js'
import {authentication} from "./src/middleware/authentication.js"
import 'dotenv/config';
import path from "path";
import { fileURLToPath } from "url";

const app= express();
const PORT = process.env.PORT || 3000;

// app.use(cors());                   // Configuración básica: Permitir todos los orígenes, usar solo p' pruebas internas

 const corsOptions = {                 // Configuración avanzada: Permitir dominios específicos
origin: ['http://localhost:3000','http://localhost:5173', 'http://ejercicios-clon.vercel.app'], //Dominios permitidos, solo frontend desde ese puerto puede acceder   
     methods: ['GET', 'POST', 'PUT', 'DELETE'],   // Métodos HTTP permitidos
     allowedHeaders: ['Content-Type', 'Authorization'],    // Encabezados permitidos
     exposedHeaders: ['Content-Length'],         //Encabezados visibles al cliente
     credentials: true,                  // Permitir cookies o credenciales
     maxAge: 600,                       //cache preflight
     optionsSuccessStatus: 204        //respuesta preflight exitosa

 };
app.use(cors(corsOptions));
app.use(express.json()); //transforma el body a JSON

app.use('/api' , authRouter ); //antes de autenticacion para tener ingreso libre a login
// app.use('/api'. rutasLog);

app.use((req, res ,next)=>{
   console.log(`Datos recibidos: ${req.method}, ${req.url} `); //intercepta c/solicitud q entra al servidor , ejecuta lo q le digo y le da paso con next
   next();
})

app.use(express.static("public"));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/imagenes", express.static("public/imagenes"));  
app.use('/api', productsRouter);

app.get('/api', (req, res) => {
  res.send('API funcionando correctamente');
});

// app.get("/", (req, res) => {
//   res.send("Ruta pública: cualquiera puede verla");
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve("public/index.html"));
// });


// Middleware para manejar errores 404 debe ir al final
app.use((req, res, next) => {
res.status(404).send('Recurso no encontrado o ruta inválida');
});

app.listen( PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}` );
 })




