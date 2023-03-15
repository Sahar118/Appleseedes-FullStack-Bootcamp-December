const fs = require('fs')

// 1
fs.writeFileSync('notes.txt', 'This file was created by Node.js!')

// 2
fs.copyFileSync('notes.txt', 'copied_notes.txt')

// 3
fs.renameSync('notes.txt', 'newName_notes.txt');

// 4
console.log(fs.readdirSync('./'));

console.log(fs.statSync('newFileCopyRenamed.txt'));