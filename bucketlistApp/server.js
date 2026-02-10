const http = require('http');
const handleApiGoals = require('./routes/apiGoals');
const handlePages = require('./routes/pages');

const server = http.createServer((req, res) => {
  // 1. Zkusíme, jestli jde o API požadavek
  if (handleApiGoals(req, res)) return;

  // 2. Pokud ne, zkusíme, jestli jde o stránku (HTML)
  if (handlePages(req, res)) return;

  // 3. Pokud ani jedno, vrátíme 404
  res.writeHead(404);
  res.end('Not Found');
});

server.listen(3000, () => {
  console.log('Server běží na http://localhost:3000');
});