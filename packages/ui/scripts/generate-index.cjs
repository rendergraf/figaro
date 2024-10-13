const fs = require('fs');
const path = require('path');

const folders = ['src/components', 'src/containers', 'src/tokens', 'src/media'];
const baseDir = path.resolve(__dirname, '../');
const indexFilePath = path.resolve(baseDir, 'index.ts');

let exportLines = '';

folders.forEach((folder) => {
  const folderPath = path.join(baseDir, folder);
  fs.readdirSync(folderPath).forEach((file) => {
    const fileName = file.replace(/\.tsx?$/, '');

    if (folder === 'src/tokens' && (fileName === 'css' || fileName === 'figma')) {
      return;
    }

    exportLines += `export * from "./${folder}/${fileName}";\n`;
  });
});

fs.writeFileSync(indexFilePath, exportLines);

console.log('index.ts generado con éxito!');