var fs=require("fs")

//sync

fs.unlink("./text.txt",(err)=>{
    if(err)
    {
        console.log(err);
        
    }
    console.log("File Deleted");
    
});


//sync

try {
  fs.unlinkSync('./text.txt');
  console.log('File deleted (sync)');
} catch (err) {
  console.error('unlinkSync error:', err);
}


//promises

async function deleteFile() {
  try {
    await fs.unlink('./text.txt');
    console.log('File deleted (promise)');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('File not found');
    } else {
      console.error('Unlink error:', err);
    }
  }
}
deleteFile();