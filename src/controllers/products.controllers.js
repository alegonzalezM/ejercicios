//controllers va a manejar la solicitud y responder con el json de productos pero, para obtenerlos
//tengo q llamar a la capa de servicios

import * as productServices from '../services/products.services.js'


export const getAllProducts = async (req, res) =>{
    const products = await productServices.getAllProductsService();
    res.status(200).json(products);

}
export const getProductById = async (req, res) =>{
    const id= req.params.id;
    const product = await productServices.getProductByIdService(id)
if (product) {
    res.status(200).json(product)
}else{
    res.status(404).json({ message: "Producto no encontrado"})
}};