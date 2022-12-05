const querystring = require('querystring');
const data = require('./data');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Home Page</h1>');
  } else if (endpoint.includes('/?search=')) {
    const valuesOfData = Object.values(Object.values(data)[0]);
    const queryToParse = endpoint.split('?')[1];
    const parsedQuery = querystring.parse(queryToParse);
    const value = (Object.values(parsedQuery)[0]).toLowerCase();
    const filteredData = valuesOfData.filter((item) => item.toLowerCase().startsWith(value));
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(filteredData.toString());
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('<h1> 404: Page not found');
    res.end();
  }
};

module.exports = router;
