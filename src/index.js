const http = require('http');
const router = require('./router');

const port = process.env.PORT || 4000;

const server = http.createServer(router);

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/`);
});
