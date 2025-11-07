
import express from 'express'
const router= express.Router();

import { getAllProducts, getProductById, createProduct } from '../controllers/products.controller.js';
import { getToken } from '../services/auth0Services.js';

router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);

router.post('/products',createProduct);

router.get('/privado', getAllProducts);


export default router;
