 
// 1.  API pública de Rick and Morty (docs) para obtener la lista de personajes. 
// 2. Con las herramientas then, catch y finally, procesa la respuesta y devuelve por consola un array con los primeros 5 resultados de los 20 personajes recibidos. 
// Replicar tu solución anterior pero esta vez usa una función asíncrona con async y await para consumir la API. 
// 2. Asegúrate de manejar errores correctamente con un bloque try/catch, con un código limpio, fácil de entender y bien estructurado.

//1) 
// fetch("https://rickandmortyapi.com/api/character/[1,2,3,4,5]", {
//   method: "GET",
//   headers: { "content-type": "application/json" }
// })
//   .then( async (response) => {
//     console.log(response)
//     const data = await response.json();
//     console.log(data);
//   })
//     .catch((error) => {
//     console.error("Error al traer la API:", error)})

//   .finally(() => {
//     console.log("proceso terminado");
//   });


//2) TRY / CATCH / FINALLY
//   async function traerApi() {
//   try{ const response= await fetch("https://rickandmortyapi.com/api/character")
//   const data= await response.json()
//   console.log(data.results[0].name)
//   console.log(data.results[1].name)
//   console.log(data.results[2].name)
//   console.log(data.results[3].name)
//   console.log(data.results[4].name)
//    }
//    catch {(error) => console.log("Error al traer la API:", error)}
//   finally { () => console.log("Fin")};
//  }
//  traerApi();


//3) TRY/CATCH/FINALLY con AXIOS
 import axios from "axios";
 async function traerApi2() {
   try {
     const response = await axios("https://rickandmortyapi.com/api/character/[1,2]");
         const data = response.data; // En axios, response.data no es una promesa, ya viene listo, no hace falta await.
     console.log("Con axios ", data);
   } catch (error) {
     console.log("Error al traer la API:", error);
   } finally {
     console.log("Fin");
   }}
 traerApi2()
