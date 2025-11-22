// const products = [
//   {
//     id: 1,
//     name: "Producto 1",
//     price: 1000,
//   },
//   {
//     id: 2,
//     name: "Producto 2",
//     price: 2000,
//   },
// ];

import { editProduct } from "../controllers/products.controller.js";
import {
  actualizarProducto,
  agregarProducto,
  eliminarProducto,
  obtenerProducto,
  obtenerProductos,
} from "../models/products.models.js";

export const getAllProductsService = async () => {
  try {
    const products = await obtenerProductos();
    return products;
  } catch (error) {
    throw error;
  }
};

export const getProductByIdService = async (id) => {
  console.log("Service - id:", id);
  try {
    const product = await obtenerProducto(id);
    console.log(product);
    return product;
  } catch (error) {
    throw error;
  }
};

export const createProductService = async (product) => {
  return(
    new Promise (async(res,rej)=> {
      try{
        const newProduct = await agregarProducto(product)
           res(newProduct)
      } catch (error){
      rej(error)}}))
};

export const deleteProductService = async (id) => {
      try{
        await eliminarProducto(id)
        return { message: "Producto eliminado correctamente" };
      } catch(error){
          return { message: "No pudo eliminarse", error };
    }}
  

export const editProductService = async (id, product) => {
  return(
    new Promise(async(res,rej)=>{
      try{
        const newProduct = await actualizarProducto(id, product)
        res(newProduct)
      } catch(error){
        rej(error)
      }
    })
  )

}