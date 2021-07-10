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
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
 res.writeHead(200,{"Content-Type":"text/html"});
 res.end(page);
});

app.post('/result',(req,res)=>{
   res.redirect(`/output?name=${req.body.name}&age=${req.body.age}`);
});

app.get('/output',(req,res)=>{
 let name = req.query.name;
 let age = req.query.age;
 if (!name) {
   name = "person";
 }
 res.send(`Welcome ${name} your age is ${age}`);  
});
app.listen(4000);
