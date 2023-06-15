import express from 'express';
let app = express();
app.get('/', function (req, res) {
    console.log(req.path);
    console.log(req.url);
    console.log(req.originalUrl);
    console.log(req.query);
    console.log(req.protocol);
    console.log(req.secure);
    console.log(req.acceptsLanguages());
    console.log(req.ip);
    res.send("<h1>HELLO</h1>");
});
app.get('/1/', function (req, res) {
    res.send("<h1>HELLO page1</h1>");
});
app.get('/2/', function (req, res) {
    res.send("<h1>HELLO page2</h1>");
});
app.get('/3/', function (req, res) {
    res.send("<h1>HELLO page3</h1>");
});
app.use(function (req, res) {
    res.status(404).send('not found');
});


app.listen(3000, function () {
    console.log('running at 3000 port')
})



