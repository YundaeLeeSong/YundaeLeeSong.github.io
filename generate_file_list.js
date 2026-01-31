const fs = require('fs');
const path = require('path');

/**
 * Configuration
 */
// 1. Define the base project directory
const rootDir = __dirname;

// 2. Define the target directory - renamed to 'directoryPath' for consistency below
const directoryPath = path.resolve(rootDir, 'docs');

// 3. Define the output file name
const outputFileName = 'files.json';

// 4. Combine into one absolute path for the output
const finalOutputPath = path.join(directoryPath, outputFileName);

const fileExtension = '.pdf';

/**
 * Main Execution
 */

// Ensure the directory exists before reading
if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath, { recursive: true });
}

// Read directory using the corrected variable: directoryPath
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error('Unable to scan directory: ' + err);
  }

  // Filter for PDF files
  const pdfFiles = files.filter(file => {
    return path.extname(file).toLowerCase() === fileExtension;
  });

  // Sort files for consistent display order
  pdfFiles.sort();

  // Write to JSON file
  const jsonContent = JSON.stringify(pdfFiles, null, 2);

  // Use the absolute 'finalOutputPath' directly to avoid ENOENT errors
  fs.writeFile(finalOutputPath, jsonContent, 'utf8', (err) => {
    if (err) {
      console.error('An error occurred while writing JSON Object to File.', err);
      process.exit(1);
    }

    console.log(`${outputFileName} has been saved with ${pdfFiles.length} files.`);
  });
});