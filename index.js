import express from 'express'
import cors from 'cors'
import rutasProductos from './src/routes/products.routes.js' //rutasProductos es alias de routes

const app = express();
const PORT= process.env.PORT || 3000;
app.use(express.json());

const corsConfig = {
    origin: ['http://midominio.com' , 'http://localhost:3000'] ,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type' , 'Autorization'],
    exposedHeaders: ['Content-Length'],
    credentials: true,
    maxAge: 600,
    optionsSuccessStatus: 204
}
app.use(cors(corsConfig));
app.use('/api', rutasProductos);
app.use((req,res,next) => {
    console.log(`Datos received at: ${req.method} ${req.url}`);
    next();
});

app.use((req,res,next)=>{
    res.status(400).send("Recurso no encontrado o ruta inválida")
})
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
