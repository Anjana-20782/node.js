const fs = require('fs');
const path = require('path');

const backupDir = path.join(__dirname, 'backup');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
  console.log('Created folder:', backupDir);
} else {
  console.log('Folder already exists:', backupDir);
}
