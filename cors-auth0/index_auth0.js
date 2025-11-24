// import express from "express"
// import cors from 'cors';
// import productsRouter from "./src/routes/products.routes.js";
// import { auth } from "express-oauth2-jwt-bearer";
// import { getToken } from "./src/services/auth0Services.js"

// const app= express();


// // app.use(cors());                   // Configuración básica: Permitir todos los orígenes, usar solo p' pruebas internas
// const corsOptions = {                 // Configuración avanzada: Permitir dominios específicos
//     origin: 'http://localhost:5173',  //Dominios permitidos, solo frontend desde ese puerto puede acceder   
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],   // Métodos HTTP permitidos
//     allowedHeaders: ['Content-Type', 'Authorization'],    // Encabezados permitidos
//     exposedHeaders: ['Content-Length'],         //Encabezados visibles al cliente
//     credentials: true,                  // Permitir cookies o credenciales
//     maxAge: 600,                       //cache preflight
//     optionsSuccessStatus: 204        //respuesta preflight exitosa

// };
// app.use(cors(corsOptions))

// const PORT = process.env.PORT || 3000;
// app.use(express.json())
// app.use((req, res ,next)=>{
//    console.log(`Datos recibidos: ${req.method}, ${req.url} `); //intercepta c/solicitud q entra al servidor , ejecuta lo q le digo y le da paso con next
//    next();
// })

// console.log("Importado router:", productsRouter);

// //////  CODIGO Auth0   /////////////////////////

// const checkJwt = auth({
//   audience: "https://miApi/",
//   issuerBaseURL: "https://dev-of0bu4sktk8zxf2z.us.auth0.com/",
//   tokenSigningAlg: "RS256",
// });

// ////////////////////////////////


// app.get("/", (req, res) => {
//   res.send("Ruta pública: cualquiera puede verla");
// });

// app.get("/api/privado", checkJwt, async(req, res) => {
//    const token = await getToken();
//   if (!token) return res.status(500).json({ error: "No se pudo obtener token" });
//   res.json({ token });
// });

// // Endpoint para ver token
// app.get("/api/token", async (req, res) => {
//   const token = await getToken();
//   if (!token) return res.status(500).json({ error: "No se pudo obtener token" });
//   res.json({ token });
// });
// app.use('/api', productsRouter);

// app.get('/api', (req, res) => {
//   res.send('API funcionando correctamente');
// });

// app.get('/html'  , (req,res)=>{
//    res.send("<h1>Hola</h1>") //sirva p enviar htnl basico
// })
// app.get('/json' , (req,res)=>{
//     res.send({products:
//         [{nombre:"agua", 
//             precio:100},
//         {nombre:"soda",
//             precio:200
//         }]
//     })
// })

// app.get('/api/items', (req,res) =>{
//     const category= req.query.category;
//     const price= req.query.price;
//   res.send(`Categoria y precio: ${category}, ${price}`)
// })
// app.get('/item/:id', (req, res) => {
//     const itemId=req.params.id;
//   res.send( `devolviendo item con id: ${itemId}` );
// });

// //////////////////////////////////////////////////

// // app.use('/api', usersRouter);

// // app.use((req, res, next) => { 
// //   const autorizado = false; // poner tu lógica real de ingreso
// //   if (!autorizado) {
// //     return res.status(403).send('Acceso prohibido');
// //   }
// //   next(); // si está autorizado, continuar con la ruta
// // });


// //obtenet token prueba
// app.get("/api/test-auth0", async (req, res) => {
//   try {
//     const token = await getToken(); // obtener token desde Auth0

//     if (!token) {
//       return res.status(500).send("❌ No se pudo obtener token de Auth0");
//     }

//     // ahora llamás tu propia ruta protegida con ese token
//     const response = await fetch("http://localhost:3000/api/privado", {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     const data = await response.text();

//     // mostrar token y resultado de la ruta protegida
//     res.send(`
//       <h2>🔑 Token obtenido de Auth0:</h2>
//       <pre>${token}</pre>
//       <h2>🔐 Respuesta de /api/privado:</h2>
//       <pre>${data}</pre>
//     `);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("❌ Error al probar Auth0");
//   }
// });


// // Middleware para manejar errores 404 debe ir al final
// app.use((req, res, next) => {
// res.status(404).send('Recurso no encontrado o ruta inválida');
// });


// app.listen(PORT, () =>{
//    console.log(`Servidor corriendo en http://localhost:${PORT}` )
// })