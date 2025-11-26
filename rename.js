var fs=require("fs")

//(async)

fs.rename("./new.txt","./sample.txt",(err)=>{
if(err)
{
    console.log(err);
    
}
console.log("File created");
});