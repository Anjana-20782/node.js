var fs=require("fs")

//sync

fs.unlink("./text.txt",(err)=>{
    if(err)
    {
        console.log(err);
        
    }
    console.log("File Deleted");
    
});