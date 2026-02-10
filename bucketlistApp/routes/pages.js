const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    // Odstraníme query parametry (vše za otazníkem), abychom našli čistý název souboru
    const urlPath = req.url.split('?')[0];
    let pathname = urlPath === '/' ? '/index.html' : urlPath;

    // Automatické přidání .html, pokud nejde o soubor s jinou koncovkou (jako .css)
    if (!path.extname(pathname)) {
        pathname += '.html';
    }

    const filePath = path.join(__dirname, '../views', pathname);

    if (fs.existsSync(filePath)) {
        const ext = path.extname(filePath);
        let contentType = 'text/html';

        // KLÍČOVÁ ČÁST: Rozpoznání CSS
        if (ext === '.css') {
            contentType = 'text/css';
        }

        res.writeHead(200, { 'Content-Type': contentType + '; charset=utf-8' });
        fs.createReadStream(filePath).pipe(res);
        return true;
    }

    return false;
};