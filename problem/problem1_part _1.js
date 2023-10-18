const fs = require('fs');
const path = require('path');

function createJsonFiles(callback) {
    fs.writeFile(`./JSON Files/File1.json`, JSON.stringify({}, null, 2), (err) => {
        if (err) {
            console.error(err);
        } else {
            fs.writeFile(`./JSON Files/File2.json`, JSON.stringify({}, null, 2), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    fs.writeFile(`./JSON Files/File3.json`, JSON.stringify({}, null, 2), (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log('All files written successfully')
                            callback();
                        }
                    })
                }
            })
        }
    })
}

function deleteJsonFiles() {
    fs.unlink(`./JSON Files/File1.json`, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            fs.unlink(`./JSON Files/File2.json`, (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    fs.unlink(`./JSON Files/File3.json`, (err) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log('All files deleted successfully')
                            fs.rmdir('JSON Files', (err) => {
                                if (err) {
                                    console.log(err);
                                }
                                else {
                                    console.log('Directory deleted successfully')
                                }
                            });
                        }
                    })
                }
            })
        }
    })
}

function part1() {
    fs.mkdir('JSON Files', (err) => {
        if (err) {
            console.log(err);
        }
        else {
            createJsonFiles(deleteJsonFiles);
        }
    })
}

module.exports = part1;
