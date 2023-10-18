const fs = require('fs').promises;

async function createJsonFiles(callback) {
    try {
        await fs.writeFile('./JSON Files/File1.json', JSON.stringify({ message: "This is a JSON-1 file" }, null, 2));
        await fs.writeFile('./JSON Files/File2.json', JSON.stringify({ message: "This is a JSON-2 file" }, null, 2));
        await fs.writeFile('./JSON Files/File3.json', JSON.stringify({ message: "This is a JSON-3 file" }, null, 2));
        console.log("All files created successfully");
        callback();
    } catch (err) {
        console.error("Error", err);
    }
}

async function deleteJsonFiles(){
    try {
        await fs.unlink('./JSON Files/File1.json');
        await fs.unlink('./JSON Files/File2.json');
        await fs.unlink('./JSON Files/File3.json');
        console.log("All files deleted successfully");
        await fs.rmdir('./JSON Files');
    } catch (err) {
        console.error("Error", err);
    }
}

async function part3(){
    try{
        await fs.mkdir('./JSON Files');
        await createJsonFiles(deleteJsonFiles)
    }
    catch(err){
        console.error("Error: ", err);
    }
}

module.exports = part3;