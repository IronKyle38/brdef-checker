// Description: This file contains the function that processes the barcodes and returns the defective items.

// Function to process the barcodes and find defective items
const processBarcodes = (barcodes, index) => {
    // Create a set of barcodes for quick lookup
    const barcodeSet = new Set(barcodes);

    // Find the defective items
    const { BD: bluRayData } = index.INDEX;
    const results = bluRayData.filter(item =>
        barcodeSet.has(item['EAN-UPC']) || barcodeSet.has(item['EAN-UPC-1'])
    );

    // Log the results
    console.log('🔍 Résultats de la recherche :');

    // Check if there are no defective items
    if (results.length === 0) {
        console.log('😊 Aucun Blu-ray défectueux trouvé.');

    } else {
        console.log(`😞 ${results.length} Blu-ray potentiellement défectueux trouvés :`);

        // Log the results
        results.forEach(item => {
            console.group();
            console.log(` Titre : ${item.TITRE}`);

            // Check if there is a second EAN
            if (item['EAN-UPC-1']) {
                console.log(` EAN : ${item['EAN-UPC']} | ${item['EAN-UPC-1']}\n`);

            } else {
                console.log(` EAN : ${item['EAN-UPC']}\n`);
            }

            console.groupEnd();
        });
    }
}

// Export the function
module.exports = {
    processBarcodes
};