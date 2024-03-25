import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const videoPath = path.resolve(`./lib/assets/videos/${req.query.name as string}.mp4`);
  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.range;

  const expectedReferer = "http://localhost:3000/";

  const referer = process.env.NODE_ENV === "production" ? process.env.HOST : req.headers.referer;

  if (!referer || !referer.startsWith(expectedReferer)) {
    return res.status(401).json({ error: "Access denied." });
  }

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunksize = end - start + 1;
    const file = fs.createReadStream(videoPath, { start, end });
    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mp4",
    };

    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(200, head);
    fs.createReadStream(videoPath).pipe(res);
  }
}

export const config = {
  api: {
    responseLimit: "8mb",
  },
};
