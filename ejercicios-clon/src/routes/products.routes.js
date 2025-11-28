
import express from 'express'
const router= express.Router();

import { getAllProducts, getProductById, createProduct, deleteProduct, editProduct } from '../controllers/products.controller.js';
import { authentication } from '../middleware/authentication.js'

router.get('/products', getAllProducts);

router.get('/products/:id', authentication, getProductById);

router.post('/products/create',  authentication, createProduct); 

router.delete('/products/:id',  authentication, deleteProduct )

router.put('/products/:id',  authentication, editProduct )


 

export default router;
