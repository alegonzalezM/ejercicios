import {db} from '../data/data.js'
import { doc, getDoc,collection, getDocs, setDoc, addDoc,updateDoc, deleteField } from "firebase/firestore";

function obtenerProducto(id){
  return new Promise(async(res,rej)=> {
    try{
    const docRef = doc(db, "products", "rwGVwgHNJnpjjPTGEEzP"); //id del prod
    const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
  // console.log( "Snap data: ", docSnap);
    console.log("Document ID: ", docSnap.id);
    console.log("Document data:", docSnap.data());
    res(docSnap.data())
} else {
  // docSnap.data() will be undefined in this case
   console.log("No such document!");
 } } catch(error){
  console.log(error)
  rej(error)
 }})}
    
//obtenerProducto(id);

function obtenerProductos(){
  return( new Promise(async(res,rej) => {
      try{
  const querySnapshot = await getDocs(collection (db, "products")); //obtiene * documentos de la coleccion productos 
  console.log("Snap completa: ", querySnapshot)
  const productos= []
  querySnapshot.forEach((doc)=>{
    console.log(doc.id, "=>", doc.data());
    productos.push({...doc.data() , id: doc.id})
  })
   console.log(productos)
   res(productos)
}  catch(error){
      console.log(error)
      rej(error)
       }}
      ))}

 obtenerProductos();

 function agregarProducto(producto){
    return( new Promise(async(res,rej) => {
  try{
    const docRef= await addDoc(collection(db, "products"), producto );
    console.log("Id " , docRef.id, "Producto", docRef )
    res({...producto, id: docRef.id})
  } catch(error) {
    console.log(error)
    rej(error)
  }}
))
}
//  agregarProducto({ nombre: "yerba", categoria: "infusion", precio: 250})

 function actualizarProducto(producto){
      return( new Promise(async(res,rej) => {
try{
  await updateDoc(doc(db, 'products', producto.id), producto) 
  console.log("Producto actualizado")
  res() //resolucion vacia xq no necesito devolver nada
   } catch(error){
    console.log(error)
    rej(error)
   } }))
};
// actualizarProducto({id:"lYExBEI35pmUYcGAuAFg", precio:220 })

 function eliminarProducto(id){
  return( new Promise(async(res, rej) =>{
   try{
        // console.log("Se va a eliminar: ", producto.nombre)
  await deleteDoc(doc(db, "products",id ));
  console.log("producto eliminado")
  res() //tampoco devuelve nada xq borra
   } catch(error){
    console.log("No se pudo eliminar ", error)
    rej(error)
   }}))
}

//  eliminarProducto("qPNEUS7ycVsT1lkAEbhY" );

 async function actualizarCampo(id){
  try{
   const pr= (doc(db, 'products', id));
   await updateDoc(pr, { nombre: deleteField() });
   console.log("Campo eliminado")
   } catch(error){
     console.log(error)}}
   
 // actualizarCampo("NmZ04YxJqHGeNXBQVXjH")


