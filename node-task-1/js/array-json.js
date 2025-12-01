const fs = require('fs');

const arr = [1, 2, 3, 4];

// Convert array to JSON string
const jsonData = JSON.stringify(arr, null, 2);

// Write to data.json
fs.writeFile('data.json', jsonData, (err) => {
    if (err) {
        console.log('Error writing file:', err);
    } else {
        console.log('Array written to data.json successfully');
    }
});
