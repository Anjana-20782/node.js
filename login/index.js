// const http = require("http");
// const fs = require("fs");

// http.createServer((req,res)=>{

//     let file = req.url === "/" ? "index.html" : req.url.slice(1);

//     fs.readFile(file,(err,data)=>{
//         if(err){
//             res.write("404 Not Found");
//             res.end();
//         }else{
//             res.end(data);
//         }
//     });

// }).listen(3000);

// console.log("Server running at http://localhost:3000");


const http = require("http");
const fs = require("fs");
const path = require("path");

const indexPage = path.join(__dirname, "index.html");
const loginPage = path.join(__dirname, "login.html");
const signPage = path.join(__dirname, "sign-in.html");
const styleFile = path.join(__dirname, "style.css");

http.createServer((req, res) => {

    if (req.method === "GET") {
        console.log(req.url, "current request url");

        // HOME PAGE
        if (req.url === "/") {
            fs.readFile(indexPage, "utf-8", (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                    res.write("error Found");
                    res.end();
                } else {
                    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                    res.end(data);
                }
            });
        }

        // CSS FILE
        if (req.url === "/style.css") {
            fs.readFile(styleFile, "utf-8", (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                    res.write("error Found");
                    res.end();
                } else {
                    res.writeHead(200, { "Content-Type": "text/css; charset=utf-8" });
                    res.end(data);
                }
            });
        }

        // LOGIN PAGE
        if (req.url === "/login") {
            fs.readFile(loginPage, "utf-8", (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                    res.write("error Found");
                    res.end();
                } else {
                    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                    res.end(data);
                }
            });
        }

        // SIGN-IN PAGE
        if (req.url === "/sign-in") {
            fs.readFile(signPage, "utf-8", (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
                    res.write("error Found");
                    res.end();
                } else {
                    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
                    res.end(data);
                }
            });
        }
    }

}).listen(3000);
