var fs= require("fs")


//Read file

fs.readFile("./text.txt","utf-8",function(err,data){
    if(err)
    {
        console.log(err);
        
    }
    console.log(data);
    
})