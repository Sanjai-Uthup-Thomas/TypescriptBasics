interface Product {
    id: number;
    name: string;
    price: number;
}
type ShoppingCartItem<T> = {
    product: T;
    quantity: number;
    totalPrice: string;
};
enum Currency {
    USD = "USD",
    EUR = "EUR",
    GBP = "GBP",
}

function addToCart<T extends Product>(
    productId: number,
    quantity: number,
    currency?: Currency
): ShoppingCartItem<T> {
    const product = findProduct(productId)
    const totalPrice = product.price * quantity
    const currencySymbol = currency === Currency.EUR ? "Eur" : currency === Currency.GBP ? "Gbp" : "Usd";
    return {
        product: product,
        quantity: quantity,
        totalPrice: `${currencySymbol}${totalPrice}`
    }
}
const findProduct = (productID: number): any => {
    const product: Product = {
        id: 1,
        name: "T-shirt",
        price: 20,
    };
    if (productID === product.id) {
        return product
    } else {
        console.log('error');
    }
}
const cartItem = addToCart(1, 4);
console.log(cartItem);
