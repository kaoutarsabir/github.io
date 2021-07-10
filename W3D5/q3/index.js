let style = new Date().getHours() >= 6 && new Date().getHours() < 18 ? "css/day.css" : "css/night.css";

let page = `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
<link rel="stylesheet" href="${style}">
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
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use('/css', express.static(path.join(__dirname, 'css')))
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
 res.writeHead(200,{"Content-Type":"text/html"});
 res.end(page);
});

app.post('/result',(req,res)=>{
   res.send(`Welcome ${req.body.name} your age is ${req.body.age}`);
});
app.listen(4000);
