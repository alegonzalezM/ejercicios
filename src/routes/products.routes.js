import express from 'express'
import {getAllProducts, getProductById} from '../controllers/products.controllers.js'

const routes= express.Router();

routes.get('/', (req,res)=>{
    res.send('Ruta principal')
})
routes.get('/products', getAllProducts)

routes.get('/products/:id', getProductById )

// routes.post('/product', )

export default routes;