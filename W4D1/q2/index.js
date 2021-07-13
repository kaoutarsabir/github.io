let page = `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<form method="post" action="/result">
  <label>Name</label>
  <input type="text" name="name" />

  <label>Age</label>
  <input type="text" name="age" />

  <input type="submit" value="Submit Query" />
</form>
</body>
</html>
`;

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secretmiusalt'
}));
app.get('/', (req, res) => {
 res.writeHead(200,{"Content-Type":"text/html"});
 res.end(page);
});

app.post('/result',(req,res)=>{
   req.session.name = req.body.name;
   req.session.age = req.body.age;
   res.redirect('/output');
});

app.get('/output',(req,res)=>{
 let name = req.session.name;
 let age = req.session.age;
 if (!name) {
   name = "person";
 }
 res.send(`Welcome ${name} your age is ${age}`);  
});
app.listen(4000);
