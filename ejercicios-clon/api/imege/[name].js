import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Falta el nombre de la imagen" });
  }

  // Ruta absoluta al archivo
  const filePath = path.join(
    process.cwd(),
    "public",
    "imagenes",
    name
  );

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Imagen no encontrada" });
  }

  // Detectar tipo MIME según extensión
  const ext = path.extname(name).toLowerCase();
  const mimeTypes = {
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".webp": "image/webp",
    ".jfif": "image/jpeg"
  };

  res.setHeader(
    "Content-Type",
    mimeTypes[ext] || "application/octet-stream"
  );

  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");

  fs.createReadStream(filePath).pipe(res);
}
