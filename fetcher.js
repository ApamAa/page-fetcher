const httpAddress = process.argv[2];
const fileAdress = process.argv[3];

const request = require('request');
const fs = require("fs");
//az tarighe in module fs  mitoonam tooye file mohtava benevisim
request(httpAddress, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // inja bayad ye dastoori benevisim ke tooye location e file address body ro write kone
  if (!error) {
    fs.writeFile(fileAdress, body, (err) => {
      if (err) {
        console.log('Failed to write to file');
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${fileAdress}.`);
      }
  
    });
  }
});

