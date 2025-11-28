const fs = require("fs");

if (fs.existsSync("notess.txt")) {
    console.log("notes.txt exists!");
} else {
    console.log("notes.txt does NOT exist!");
}
