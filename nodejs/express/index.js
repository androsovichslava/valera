import express from 'express';
let app = express();
app.get('/', function (req, res) {
    res.send('hello world');
});
app.get('/1/', function (req, res) {
    res.send('page1');
});

app.get('/2/', function (req, res) {
    res.send('page2');
});

app.get('/3/', function (req, res) {
    res.send('page3');
});

app.listen(3001, function () {
    console.log('running');
});