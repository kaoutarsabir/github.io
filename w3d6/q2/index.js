const path = require('path');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.urlencoded({extended:false}));
app.get('/', (req, res) => {
    res.render("form");
});

app.post('/result',(req,res)=>{
    res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`);
 });
 
 app.get('/output',(req,res)=>{
    res.render("output", {name: req.query.name, age: req.query.age});
 });
 app.listen(4000);