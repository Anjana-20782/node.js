const fs = require("fs");
const http = require("http");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const { url, method } = req;


  if (url.endsWith(".css") || url.endsWith(".js")) {
   const fileName = path.basename(url); // home.css
    const assetPath = path.join(__dirname, "public", fileName);

    const ext = path.extname(url);
    const contentType = ext === ".css" ? "text/css" : "application/javascript";

    fs.readFile(assetPath, (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end("Asset not found.");
      }

      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    });

    return;
  }

  
  if (url === "/" && method === "GET") {
    return renderPage(res, "home.html");
  }

  if (url === "/login" && method === "GET") {
    return renderPage(res, "login.html");
  }

  if (url === "/sign" && method === "GET") {
    return renderPage(res, "sign.html");
  }

  
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Route not found");

 
  function renderPage(res, page) {
    const pagePath = path.join(__dirname, "views", page);

    fs.readFile(pagePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("Failed to load page");
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
});


server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
