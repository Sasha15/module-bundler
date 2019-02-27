//node.js module fs is used in working with files and directories
const fs = require('fs');
//module which get code and generate AST (Abstract Syntax Tree)
const babylon = require('babylon');

function createAsset(filename) {
    //readFileSync method gets such parameters
    //filename of file descriptor (string, Buffer, url, integer)
    //encoding, e.g - uf8 (string or null) - optional
    //flag (string) all the flags here - https://nodejs.org/api/fs.html#fs_file_system_flags
    //return - string or Buffer
    const content = fs.readFileSync(filename, 'utf-8');

    const ast = babylon.parse(content, {sourceType: 'module'});
    console.log(ast);
}

createAsset('./src/entry.js');