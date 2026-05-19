const fs = require('fs');
const path = require('path');

/**
 * Configuration
 */
// Root is where this script lives
const rootDir = __dirname; 

// Target folder to look for PDFs (current directory)
const targetDir = rootDir;

// The name of the file we want to create
const outputFileName = 'files.json';

// The absolute path where the JSON will be saved (ProjectRoot/docs/references/files.json)
const finalOutputPath = path.join(targetDir, outputFileName);

const fileExtension = '.pdf';

/**
 * Logic Execution
 */

// 1. Check if the directory exists
if (!fs.existsSync(targetDir)) {
    console.error(`Directory not found: ${targetDir}`);
    // If the directory doesn't exist, we can't look up PDFs
    process.exit(1);
}

// 2. Read the target directory
fs.readdir(targetDir, (err, files) => {
    if (err) {
        return console.error('Unable to scan directory: ' + err);
    }

    // 3. Filter for PDF files only
    const pdfFiles = files.filter(file => {
        return path.extname(file).toLowerCase() === fileExtension;
    });

    // 4. Sort alphabetically for a clean list
    pdfFiles.sort();

    // 5. Convert array to JSON string
    const jsonContent = JSON.stringify(pdfFiles, null, 2);

    // 6. Write the file to the target directory
    fs.writeFile(finalOutputPath, jsonContent, 'utf8', (err) => {
        if (err) {
            console.error('An error occurred while writing JSON Object to File.', err);
            process.exit(1);
        }

        console.log(`Success: ${outputFileName} saved in ${targetDir}`);
        console.log(`Found ${pdfFiles.length} PDF files.`);
    });
});