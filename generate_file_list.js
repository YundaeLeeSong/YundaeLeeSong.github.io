const fs = require('fs');
const path = require('path');

// Configuration
const directoryPath = __dirname / 'docs';
const outputFile = 'docs/files.json';
const fileExtension = '.pdf';

// Read directory
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
  
  fs.writeFile(path.join(directoryPath, outputFile), jsonContent, 'utf8', (err) => {
    if (err) {
      console.error('An error occurred while writing JSON Object to File.', err);
      process.exit(1);
    }
    
    console.log(`${outputFile} has been saved with ${pdfFiles.length} files.`);
  });
});
