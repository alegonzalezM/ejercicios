import fs from "fs";
import path from "path";
import sharp from "sharp";

const carpeta = path.join("public", "imagenes");
const salida = path.join("public", "imagenes-opt");

if (!fs.existsSync(salida)) {
  fs.mkdirSync(salida);
}

const extensiones = [".jpg", ".jpeg", ".png", ".webp"];

const archivos = fs.readdirSync(carpeta);

for (const archivo of archivos) {
  const ext = path.extname(archivo).toLowerCase();
  if (!extensiones.includes(ext)) continue;

  const input = path.join(carpeta, archivo);
  const output = path.join(salida, archivo);

  await sharp(input)
    .resize({
      width: 1200,        // tamaño máximo web
      withoutEnlargement: true
    })
    .jpeg({ quality: 80 }) // calidad óptima web
    .toFile(output);

  console.log("✔ Optimizada:", archivo);
}

console.log("🎉 Listo");
