import express from 'express'

const routes= express.Router();

routes.get('/', (req,res)=>{
    res.send('Ruta principal')
})
routes.get('/products', (req,res) =>{
    res.send("Ruta productos")
})


export default routes;