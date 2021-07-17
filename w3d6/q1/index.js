
const path = require('path');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use('/css', express.static(path.join(__dirname, 'css')))
app.get('/', (req, res) => {
    res.render("index", {
    time: new Date().toTimeString(),
    style: new Date().getHours() >= 6 && new Date().getHours() < 18 ? "css/day.css" : "css/night.css",
    });
});

app.listen(4000);
