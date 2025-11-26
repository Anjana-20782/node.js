var fs=require("fs/promises")

//Create file(async)

// fs.writeFile("new.txt","This is a new file Created by node.js",(err)=>{
// if(err)
// {
//     console.log(err);
    
// }
// console.log("File created");
// });


//(sync)

// try{
//   fs.writeFileSync("new.txt","This is a new file Created by node.js","utf-8")  ;
//   console.log("file created");
//   }catch(err){
// console.error("error write",err);
//   }

  //promise

  async function createFile() {
  try {
    await fsp.writeFile('new-promise.txt', 'This is a new file (promises)\n', 'utf8');
    console.log('File created (promises)');
  } catch (err) {
    console.error('Promise write error:', err);
  }
}
createFile();