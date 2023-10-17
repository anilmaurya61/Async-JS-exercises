const fs = require('fs').promises;

async function readFile(fileName) {
    try {
        const data = await fs.readFile(fileName, 'utf-8');
        return data;
    } catch (err) {
        throw err;
    }
}

async function convertFileToUpperCase(data, outputFileName) {
    try{
        const dataUpperCase = data.toUpperCase();
        await fs.writeFile(outputFileName, dataUpperCase);
        await fs.writeFile('filenames.txt', outputFileName);
    }
    catch(err){
        console.error("Error: ", err);
    }
}



async function main() {
    try {
        const data = await readFile('lipsum.txt');
        convertFileToUpperCase(data, 'uppercase.txt')
    }
    catch (err) {
        console.error("Error: ", err);
    }
}

main();


// module.exports = readFil;