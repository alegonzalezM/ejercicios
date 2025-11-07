

// // console.log(window);   // existe
// // console.log(document); // existe


// // console.log("Hola desde Node");
// // console.log(global); // en Node existe "global"

// // const frutas=['uva', 'pera', 'kiwi'];
// // for( let fruta of frutas){
    
// // console.log(fruta);
// // }
//  //---------------------------------------------------
// // const precios=[100, 120, 350, 200];

// // const conIVA= [];
// // for (let precio of precios){
// //     let precioIVA= precio*1.21;

// // console.log(`El precio es $ ${precioIVA} IVA incluido`);
// // }

// //--------------------------------------------------------


// import { fileURLToPath } from 'url';
// import path from 'path';
// // import fs from 'fs'


// const aa={ nombre:'Ale', edad:33}
// const bb={ domicilio:"Borges 111" , casa: 2, CP: 1636}
// const aabb= {...aa, ...bb}
// console.log(aabb);
// const [ , , , , quinto]= Object.values(aabb);
// console.log(quinto)

// const [ , , , [clave, valor] ] = Object.entries(aabb)
// console.log(clave, valor) // 👉 "casa", 2


// const a=[1,2];
// const b=[3,4];
// const combinado=[...a,...b];
// console.log(combinado);
// const  [ , segundo, tercero] =combinado  ;''
// console.log( tercero,' ', segundo );

// ///////////////////////////////////////////////////////
// class Autos {
//     constructor (marca, modelo, anio, color){
//     this.marca=marca;
//     this.modelo=modelo;
//     this.anio=anio;
//     this.color=color;
// }

// mostrarInfo(){
//     console.log(`Marca:  ${this.marca}, Modelo:  ${this.modelo}, año: ${this.anio}, Color: ${this.color}`);

// }}

// const vehiculos = [
//   { marca: "Toyota", modelo: "Corolla", año: 2019, color: "Gris", km: 45000 },
//   { marca: "Ford", modelo: "Focus", año: 2017, color: "Azul", km: 72000 },
//   { marca: "Chevrolet", modelo: "Cruze", año: 2020, color: "Rojo", km: 31000 },
//   { marca: "Volkswagen", modelo: "Golf", año: 2018, color: "Blanco", km: 58000 },
//   { marca: "Honda", modelo: "Civic", año: 2021, color: "Negro", km: 15000 },
//   { marca: "Nissan", modelo: "Sentra", año: 2016, color: "Plata", km: 89000 },
//   { marca: "BMW", modelo: "Serie 3", año: 2019, color: "Azul Marino", km: 40000 },
//   { marca: "Audi", modelo: "A4", año: 2022, color: "Gris Oscuro", km: 12000 },
//   { marca: "Peugeot", modelo: "208", año: 2018, color: "Rojo Vino", km: 65000 },
//   { marca: "Renault", modelo: "Kangoo", año: 2020, color: "Blanco", km: 27000 }
// ];
// class Vehiculo {
//     constructor (marca, modelo, anio, color, km){
//     this.marca=marca;
//     this.modelo=modelo;
//     this.anio=anio;
//     this.color=color;
//     this.km=km;

// }}
// const instanciasVehiculos= vehiculos.map((vehiculo => new Vehiculo(vehiculo.marca, vehiculo.modelo, vehiculo.año, vehiculo.color, vehiculo.km) ));
// console.log(instanciasVehiculos)

// const misAutos =  [
// new Autos('Audi', 'A6', 2024, 'azul'),
// new Autos('Toyota', 'RAV', 2017, 'rojo'),
// new Autos("Audi", "A6", 2024, "azul" ),
// new Autos("Toyota", "RAV", 2017, "rojo"),
// new Autos("Citroen","C3", 2025, "negro"),
// new Autos("Hyundai","I30", 2018, "gris"),
// new Autos("Peugeot", "208", 2021, "blanco")
// ]

// console.log( misAutos);
// misAutos.forEach((element) => {
//      if (element.anio>=2018) {
//        element.mostrarInfo();

// }});

// function contarColor(colorComparado, lista){
//     let contador=0
//     lista.forEach((element) =>{
//         const {color} = element  //desestructurar el color 
//         if(color.toLowerCase() ==colorComparado){
//             contador++
//     }})
//     console.log( ` Hay  ${contador}  autos `);
// }

// contarColor("azul", misAutos );



// const fs= require('fs')
// fs.readFile('C:/Users/alego/Desktop/Varios/recortes.txt', 'UTF8',
//     (err,data) => {if (err){
//             console.log(__dirname);
//         console.error('Error al leeer', err);
//         return;
//     }
//     console.log("Datos: ", data);
//     });

//     // import { fileURLToPath } from 'url';
//     //import path from 'path';

// const __filename= fileURLToPath(import.meta.url);
// const __dirname= path.dirname(__filename);
// console.log("'Ruta absoluta" , __dirname)



const args= process.argv.slice(2);
if(args[0]==='saludar'){
    console.log(`Hola , ${args[1] || 'mundo'}`);
}else if ( args[0]==='despedir'){
    console.log(` Chau , ${args[1] ||'mundo' }`);
}else{ 'comando no reconocido'}



const argum= process.argv;
if(argum[2]==='GET'){
    console.log(`Ingresa tu nombre :`);
} else if (argum[2]==='POST'){
      const dato = process.argv;
      console.log('recibimos el dato', argum[2])
}
else{console.log("fin")}



     
    // console.log(`hola , ${dato}`);
  
// } else if( argum[2]=== 'POST'){
//        argum[2] =process.argv ;
//        console.log('recibimos el dato', argum[2])
// }else if( argum[0]==='PUT'){
//     console.log(` Chau , ${argum[1] ||'mundo' }`);

