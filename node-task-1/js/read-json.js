const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    // Convert JSON string → JS object/array
    const obj = JSON.parse(data);

    console.log("Converted JS object:", obj);
});
