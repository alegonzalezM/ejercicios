import express from 'express'
import fs from 'fs'

const app= express();

//  // OPERADORES AVANZADOS desestructuracion 
// const num=[1,2,3,4,5];
// const [a,b,c]= num;
// const[,,,,x]= num
// console.log(x);

//  // OPERADORES AVANZADOS spread operator
// const masNum=[6,7,8,9,10]
// console.log(...num , ...masNum)
// const todosLosNum= [...num, ...masNum]
// console.log("Todos los num", todosLosNum)

// //ej forEach
// let res= [];
// let contador=0;
// todosLosNum.forEach((nm) => {
//     if (nm%2==0){
//      contador++;
//      res.push(nm);
//     }})
//   console.log(`Los pares con forEach son  ${contador} : ${res} `);

// //ej map()
// let resMap= [];
// todosLosNum.map((nm) => {
//     if (nm%2==0){
//      resMap.push(nm);
//     }}
// )
//   console.log("Pares con map" , resMap);

//   //ej map precios+iva

//   const precios=[10,20,30,40]
//   const iva= 0.21
//   const preciosMasIva= precios.map( precio => precio+(precio*iva ))
//   console.log("Precios con IVA", preciosMasIva);


// const datos={nombre:"Ale", edad:55}
// const otrosDats={domi:"Borges111", CP:1636}
// const todos= {...datos, ...otrosDats}
// console.log(todos )
// // const [,,,[clave,valor]] = Object.entries(todos)
// const [,,,valor] = Object.values(todos)
// console.log(  valor )

console.log("Procesos: ", process.argv)


try {
  const data = fs.readFileSync('./package.json', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}


app.get('/ping', (req,res)=>{
    console.log(req)
    res.send("pong");
});
app.listen(3000, () =>{ 'https://localhost:3000'})

