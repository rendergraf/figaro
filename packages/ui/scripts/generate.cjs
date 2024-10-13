const fs = require('fs');
const path = require('path');

const folders = ['src/components', 'src/containers'];
const baseDir = path.resolve(__dirname, '../');
const indexFilePath = path.resolve(baseDir, 'index.ts');

let exportLines = '';

folders.forEach((folder) => {
  const folderPath = path.join(baseDir, folder);
  fs.readdirSync(folderPath).forEach((file) => {
    const fileName = file.replace(/\.tsx?$/, ''); // Quita extensión .ts o .tsx
    exportLines += `export * from "./${folder}/${fileName}";\n`;
  });
});

fs.writeFileSync(indexFilePath, exportLines);

console.log('index.ts generado con éxito!');