const fs = require('fs').promises;

function createJsonFiles(callback) {
    fs.writeFile('./JSON Files/File1.js', JSON.stringify("This is a JSON-1 file", null, 2))
        .then(() => {
            return fs.writeFile('./JSON Files/File2.js', JSON.stringify("This is a JSON-2 file", null, 2));
        })
        .then(() => {
            return fs.writeFile('./JSON Files/File3.js', JSON.stringify("This is a JSON-3 file", null, 2));
        })
        .then(() => {
            console.log('All files written successfully');
            callback();
        })
        .catch((err) => {
            console.error("Error", err);
        });
}
function deleteJsonFiles() {
    fs.unlink('./JSON Files/File1.js')
    .then(() => {
        return fs.unlink('./JSON Files/File2.js')
    })
    .then(() => {
        return fs.unlink('./JSON Files/File3.js')
    })
    .then(() => {
        console.log('All files deleted successfully')
        return fs.rmdir('./JSON Files')
    })
    .catch((err) => {
        console.error("Error", err);
    })
}
function part2() {
    fs.mkdir('JSON Files').then(() => {
        console.log("Directory is created successfully")
        createJsonFiles(deleteJsonFiles);
    })
    .catch((err) => {
        console.error("Error", err);
    });
}

module.exports = part2;