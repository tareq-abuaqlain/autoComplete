const homeHandler = require('./handler/homeHandler');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    homeHandler(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('<h1> 404: Page not found');
    res.end();
  }
};

module.exports = router;
