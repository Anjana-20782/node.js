const fs = require('fs');

fs.appendFile("notes.txt", "This is appended text\n", (err) => {
    if (err) {
        console.log("Error appending data:", err);
        
    }
    console.log("Data appended successfully (async)");
});
