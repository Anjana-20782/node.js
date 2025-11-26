var fs= require("fs/promises")


//Read file(asyn)

// fs.readFile("./text.txt","utf-8",function(err,data){
//     if(err)
//     {
//         console.log(err);
        
//     }
//     console.log(data);
    
// })


//Read file (sync)

// try {
//   const data = fs.readFileSync('./text.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error('Read error:', err);
// }


//Read file (promise)

async function readFileAsync() {
  try {
    const data = await fs.readFile('./text.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error('readFile promise error:', err);
  }
}

readFileAsync()