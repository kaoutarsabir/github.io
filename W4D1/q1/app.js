const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.get('/', (req, res) => {
    res.render('form', {cookies: req.cookies});
});

app.post('/addCookie', (req, res) => {
    const {key, value} = req.body;
    if (key && value) {
        res.cookie(`${key}`, value);
    }
    res.redirect("/");
});

app.listen(3000);