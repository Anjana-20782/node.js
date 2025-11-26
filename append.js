var fs=require("fs")

//append file(async)

fs.appendFile("new.txt","This is a new file Created by node.js",(err)=>{
if(err)
{
    console.log(err);
    
}
console.log("File created");
});


//sync

try {
  fs.appendFileSync('new.txt', 'This is a new file Created by node.js\n', 'utf8');
  console.log('Appended synchronously');
} catch (err) {
  console.error('appendFileSync error:', err);
}


//promises

async function appendWithPromises() {
  try {
    await fsp.appendFile('new.txt', 'This is a new file Created by node.js\n', 'utf8');
    console.log('Appended using fs/promises.appendFile');
  } catch (err) {
    console.error('Promise append error:', err);
  }
}
appendWithPromises();