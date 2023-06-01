import http, { request } from "http";
import fs from "fs";
http.createServer(async (request, response) => {
    let text;
    if (request.url != '/favicon.ico') {
        console.log(request.url)
        switch (request.url) {
            case "/page1":
                text = await fs.promises.readFile('file1.html', 'utf8');
                break;
            case "/page2":
                text = await fs.promises.readFile('file2.html', 'utf8');

        }

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(text);
        response.end();
    }
}).listen(3000);
