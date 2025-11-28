
const fs=require("fs")


//  fs.writeFileSync("note.txt","Hello Node.js",(err)=>{
//     if(err){
//         console.log(err)

//     }
//     console.log("created")
//  })

 
fs.writeFile("notes.txt","Hello Node.js",(err)=>{
    if(err)
    {
        console.log("error writing file",err);
        
    }
    console.log("File created using WritingFile");
    
})