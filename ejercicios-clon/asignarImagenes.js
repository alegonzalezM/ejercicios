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
