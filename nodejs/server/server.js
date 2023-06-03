import http, { request } from "http";
import fs from "fs";

http.createServer(async (request, response) => {
    if (request.url !== "/favicon.ico") {
        let lpath = 'layout.html';
        let cpath = 'page' + request.url + 'content.html';
        let tpath = 'page' + request.url + 'title.html';

        let layout = await fs.promises.readFile(lpath, 'utf8');
        let content = await fs.promises.readFile(cpath, 'utf8');
        let title = await fs.promises.readFile(tpath, 'utf8');

        layout = layout.replace(/\{% get content %\}/, content);
        layout = layout.replace(/\{% get title %\}/, title);

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(layout);
        response.end();
    }
}).listen(3000);