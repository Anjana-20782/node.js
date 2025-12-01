const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
    const { url, method } = req;


if (url.endsWith(".css") || url.endsWith(".js")) {
        const assetPath = path.join(__dirname, "public", url);
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

 if (url === "/signup" && method === "GET") {
        return renderPage(res, "signup.html");
    }

res.writeHead(404);
    res.end("Route not found.");


function renderPage(res, page) {
    const pagePath = path.join(__dirname, "views", page);

    fs.readFile(pagePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end("Failed to load page.");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}
})

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});