// // import fs from "fs";
// // import path from "path";

// // const productos = JSON.parse(fs.readFileSync("./productos.json", "utf8"));
// // const carpetaImagenes = "public/imagenes";

// // // extensiones válidas
// // const extensiones = [".jpg", ".jpeg", ".png", ".webp"];

// // // leer todos los archivos de la carpeta img
// // const archivos = fs.readdirSync(carpetaImagenes);

// // let asignados = 0;
// // let noEncontrados = 0;

// // for (const prod of productos) {
// //   const id = prod.id?.toString().trim();

// //   if (!id) {
// //     console.warn("⚠ Producto sin ID:", prod);
// //     continue;
// //   }

// //   // buscar archivo que empiece con el ID
// //   const encontrado = archivos.find(nombre => {
// //     const lower = nombre.toLowerCase();
// //     return (
// //       lower.startsWith(id.toLowerCase()) &&
// //       extensiones.some(ext => lower.endsWith(ext))
// //     );
// //   });

// //   if (encontrado) {
// //     prod.imagen = `/img/${encontrado}`;
// //     asignados++;
// //   } else {
// //     console.warn(`⚠ No se encontró imagen para ID: ${id}`);
// //     noEncontrados++;
// //   }
// // }

// // // guardar archivo nuevo con imágenes asignadas
// // fs.writeFileSync(
// //   "./productos_con_imagenes.json",
// //   JSON.stringify(productos, null, 2)
// // );

// // console.log("✔ Listo!!");
// // console.log("Imágenes asignadas:", asignados);
// // console.log("IDs sin imagen:", noEncontrados);

// import fs from "fs";
// import path from "path";

// // =============================
// // CONFIGURACIÓN FIRESTORE REST
// // =============================
// const PROJECT_ID = "test-back-node-b1678"; // ← poné tu proyecto
// const API_KEY = "AIzaSyBGxBVcLTI5aQSGlMIc-sl3ZH1YueaA2jw"; // ← tu API KEY

// const FIRESTORE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

// // =============================
// // LEER IMÁGENES LOCALES
// // =============================
// const carpetaImagenes = path.join("public", "imagenes");
// const extensiones = [".jpg", ".jpeg", ".png", ".webp"];
// const archivos = fs.readdirSync(carpetaImagenes);

// // =============================
// // FUNCIONES FIRESTORE
// // =============================
// async function obtenerProductos() {
//   const url = `${FIRESTORE_URL}/productos?key=${API_KEY}`;
//   const res = await fetch(url);
//   const data = await res.json();

//   return data.documents || [];
// }

// async function actualizarProducto(documentPath, urlImagen) {
//   const url = `${FIRESTORE_URL}/${documentPath}?currentDocument.exists=true&updateMask.fieldPaths=imagen&key=${API_KEY}`;

//   const body = {
//     fields: {
//       imagen: { stringValue: urlImagen },
//     },
//   };

//   await fetch(url, {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(body),
//   });
// }

// // =============================
// // PROCESO PRINCIPAL
// // =============================
// async function asignarImagenes() {
//   console.log("Obteniendo productos...");
//   const productos = await obtenerProductos();

//   let asignados = 0;
//   let noEncontrados = 0;

//   for (const doc of productos) {
//     const fields = doc.fields;
//     const id = fields.id?.stringValue;

//     if (!id) continue;

//     // Buscar imagen cuyo nombre empieza con el ID
//     const img = archivos.find((archivo) => {
//       const lower = archivo.toLowerCase();
//       return (
//         lower.startsWith(id.toLowerCase()) &&
//         extensiones.some((ext) => lower.endsWith(ext))
//       );
//     });

//     if (!img) {
//       console.log(`⚠ Sin imagen para ID: ${id}`);
//       noEncontrados++;
//       continue;
//     }

//     // const urlImagen = `http://localhost:3000/imagenes/${img}`;
//     const urlImagen = `https://ejercicios-clon.vercel.app/imagenes/${img}`;

//     await actualizarProducto(doc.name.replace(`projects/${PROJECT_ID}/databases/(default)/documents/`, ""), urlImagen);

//     console.log(`✔ ${id} → ${urlImagen}`);
//     asignados++;
//   }

//   console.log("\n========== RESULTADO ==========");
//   console.log("Imágenes asignadas:", asignados);
//   console.log("Sin imagen:", noEncontrados);
//   console.log("================================");
// }

// asignarImagenes();

/**
 * asignarImagenesVerbose.js
 * - Muestra respuestas completas de las llamadas REST
 * - Guarda fallos en ./fallos.json
 * - Usa URLs absolutas apuntando a tu backend en Vercel
 */

import fetch from "node-fetch";

const PROJECT_ID = "test-back-node-b1678";
const API_KEY = "TU_API_KEY";

const FIRESTORE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;
const BASE_IMG_URL = "https://ejercicios-clon.vercel.app/imagenes";

async function obtenerProductos() {
  const res = await fetch(`${FIRESTORE_URL}/productos?key=${API_KEY}`);
  const data = await res.json();
  return data.documents || [];
}

async function actualizarProducto(pathDoc, imagen) {
  const url = `${FIRESTORE_URL}/${pathDoc}?updateMask.fieldPaths=imagen&key=${API_KEY}`;

  const body = {
    fields: {
      imagen: { stringValue: imagen }
    }
  };

  await fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
}

async function asignarImagenes() {
  const productos = await obtenerProductos();

  for (const doc of productos) {
    const id = doc.fields.id?.stringValue;
    if (!id) continue;

    const imagenURL = `${BASE_IMG_URL}/${id}.jpg`;

    const pathDoc = doc.name.replace(
      `projects/${PROJECT_ID}/databases/(default)/documents/`,
      ""
    );

    await actualizarProducto(pathDoc, imagenURL);

    console.log(`✔ ${id} → ${imagenURL}`);
  }

  console.log("🚀 Rutas cargadas en Firestore");
}

asignarImagenes();
