// const fs = require('fs');
// const path = require('path');
// const mime = require('mime-types');

// const publicHandler = (req, res) => {
//   const endpoint = req.url;

//   const filePath = path.join(__dirname, '..', '..', endpoint);
//   fs.readFile(filePath, (err, file) => {
//     if (err) {
//       res.writeHead(500, { 'content-type': 'text/html' });
//       res.end('<div>500 - Internal Server Error</div>');
//     } else {
//       res.writeHead(200, { 'content-type': mime.lookup(endpoint) });
//       res.end(file);
//     }
//   });
// };

// module.exports = publicHandler;
