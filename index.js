// Description: Main entry point for the application.

// Import the required custom modules
const { processBarcodes } = require('./functions/barcodeProcessor');
const { readFile } = require('./functions/fileOperations');
const { fetchIndex } = require('./functions/indexFetcher');
const { getBarcodes, parseXML } = require('./functions/xmlParser');

// Import the required Node.js modules
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Read the XML file
console.log('📁 Veuillez déposer le fichier XML de votre base de données My Movies dans le dossier ' + 
    `${(path.join(__dirname, 'input').replace(/\\/g, '/'))}` + 
    '. Une fois le fichier déposé, appuyez sur Enter...');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', () => {
    rl.close();
    
    const inputDir = path.join(__dirname, 'input');
    const xmlFiles = fs.readdirSync(inputDir).filter(file => file.endsWith('.xml'));

    if (xmlFiles.length === 0) {
        console.error('❌ Aucun fichier XML trouvé dans le dossier input.');
        return;
    }

    if (xmlFiles.length > 1) {
        console.warn(`⚠️  Plusieurs fichiers XML trouvés dans le dossier. Seul le premier fichier : ${xmlFiles[0]} sera traité.`);
    }

    readFile(`input/${xmlFiles[0]}`, (data) => {
        // Parse the XML content
        parseXML(data, (result) => {
            console.log('✅ Base de donnée chargée avec succès !\n');

            // Extract all <Barcode> elements
            const barcodes = getBarcodes(result);

            // Load and process the index
            fetchIndex()
                .then(index => {
                    processBarcodes(barcodes, index);
                })
                .catch(error => console.error('❌ Erreur lors du chargement de l\'index :', error));
        });
    });
});