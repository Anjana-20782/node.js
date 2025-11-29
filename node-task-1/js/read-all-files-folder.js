const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer(async (req, res) => {
    console.log(req.url)
    if (req.method === "GET" && req.url === "/") {
        const folder = path.join(__dirname, "new");

        const fileData = await fs.promises.readdir(folder);
        console.log(fileData);

        res.end("File data logged in console");
}
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
})


server.listen(4000, () => {
    console.log("server running 4000");
})