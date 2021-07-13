const Product = require("../models/product");
const CartProduct = require("../models/cart_product");

const products = [new Product(1,"product 1",1000,"description1"),
new Product(2,"product 2",10,"description2"),
new Product(3,"product 3",100,"description3"),
];


exports.productsAction = (req,rsp,next) => {
    rsp.render("index",{
        items:products
    });
}

exports.cartAction = (req,rsp,next) => {
    const cart = req.session.cart || [];
    rsp.render("shoppingcart",{
        items:cart
    });
}

exports.addToCart = (req,rsp,next) => {
   if(req.session.cart === undefined) req.session.cart = [];
   const id = req.query.id;
   let item = req.session.cart.find(x=>x.id == id);
   let prod = products.find(x=>x.id == id);
   if(item !== undefined) {
    item.quantity +=1;
    item.price += prod.price;;
   }else{
      req.session.push( new CartProduct(prod.id,prod.name,prod.price,1));
   }

  rsp.redirect('cart');
}


