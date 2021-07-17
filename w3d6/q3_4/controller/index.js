const Product = require("../models/product");
const CartProduct = require("../models/cart_product");

const products = [new Product(1,"product 1",1000,"description1"),
new Product(2,"product 2",10,"description2"),
new Product(3,"product 3",100,"description3"),
];

const cart_products = [new CartProduct("product 1",1000,1),
new CartProduct("product 2",1000,1),
new CartProduct("product 3",1000,1),
];

exports.productsAction = (req,rsp,next) => {
    rsp.render("index",{
        items:products
    });
}

exports.cartAction = (req,rsp,next) => {
    rsp.render("shoppingcart",{
        items:cart_products
    });
}
