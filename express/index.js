import express from 'express';
import __dirname from './__dirname.js';
import fs from 'fs/promises';
import { constants } from 'fs';
import expressHandlebars from 'express-handlebars';
const handlebars = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

let app = express();
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

let titles = {
    index: 'главная страница',
    about: 'о нас',
    conctacs: 'контакты',
    price: 'наш прайс'
}

app.get('/page/:page', function (req, res) {
    res.render(req.params.page, { title: titles[req.params.page] });
});

app.listen(3000, function () {
    console.log('running at 3000 port')
})



