const fs = require('fs');

fs.rename('note.txt', 'new.txt', (err) => {
    if (err) throw err;
    console.log('File renamed successfully');
});