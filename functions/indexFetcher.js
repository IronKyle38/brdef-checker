// Description: Function to fetch the index-BRDEF.json file from the site https://bluraydefectueux.com

// Define constant for the URL
const indexBrdefUrl = 'https://bluraydefectueux.com/ressources/JSON/index-BRDEF.json';

// Function to handle errors
function handleError(errorType, errorMessage) {
    console.error(`❌ Impossible de charger le fichier index-BRDEF.json depuis ${indexBrdefUrl}`);
    console.error(`   ${errorType}`);
    console.error(`   ${errorMessage}`);
    console.error();

    // Exit the process
    process.exit(1);
}

// Function to fetch the index file
async function fetchIndex() {
    try {
        // Fetch the index file
        const response = await fetch(indexBrdefUrl);

        // Check if the response status indicates a successful request (status 200)
        if (response.status !== 200) {
            handleError(`Code d'erreur : ${response.status}`, `Message : ${response.statusText}`);
        }

        // Check if the response content type is JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            handleError('Type de contenu invalide', `Type de contenu reçu : ${contentType}`);
        }

        // Parse the JSON response
        const index = await response.json();

        // Log the successful fetch
        console.group(`✅ Fichier index-BRDEF.json chargé avec succès !`);
        console.log(` Nombre de titres : ${index.INDEX.BD.length}`);
        console.log(` Version : ${index.INDEX.VERSION}`);
        console.log(` Chargé depuis : ${indexBrdefUrl}\n`);
        console.groupEnd();

        // Return the index
        return index;

    } catch (error) {
        handleError(`Erreur : ${error.name}`, `Message : ${error.message}`);
    }
}

// Export the function
module.exports = { fetchIndex };