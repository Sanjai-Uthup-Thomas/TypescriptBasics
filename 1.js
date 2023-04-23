"use strict";
var Currency;
(function (Currency) {
    Currency["USD"] = "USD";
    Currency["EUR"] = "EUR";
    Currency["GBP"] = "GBP";
})(Currency || (Currency = {}));
function addToCart(productId, quantity, currency) {
    const product = findProduct(productId);
    const totalPrice = product.price * quantity;
    const currencySymbol = currency === Currency.EUR ? "Eur" : currency === Currency.GBP ? "Gbp" : "Usd";
    return {
        product: product,
        quantity: quantity,
        totalPrice: `${currencySymbol}${totalPrice}`
    };
}
const findProduct = (productID) => {
    const product = {
        id: 1,
        name: "T-shirt",
        price: 20,
    };
    if (productID === product.id) {
        return product;
    }
    else {
        console.log('error');
    }
};
const cartItem = addToCart(1, 4);
console.log(cartItem);
