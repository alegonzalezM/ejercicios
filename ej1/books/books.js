

 fetch("https://pokeapi.co/api/v2/pokemon/ditto", {
  method: "GET",
  headers: { "content-type": "application/json" }
 })
  .then( async (response) => {
     console.log(response)
     const data = await response.json();
     console.log(data);
   })
     .catch((error) => {
    console.error("Error al traer la API:", error)})

  .finally(() => {
    console.log("proceso terminado");
  }); 

    // async function traerLibro() {

    //   try {
    //     // "URL"= "https://openlibrary.org/search.json?q=el+señor+de+los+anillos";
    //   const response= await (fetch("https://openlibrary.org/search.json?q=el+señor+de+los+anillos",
    //    { method: "GET"}));
    //     const data = await response.json();

    //        if(data) {
    //        console.log(data)
    //     } else {
    //       console.log( "No se encontraron libros.")
    //     }
    //   } catch (error) {
    //     console.error("Error al traer la API:", error);
    //   }
    // }

    // traerLibro();