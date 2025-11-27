    // const http = require('http');

    // const server = http.createServer((req, res) => {
    //   res.writeHead(200, { 'Content-Type': 'text/plain' });
    //   res.write("<body>")
    //   res.end('Hello, World!\n');
    // });

    // const PORT = 3000;
    // server.listen(PORT, () => {
    //   console.log(`Server running at http://localhost:${PORT}/`);
    // });


// const http = require('http');

// http.createServer((req, res) => {

//   res.writeHead(200, {'Content-Type': 'text/plain'});

//   res.write('Part 1\n');   // send chunk 1
//   res.write('Part 2\n');   // send chunk 2

//   res.end('Final part\n'); // send final chunk and close
// }).listen(3001);


const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Build path to index.html (in the same folder)
  const filePath = path.join(__dirname, 'index.html');

  