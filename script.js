const fs = require('fs');
const http = require('http');
const path = require('path');

const PORT = 5500;

const server = http.createServer((req, res) => {
    if (req.url === '/page1') {
        const filePath = path.join(__dirname, 'pages', 'page1.html');

        fs.readFile(filePath, (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        });
    } else if (req.url === '/page2') {
        const filePath = path.join(__dirname, 'pages', 'page2.html');

        fs.readFile(filePath, (err, content) => {
            if (err) throw err;Ё
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        });
    } else if (req.url === '/page3') {
        const filePath = path.join(__dirname, 'pages', 'page3.html');

        fs.readFile(filePath, (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        });
    } else if (req.url === '/page4') {
        const data = { message: 'страничка 4'};

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } else if (req.url === '/page5') {
        const text = 'страничка 5';

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(text);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(PORT, 'localhost', err => {
    err
        ? console.log('Error with server listening:', err)
        : console.log('Server is listening on port:', PORT);
});