import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { name } = req.query;

  const filePath = path.join(process.cwd(), "public", "imagenes", name);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "Imagen no encontrada" });
  }

  res.setHeader("Cache-Control", "public, max-age=31536000");
  res.setHeader("Content-Type", "image/jpeg");

  fs.createReadStream(filePath).pipe(res);
}
