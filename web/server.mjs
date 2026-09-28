import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname } from "node:path";

const root = new URL("./", import.meta.url);
const host = "localhost";
const port = Number(process.env.PORT ?? 4173);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

function respond(response, statusCode, body, contentType = "text/plain; charset=utf-8") {
  response.writeHead(statusCode, {
    "Content-Type": contentType,
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff"
  });
  response.end(body);
}

createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url ?? "/", `http://${host}:${port}`);
    const pathname = decodeURIComponent(requestUrl.pathname);
    const relativePath = pathname === "/" ? "index.html" : pathname.slice(1);
    let fileUrl = new URL(relativePath, root);

    if (!fileUrl.href.startsWith(root.href)) {
      respond(response, 403, "Acesso negado.");
      return;
    }

    const fileStat = await stat(fileUrl);
    if (fileStat.isDirectory()) {
      fileUrl = new URL("index.html", fileUrl.href.endsWith("/") ? fileUrl : `${fileUrl.href}/`);
    }

    const body = await readFile(fileUrl);
    respond(response, 200, body, contentTypes[extname(fileUrl.pathname)] ?? "application/octet-stream");
  } catch (error) {
    if (error?.code === "ENOENT") {
      try {
        const body = await readFile(new URL("404.html", root));
        respond(response, 404, body, contentTypes[".html"]);
      } catch {
        respond(response, 404, "Página não encontrada.");
      }
      return;
    }

    respond(response, 500, "Erro interno.");
  }
}).listen(port, host, () => {
  console.log(`Three Lenses disponível em http://${host}:${port}`);
});
