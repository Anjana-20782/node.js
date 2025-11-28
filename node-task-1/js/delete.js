//using unlink

// const fs = require('fs');
// const path = 'temp.txt';

// fs.unlink(path,(err)=>{
//     if(err)
//     {
//         console.log("Failed to delete",err);
        
//     }
//     console.log("Deleted the file",path);
    
// })


//using fs.rm

const fs = require('fs');
const path = 'temp.txt';

fs.rm(path,{force:true},(err)=>{
    if(err){
    console.log("fs.rm Failed",err);
    }
    console.log("Deleted the path",path);
    
})