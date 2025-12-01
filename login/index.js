const http = require("http");
const fs = require("fs");

http.createServer((req,res)=>{

    let file = req.url === "/" ? "index.html" : req.url.slice(1);

    fs.readFile(file,(err,data)=>{
        if(err){
            res.write("404 Not Found");
            res.end();
        }else{
            res.end(data);
        }
    });

}).listen(3000);

console.log("Server running at http://localhost:3000");