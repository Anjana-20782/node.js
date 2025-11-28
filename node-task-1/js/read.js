const fs=require("fs")

// fs.readFile("notes.txt","utf-8",function(err,data){
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })



try {
  const data = fs.readFileSync('notes.txt', 'utf8'); 
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}
