import * as productsService from "../services/products.service.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await productsService.getAllProductsService(); //obtengo los productos desde capa de servicios
    if (products) {
      console.log(products);
      res.status(200).json(products);
    } else {
      res.status(400).json({ message: "Error al obtener productos" });
    }
  } catch (error) {
    res.status(500);
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Controller - id recibido:", id);

    if (id) {
      const product = await productsService.getProductByIdService(id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: "Producto no encontrado" });
      }
    } else {
      res.status(400).json(error);
    }
  } catch (error) {
    res.status(500);
  }
};

export const createProduct = async (req, res) => {
  try{
    const product = req.body;
    const newProduct = await productsService.createProductService(product);
    res.status(200).json(newProduct);
} catch(error) {
   res.senStatus(500)
}}

export const deleteProduct = async (req, res) => {
  try{
    const id = req.params.id;
    if(id){
      await productsService.deleteProductService(id)
      res.status(200)
    } else {
        res.sendStatus(400).json(error)
    }
   } catch(error){
        res.status(500)
  }}

export const editProduct = async (req, res) => {
  try{
    const id= req.params.id;
    const product = req.body;
    if(id&&product){
      const newProduct= await productsService.editProductService(id, product);
      res.status(200).json(newProduct);
    } else {
      res.status(400).json(error)
    }} catch(error){
    res.status(500)
  }}