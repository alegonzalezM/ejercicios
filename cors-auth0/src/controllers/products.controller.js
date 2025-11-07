import * as productsService from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
  const products = await productsService.getAllProducts();
  res.status(200).json(products);
};

export const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await productsService.getProductById(id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
};

export const createProduct = async (req, res) => {
  const { name, price } = req.body;
  const newProduct = await productsService.createProduct({ name, price });
  res.status(201).json(newProduct);
};
