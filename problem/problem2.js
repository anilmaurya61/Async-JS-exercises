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
    try {
        const dataUpperCase = data.toUpperCase();
        await fs.writeFile('uppercase.txt', dataUpperCase);
        await fs.writeFile('filenames.txt', 'uppercase.txt' + '\n');
    }
    catch (err) {
        console.error("Error: ", err);
    }
}

async function writeSentences(sentences,) {
    try {
        for (let i = 0; i < sentences.length-1; i++) {
            const sentence = sentences[i];
            await fs.writeFile(`sentence${i + 1}.txt`, sentence);
            await fs.appendFile('filenames.txt', `sentence${i + 1}.txt\n`);
        }
    }
    catch (err) {
        console.error("Error: ", err);
    }
}

async function readFileAndSplitToSentences(inputFileName) {
    try {
        const data = await fs.readFile(inputFileName, 'utf-8');
        const sentences = data.split('. ');
        await writeSentences(sentences);
    }
    catch (err) {
        console.error("Error: ", err);
    }
}

function sortContent(content) {
    let words = content.split(" ");
    words.sort();
    return words.join(" ");
}

async function readAndSortFiles(inputFileName) {
    try {
        const data = await fs.readFile(inputFileName, 'utf-8');
        const fileNames = data.split('\n');
        let fileNamesLength = fileNames.length;
        for (let i = 1; i < fileNamesLength - 1; i++) {
            let fileName = fileNames[i];
            let content = await fs.readFile(fileName, 'utf-8');
            let sortedContent = sortContent(content);
            await fs.writeFile(`sorted${i}.txt`, sortedContent);
            await fs.appendFile('filenames.txt', `sorted${i}.txt\n`);
        }
    }
    catch (err) {
        console.error("Error: ", err);
    }
}

async function deleteFilesConcurrently(fileName) {
    try {
        const data = await fs.readFile(fileName, 'utf-8');
        const fileNames = data.split('\n');

        let fileNamesLength = fileNames.length;
        for (let i = 0; i < fileNamesLength - 1; i++) {
            let fileName = fileNames[i];
            await fs.unlink(fileName);
        }
        await fs.unlink('filenames.txt');
    }
    catch (err) {
        console.error("Error: ", err);
    }
}


module.exports = {
    readFile,
    convertFileToUpperCase,
    readFileAndSplitToSentences,
    readAndSortFiles,
    deleteFilesConcurrently
};