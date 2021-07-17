const express = require("express");
const path = require("path");
const controller = require("./controller/index")

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.json());
app.get("/", controller.productsAction);
app.get("/cart", controller.cartAction);
app.post("/addToCart", controller.addToCart);

app.listen(3000);
