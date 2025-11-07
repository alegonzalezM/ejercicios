// const products= [
//               {id: 1, name:"campera", price:1200}, 
//               {id: 2, name:"gorro" , price: 1050} ];

import {obtenerProductos} from '../models/products.models.js'


export const getAllProductsService= async () =>{
     console.log("Productos no obtenidos: ")
    const products= await obtenerProductos()
    console.log("Productos obtenidos: " , products)
    return products;
}

export const getProductByIdService  = async(id) =>{
    const products= await obtenerProductos()
    console.log("📦 Valor devuelto por obtenerProductos:", products);
   return products.find(product=> product.id == id)
}