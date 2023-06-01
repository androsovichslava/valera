import http, { request } from "http";
import fs from "fs";

function getMimeType(path) {
    let mimes = {
        html: 'text/html',
        jpeg: 'image/jpeg',
        jpg: 'image/jpeg',
        png: 'image/png',
        svg: 'image/svg+xml',
        json: 'application/json',
        js: 'text/javascript',
        css: 'text/css',
        ico: 'image/x-icon',
    };

    let exts = Object.keys(mimes);
    let extReg = new RegExp('\\.(' + exts.join('|') + ')$');

    let ext = path.match(extReg)[1];

    if (ext) {
        return mimes[ext];
    } else {
        return 'text/plain';
    }
}

http.createServer(async (request, response) => {
    let text;
    let status;
    let path = 'root' + request.url;

    try {
        if ((await fs.promises.stat(path)).isDirectory()) {
            path += '/index.html';
        }

        status = 200;
        text = await fs.promises.readFile(path, 'utf8');
    } catch (err) {
        status = 404;
        text = 'page not found';
    }

    response.writeHead(status, { 'Content-Type': getMimeType(path) }); // изменение
    response.write(text);
    response.end();
}).listen(3000);