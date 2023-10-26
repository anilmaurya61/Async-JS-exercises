const {
    readFile,
    convertFileToUpperCase,
    readFileAndSplitToSentences,
    readAndSortFiles,
    deleteFilesConcurrently
} = require('../problem/problem2')

async function main() {
    try {
        const data = await readFile('./../lipsum.txt');
        await convertFileToUpperCase(data, 'uppercase.txt')
        await readFileAndSplitToSentences('uppercase.txt');
        await readAndSortFiles('filenames.txt');
        await deleteFilesConcurrently('filenames.txt');
    }
    catch (err) {
        throw err;
    }
}

main();

