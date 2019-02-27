// get all the paths from an svg convert them to a JS object with the key being the id of the path, the value being it's d attribute
const cheerio = require('cheerio');
const fs = require('fs');
const inFile = process.argv[2];


const svg = cheerio.load(fs.readFileSync(inFile, 'utf-8'));
const pathsObject = {};

svg('path')
  .each((i, path)=>{
    pathObject[path.attribs.id] = path.attribs.d;
  });

console.log( JSON.stringify(pathsObject) );