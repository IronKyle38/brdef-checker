// Description: This file contains functions for parsing XML data and displaying progress using cli-progress.

// Import the xml2js module
const xml2js = require('xml2js');
const cliProgress = require('cli-progress');

// Function to parse XML data
const parseXML = (data, callback) => {
    const progressBar = new cliProgress.SingleBar({
        format: '⏳ Lecture de la base de donnée |' + '{bar}' + '| {percentage}% |',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: true
    });

    progressBar.start(3, 0); // 3 steps: Start, Parsing, Extraction

    progressBar.update(1); // Start

    xml2js.parseString(data, (err, result) => {
        if (err) throw err;

        progressBar.update(2); // Parsing finished

        progressBar.update(3); // Extraction finished
        progressBar.stop();

        callback(result);
    });
};

// Recursive function to get all barcodes from an object
const getBarcodes = (obj) => {
    const barcodes = [];
    const barcodeKey = 'Barcode';

    extractBarcodesFromObject(obj, barcodes, barcodeKey);
    return barcodes;
};

// Function to extract barcodes from an object
const extractBarcodesFromObject = (obj, barcodes, barcodeKey) => {
    const stack = [obj];

    while (stack.length > 0) {
        const currentObj = stack.pop();

        for (const key in currentObj) {
            if (key === barcodeKey) {
                barcodes.push(currentObj[key][0]);
            } else if (currentObj[key] && typeof currentObj[key] === 'object') {
                stack.push(currentObj[key]);
            }
        }
    }
};

// Export the functions
module.exports = {
    getBarcodes,
    parseXML
};