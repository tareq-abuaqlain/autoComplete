const path = require('path');
const fs = require('fs');

const handler = (res) => {
  const filePath = path.join(__dirname, '..', '..', 'index.html');
  fs.readFile(filePath, (err, file) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>Sorry, there was a problem loading the homepage</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(file);
    }
  });
};

module.exports = handler;
