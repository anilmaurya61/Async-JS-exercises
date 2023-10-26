const fs = require('fs').promises;

async function readFile(fileName) {
    return fs.readFile(fileName, 'utf-8');
}

async function convertFileToUpperCase(data, outputFileName) {
    const dataUpperCase = data.toUpperCase();
    return Promise.all([
        fs.writeFile('uppercase.txt', dataUpperCase),
        fs.writeFile('filenames.txt', 'uppercase.txt' + '\n')
    ]);
}

async function writeSentences(sentences) {
    const writePromises = sentences.map((sentence, index) => {
        return Promise.all([
            fs.writeFile(`sentence${index + 1}.txt`, sentence),
            fs.appendFile('filenames.txt', `sentence${index + 1}.txt\n`)
        ]);
    });

    return Promise.all(writePromises);
}

async function readFileAndSplitToSentences(inputFileName) {
    let data = await fs.readFile(inputFileName, 'utf-8');
    let lowerCaseData = data.toLocaleLowerCase();
    const sentences = lowerCaseData.split('. ');
    return writeSentences(sentences);
}

function sortContent(content) {
    let words = content.split(" ");
    words.sort();
    return words.join(" ");
}

async function readAndSortFiles(inputFileName) {
    const data = await fs.readFile(inputFileName, 'utf-8');
    const fileNames = data.split('\n');
    let fileNamesLength = fileNames.length;

    const writePromises = [];

    for (let i = 1; i < fileNamesLength - 1; i++) {
        let fileName = fileNames[i];
        let content = await fs.readFile(fileName, 'utf-8');
        let sortedContent = sortContent(content);
        writePromises.push(
            fs.writeFile(`sorted${i}.txt`, sortedContent),
            fs.appendFile('filenames.txt', `sorted${i}.txt\n`)
        );
    }

    return Promise.all(writePromises);
}

async function deleteFilesConcurrently(fileName) {
    const data = await fs.readFile(fileName, 'utf-8');
    const fileNames = data.split('\n');

    let fileNamesLength = fileNames.length;

    const deletePromises = [];

    for (let i = 0; i < fileNamesLength - 1; i++) {
        let fileName = fileNames[i];
        deletePromises.push(fs.unlink(fileName));
    }

    deletePromises.push(fs.unlink('filenames.txt'));

    return Promise.all(deletePromises);
}

module.exports = {
    readFile,
    convertFileToUpperCase,
    readFileAndSplitToSentences,
    readAndSortFiles,
    deleteFilesConcurrently
};
