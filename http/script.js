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
  // Determine the file path to serve
  // If request URL is '/', serve index.html
  let filePath = path.join(__dirname, 'index.html');
  if (req.url !== '/' ) {
    // remove leading slash and use as relative path
    filePath = path.join(__dirname, req.url);
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // If error (e.g. file not found), send 404
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      // Success — serve HTML
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
