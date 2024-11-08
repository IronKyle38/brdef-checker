// Description: This file contains functions for file operations like reading, writing and creating directories.

// Require the fs module
const fs = require('fs');

// Function to read a file
const readFile = (filePath, cb) => {
    fs.readFile(filePath, (err, data) => {
        if (err) throw err;
        cb(data);
    });
};

// Export the functions
module.exports = {
    readFile
};