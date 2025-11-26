var fs= require("fs")


//Read file(asyn)

fs.readFile("./text.txt","utf-8",function(err,data){
    if(err)
    {
        console.log(err);
        
    }
    console.log(data);
    
})


//Read file (sync)

try {
  const data = fs.readFileSync('./text.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error('Read error:', err);
}