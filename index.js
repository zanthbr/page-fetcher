const fs = require('fs');
const request = require('request');

const input = process.argv;
const URL = input[2];
const PATH = input[3];

process.stdin.setEncoding('utf8');

request(URL , (error, response, body) => {
  if(response.statusCode !== 200) {
    console.log(`Error: ${response.statusCode}`);
    process.exit();
  }

  fs.writeFile(PATH, body, () => {
    if(error) throw error;
    const bytes = fs.statSync(PATH).size;
    console.log(`Downloaded and saved ${bytes} to ${PATH}`);
  })
});
