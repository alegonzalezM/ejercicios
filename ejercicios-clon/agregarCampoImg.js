import fs from "fs";
import path from "path";
import "dotenv/config";

const BASE_URL = "https://ejercicios-clon.vercel.app";   // dominio Vercel
const carpetaImagenes = "./public/imagenes";

// extensiones válidas
const extensiones = [".jpg", ".jpeg", ".png", ".webp"];

// leer archivos de la carpeta
const archivos = fs.readdirSync(carpetaImagenes);

// cargar productos desde Firestore REST
async function fetchProductos() {
  const url = `https://firestore.googleapis.com/v1/projects/${process.env.FIREBASE_PROJECT_ID}/databases/(default)/documents/productos`;

  const res = await fetch(url);
  const data = await res.json();

  return data.documents || [];
}

function buscarImagenPorID(id) {
  return archivos.find(nombre => {
    const lower = nombre.toLowerCase();
    return (
      lower.startsWith(id.toLowerCase()) &&
      extensiones.some(ext => lower.endsWith(ext))
    );
  });
}

async function actualizarDocumento(docName, urlImagen) {
  const url = `https://firestore.googleapis.com/v1/projects/${process.env.FIREBASE_PROJECT_ID}/databases/(default)/documents/${docName}?key=${process.env.FIREBASE_API_KEY}`;

  const body = {
    fields: {
      imagen: { stringValue: urlImagen }
    }
  };

  await fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
}

async function ejecutar() {
  const documentos = await fetchProductos();
  console.log("Documentos encontrados:", documentos.length);

  let asignados = 0;

  for (const doc of documentos) {
    const docName = doc.name.split("/").slice(-2).join("/"); // productos/ABC123
    const id = doc.fields.id?.stringValue;

    if (!id) {
      console.warn("⚠ Documento sin campo id:", docName);
      continue;
    }

    const imagen = buscarImagenPorID(id);

    if (!imagen) {
      console.warn(`⚠ No se encontró imagen para ID: ${id}`);
      continue;
    }

    const urlFinal = `${BASE_URL}/imagenes/${imagen}`;

    await actualizarDocumento(docName, urlFinal);
    asignados++;

    console.log(`✔ Asignado → ${id} → ${urlFinal}`);
  }

  console.log("\nFINALIZADO");
  console.log("Imágenes asignadas:", asignados);
}

ejecutar();
