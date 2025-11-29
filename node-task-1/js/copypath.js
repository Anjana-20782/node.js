const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res)=>{

if(req.url === "/"){
    const copyPath = path.join(__dirname,"notes.txt");
    const duplicatePath = path.join(__dirname,"notes_copy.tex");
    fs.copyFile(copyPath,duplicatePath,(err,)=>{
        
        if(err){
             res.writeHead(500, { "Content-Type": "text/plain" });
            res.end(err)
        }else{
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("data");
        }
    });

}

}).listen(3000,()=>{
    console.log("server is running 3000");
    
})