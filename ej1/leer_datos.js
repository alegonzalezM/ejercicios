
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __fileName= fileURLToPath(import.meta.url);
// console.log("__fileName: ", __fileName)
const __dirname= path.dirname(__fileName)
// console.log("Ruta abs al arch ", __dirname)

const filePath= path.join(__dirname, "datos.txt");
    // console.log("Ruta a la data" , filePath);
    fs.readFile(filePath, "utf8", (error, data) => {
        if(error){ console.log(error)
        } else {
  const lineas=data.trim().split('\r\n');
  const headers= lineas[0].split(',');
  console.log(lineas, headers);
  const lineas_sin_header=lineas.slice(1);
  const users= lineas_sin_header.map(usuario=>{
        const datos=usuario.split(',');
        console.log(datos);
        let obj={}
        headers.forEach((header,indice) => {
        obj[header]= datos[indice]
})
   console.log(obj)
   return obj; 
})
   console.log(users)
  }})