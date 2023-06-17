import express from 'express';
import __dirname from './__dirname.js';

console.log(__dirname);
let app = express();
app.get('/', function (req, res) {
    res.send("<h1>HELLO</h1>");
});
// app.get('/page/1/', function (req, res) {
//     res.sendFile(__dirname + '/pages/1.html');
// });

// app.get('/page/2/', function (req, res) {
//     res.sendFile(__dirname + '/pages/2.html');
// });
// app.get('/page/3/', function (req, res) {
//     res.sendFile(__dirname + '/pages/3.html');
// });
app.get('/page/:num/:num2/:num3/', function (req, res) {
    res.send(`<h1>Страница: ${req.params.num} Сумма чисел: ${Number(req.params.num2) + Number(req.params.num3)}</h1>`);
});
app.get('/menu/', function (req, res) {
    let menu = ['Main', 'content', 'About us'];

    res.send('<ul>' + menu.map(elem => `<li>${elem}</li>`).join('') + '</ul>');
});

app.get('/prods/', function (req, res) {
    let prods = [
        {
            name: 'prod1',
            cost: 1000,
        },
        {
            name: 'prod2',
            cost: 2000,
        },
        {
            name: 'prod3',
            cost: 3000,
        },
    ];

    res.send('<ul>' + prods.map(elem => `<li>${elem.name}  ${elem.cost}</li>`).join('') + '</ul>');
});
app.get('/employees/', function (req, res) {
    let employees = [
        {
            surname: 'surname1',
            name: 'user1',
            salary: 1000,
        },
        {
            surname: 'surname2',
            name: 'user2',
            salary: 2000,
        },
        {
            surname: 'surname3',
            name: 'user3',
            salary: 3000,
        },
    ];
    res.send('<table>' + employees.map(elem => `<tr><td>${elem.name}</td> <td> ${elem.surname}</td><td> ${elem.salary}</td></tr>`).join('') + '</table>');
});


app.use(express.static(__dirname + '/public/'))
app.use(function (req, res) {
    res.status(404).send('not found');
});


app.listen(3000, function () {
    console.log('running at 3000 port')
})



