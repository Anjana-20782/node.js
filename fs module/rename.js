var fs=require("fs")

//(async)

fs.rename("./new.txt","./sample.txt",(err)=>{
if(err)
{
    console.log(err);
    
}
console.log("File created");
});



//sync

try {
  fs.renameSync('./new.txt', './sample.txt');
  console.log('Renamed (sync)');
} catch (err) {
  console.error('renameSync error:', err);
}

//promises
async function renamePromise(src, dest) {
  try {
    await fsp.rename(src, dest);
    console.log('Renamed (promise)');
  } catch (err) {
    console.error('Rename (promise) failed:', err);
  }
}

renamePromise('./new.txt', './sample.txt');

