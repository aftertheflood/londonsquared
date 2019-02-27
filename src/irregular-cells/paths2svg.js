// convert a js object to an svg
// exmaple usage node paths2svg.js paths.json > paths.svg
const fs = require('fs');

const inFile = process.argv[2];

const pathData = JSON.parse(fs.readFileSync(inFile, 'utf-8'));

console.log(`<svg width="150" height="150">
  <g transform="translate(25, 25)">
    <rect width="100" height="100" x="0" y="0" fill="none" stroke="#F00"></rect>  
    ${ Object.keys(pathData).map(id =>  `<path id="${ id }" d="${ pathData[id] }" fill="none" stroke="#000" stroke-width="0.1"></path>` ).join(' ') }
  </g>
</svg>`)