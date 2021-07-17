const express = require("express");
const router = require("./routers/router");
const path = require("path");
const controller = require("./controller/index")

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.urlencoded({extended: false}));
app.get("/", controller.productsAction);
app.get("/cart", controller.cartAction);

app.listen(3000);
