import { db } from "../data/data.js";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  deleteDoc,
  addDoc,
  updateDoc,
  deleteField,
} from "firebase/firestore";

export async function obtenerProducto(id) {
    try {
      const docRef = doc(db, "products", id); 
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log( "Snap data: ", docSnap);
        console.log("Document ID: ", docSnap.id);
        console.log("Document data:", docSnap.data());
          return { id: docSnap.id, ...docSnap.data() };
      } else {
        // docSnap.data() will be undefined in this case
        console.log("Producto no encontrado o inexistente");
        return null;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };


// obtenerProducto(id);

export function obtenerProductos() {
  return new Promise(async (res, rej) => {
    try {
      const querySnapshot = await getDocs(collection(db, "products")); //obtiene * documentos de la coleccion productos
      console.log("Snap completa: ", querySnapshot);
      const productos = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        productos.push({ ...doc.data(), id: doc.id });
      });
      console.log(productos);
      res(productos);
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
}

obtenerProductos();

export function agregarProducto(producto) {
  return new Promise(async (res, rej) => {
    try {
      const docRef = await addDoc(collection(db, "products"), producto);
      console.log("Id ", docRef.id, "Producto", docRef);
      res({ ...producto, id: docRef.id });
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
}
//  agregarProducto({ nombre: "yerba", categoria: "infusion", precio: 250})

export function actualizarProducto(id, producto) {
  return new Promise(async (res, rej) => {
    try {
      await updateDoc(doc(db, "products",  id ) ,{     //actualiza solo los campos q se modifiquen
        ...producto //desestructurado xq sino el prod nuevo lo agrega como 1 clave del original en vez de modificarlo
      })
      console.log("Producto actualizado");
      res({}); //resolucion vacia xq no necesito devolver nada, producto vacio p' q no se rompa
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
}
// actualizarProducto({id:"lYExBEI35pmUYcGAuAFg", precio:220 })

export function eliminarProducto(id) {
  return new Promise(async (res, rej) => {
    try {
      await deleteDoc(doc(db, "products", id));
      console.log("producto eliminado");
      res(); //tampoco devuelve nada xq borra
    } catch (error) {
      console.log("No se pudo eliminar ", error);
      rej(error);
    }
  });
}

//  eliminarProducto("qPNEUS7ycVsT1lkAEbhY" );

export async function actualizarCampo(id) {
  try {
    const pr = (db, "products", id);
    await updateDoc(pr, { nombre: deleteField() });
    console.log("Campo eliminado");
  } catch (error) {
    console.log(error);
  }
}

// actualizarCampo("NmZ04YxJqHGeNXBQVXjH")
