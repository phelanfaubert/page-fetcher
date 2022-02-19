const fs = require('fs')

const args = process.argv.slice(2)
const timer = function(args) {
  console.log(args);

const content = 'Some content!'

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})



const request = require('request');
const fs = require('fs');

const URL = process.argv[2];
const writePath = process.argv[3];

request(URL, (error, response, body) => {
  console.log('error: ', error);
  console.log('statusCode: ', response && response.statusCode);
  console.log('body: ', body);
  
  const fileSize = body.length;

  // write to fs here, so it doesn't attempt to do so BEFORE response is received
  // flag 'wx+' throws an error if the filepath already exists
  fs.writeFile(writePath, body, { flag: 'wx+' }, err => {
    if (err) {
      console.log(err);
      return;
    }
    const completeMsg = () => {
      console.log(`Downloaded and saved ${fileSize} bytes to ${writePath}.`);
    };
    completeMsg();
  });

});


// Download and save resource(response from server) to a local path on machine
// print at the end, example: "Downloaded and saved 1235 bytes to ./index.html."

//ASYNC OPERATIONS IN THIS PROBLEM:
// Need to make an http request and wait for the response.
// After the http request is complete, take the date received and write it to a file in local filesystem.
// use NESTED callbacks to control the order of async operations


//writeFileSystem should go INSIDE request function
// to find size of file : fileSize = body.length