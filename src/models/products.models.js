import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename= fileURLToPath(import.meta.url)
console.log('__filenem : ', __filename)
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'db.json')

fs.readFile( filePath, 'utf-8', (error,data) => {
    if (error) { console.log(error) 
    } else { console.log('Dentro de data ', data)
}
})

async function leerDB(){
    try{
        const data = fs.readFileSync(filePath, 'utf-8') //utf-8 xq le tengo q indicar q va a recibir
        console.log("JSON: ", data) // imprime el JSON
        const products = await JSON.parse(data) //lo convierto a un obj literal de JS
        console.log("obj literal de JS: " ,products)  // imprime el obj
        return products;
    }catch(error){
        console.log(error)
    }
}
// leerDB()

export async function obtenerProductos(){
    const productos= await leerDB()
    return productos
    
}

export async function createProduct(products){ //los productos van a llegar en formato JS =>
   const data= JSON.stringify(products)       //lo convierto a json
   console.log(data)


}
createProduct()