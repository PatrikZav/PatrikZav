const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const apiGoals = require('./routes/apiGoals');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // API cesty
    if (apiGoals(req, res, pathname, parsedUrl.query)) return;

    // Statické HTML stránky
    let filePath = '';
    if (pathname === '/') filePath = 'views/index.html';
    else if (pathname === '/add') filePath = 'views/add.html';
    else if (pathname === '/detail') filePath = 'views/detail.html';

    if (filePath && fs.existsSync(filePath)) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(fs.readFileSync(filePath));
    }

    res.writeHead(404);
    res.end('Not Found');
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));